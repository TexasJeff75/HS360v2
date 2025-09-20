import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: {
    id: number;
    entityId?: number;
    name: string;
    description?: string;
    sku?: string;
    path?: string;
    defaultImage?: {
      url: string;
      altText?: string;
    };
    images?: Array<{
      url_standard?: string;
      url: string;
      description?: string;
      altText?: string;
    }>;
    prices?: {
      price: {
        value: number;
        currencyCode: string;
      };
      salePrice?: {
        value: number;
        currencyCode: string;
      };
      retailPrice?: {
        value: number;
        currencyCode: string;
      };
    };
    price?: number;
    sale_price?: number;
    calculated_price?: number;
    inventory?: {
      isInStock: boolean;
    };
    inventory_level?: number;
    is_visible?: boolean;
    availability?: string;
  };
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { addToCart, loading } = useCart();

  // Handle both REST API and GraphQL product formats
  const productId = product.entityId || product.id;
  const productPath = product.path || `/products/${productId}`;
  const productName = product.name;
  const productDescription = product.description || '';
  
  // Handle image URL - support both formats
  const imageUrl = product.defaultImage?.url || 
                   product.images?.[0]?.url_standard || 
                   product.images?.[0]?.url || 
                   '/placeholder-product.jpg';
  
  const imageAlt = product.defaultImage?.altText || 
                   product.images?.[0]?.altText || 
                   product.images?.[0]?.description || 
                   productName;

  // Handle pricing - support both formats
  const getPrice = () => {
    if (product.prices) {
      return {
        current: product.prices.salePrice?.value || product.prices.price.value,
        original: product.prices.salePrice ? product.prices.price.value : null,
        currency: product.prices.price.currencyCode,
      };
    } else {
      return {
        current: product.sale_price || product.calculated_price || product.price || 0,
        original: product.sale_price ? product.price : null,
        currency: 'USD',
      };
    }
  };

  const pricing = getPrice();

  // Handle stock status
  const isInStock = product.inventory?.isInStock ?? 
                    (product.inventory_level !== undefined ? product.inventory_level > 0 : true);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isInStock || loading) return;
    
    try {
      await addToCart(productId, 1);
    } catch (error) {
      console.error('Failed to add product to cart:', error);
    }
  };

  const formatPrice = (price: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price);
  };

  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${className}`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={productPath} className="block">
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder-product.jpg';
            }}
          />
          
          {/* Stock status badge */}
          {!isInStock && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Out of Stock
            </div>
          )}
          
          {/* Sale badge */}
          {pricing.original && pricing.current < pricing.original && (
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Sale
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
                <Eye className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAddToCart}
                disabled={!isInStock || loading}
                className={`p-3 rounded-full shadow-lg transition-colors ${
                  isInStock && !loading
                    ? 'bg-magenta-500 text-white hover:bg-magenta-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-magenta-600 transition-colors">
            {productName}
          </h3>
          
          {productDescription && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2 font-inter">
              {productDescription.replace(/<[^>]*>/g, '')}
            </p>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900 font-poppins">
                {formatPrice(pricing.current, pricing.currency)}
              </span>
              {pricing.original && pricing.current < pricing.original && (
                <span className="text-lg text-gray-500 line-through font-poppins">
                  {formatPrice(pricing.original, pricing.currency)}
                </span>
              )}
            </div>
            
            <div className={`text-sm font-semibold ${isInStock ? 'text-green-600' : 'text-red-600'}`}>
              {isInStock ? 'In Stock' : 'Out of Stock'}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            disabled={!isInStock || loading}
            className={`w-full mt-4 py-3 px-4 rounded-lg font-poppins font-semibold transition-all ${
              isInStock && !loading
                ? 'bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {loading ? 'Adding...' : isInStock ? 'Add to Cart' : 'Out of Stock'}
          </motion.button>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;