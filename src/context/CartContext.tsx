import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Cart, CartLineItem, createCart, getCart, addCartItem, updateCartItem, removeCartItem, deleteCart } from '../lib/bigcommerce';

interface CartState {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
}

type CartAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_CART'; payload: Cart | null }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  cart: null,
  loading: false,
  error: null,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_CART':
      return { ...state, cart: action.payload, loading: false, error: null };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'CLEAR_CART':
      return { ...state, cart: null, error: null };
    default:
      return state;
  }
};

interface CartContextType extends CartState {
  addToCart: (productId: number, quantity?: number, variantId?: number) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCartId = localStorage.getItem('bigcommerce_cart_id');
    if (savedCartId) {
      loadCart(savedCartId);
    }
  }, []);

  const loadCart = async (cartId: string) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const cart = await getCart(cartId, { include: 'line_items.physical_items.options' });
      dispatch({ type: 'SET_CART', payload: cart });
    } catch (error) {
      console.error('Error loading cart:', error);
      // If cart doesn't exist, clear the stored cart ID
      localStorage.removeItem('bigcommerce_cart_id');
      dispatch({ type: 'SET_ERROR', payload: 'Failed to load cart' });
    }
  };

  const addToCart = async (productId: number, quantity = 1, variantId?: number) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      let cart = state.cart;
      
      // Create new cart if none exists
      if (!cart) {
        cart = await createCart({
          line_items: [{
            quantity,
            product_id: productId,
            variant_id: variantId,
          }],
        });
        localStorage.setItem('bigcommerce_cart_id', cart.id);
      } else {
        // Add item to existing cart
        cart = await addCartItem(cart.id, {
          quantity,
          product_id: productId,
          variant_id: variantId,
        });
      }
      
      dispatch({ type: 'SET_CART', payload: cart });
    } catch (error) {
      console.error('Error adding to cart:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to add item to cart' });
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    if (!state.cart) return;

    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      if (quantity <= 0) {
        await removeFromCart(itemId);
        return;
      }

      const updatedCart = await updateCartItem(state.cart.id, itemId, { quantity });
      dispatch({ type: 'SET_CART', payload: updatedCart });
    } catch (error) {
      console.error('Error updating cart item:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to update item quantity' });
    }
  };

  const removeFromCart = async (itemId: string) => {
    if (!state.cart) return;

    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const updatedCart = await removeCartItem(state.cart.id, itemId);
      dispatch({ type: 'SET_CART', payload: updatedCart });
    } catch (error) {
      console.error('Error removing from cart:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to remove item from cart' });
    }
  };

  const clearCart = async () => {
    if (!state.cart) return;

    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      await deleteCart(state.cart.id);
      localStorage.removeItem('bigcommerce_cart_id');
      dispatch({ type: 'CLEAR_CART' });
    } catch (error) {
      console.error('Error clearing cart:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to clear cart' });
    }
  };

  const getCartTotal = (): number => {
    if (!state.cart) return 0;
    return state.cart.cart_amount || 0;
  };

  const getCartItemCount = (): number => {
    if (!state.cart) return 0;
    
    const physicalItems = state.cart.line_items?.physical_items || [];
    const digitalItems = state.cart.line_items?.digital_items || [];
    
    return [...physicalItems, ...digitalItems].reduce((total, item) => total + item.quantity, 0);
  };

  const value: CartContextType = {
    ...state,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};