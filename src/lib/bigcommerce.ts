import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import axios from 'axios';

// BigCommerce configuration
const STORE_HASH = import.meta.env.VITE_BIGCOMMERCE_STORE_HASH;
const CLIENT_ID = import.meta.env.VITE_BIGCOMMERCE_CLIENT_ID;
const ACCESS_TOKEN = import.meta.env.VITE_BIGCOMMERCE_ACCESS_TOKEN;
const API_URL = import.meta.env.VITE_BIGCOMMERCE_API_URL;
const STOREFRONT_API_URL = import.meta.env.VITE_BIGCOMMERCE_STOREFRONT_API_URL;
const STOREFRONT_TOKEN = import.meta.env.VITE_BIGCOMMERCE_STOREFRONT_TOKEN;

// REST API client for management operations
export const bigCommerceAPI = axios.create({
  baseURL: API_URL,
  headers: {
    'X-Auth-Token': ACCESS_TOKEN,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// GraphQL client for storefront operations
const httpLink = createHttpLink({
  uri: STOREFRONT_API_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: STOREFRONT_TOKEN ? `Bearer ${STOREFRONT_TOKEN}` : '',
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Types
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  sale_price?: number;
  sku: string;
  weight: number;
  width: number;
  depth: number;
  height: number;
  fixed_cost_shipping_price: number;
  is_free_shipping: boolean;
  inventory_level: number;
  inventory_warning_level: number;
  inventory_tracking: string;
  retail_price: number;
  tax_class_id: number;
  product_tax_code: string;
  calculated_price: number;
  categories: number[];
  brand_id: number;
  option_set_id: number;
  option_set_display: string;
  inventory_tracking_type: string;
  fixed_cost_shipping_price_formatted: string;
  is_condition_shown: boolean;
  condition: string;
  is_visible: boolean;
  availability: string;
  availability_description: string;
  gift_wrapping_options_type: string;
  gift_wrapping_options_list: number[];
  sort_order: number;
  date_created: string;
  date_modified: string;
  view_count: number;
  preorder_release_date: string;
  preorder_message: string;
  is_preorder_only: boolean;
  is_price_hidden: boolean;
  price_hidden_label: string;
  custom_url: {
    url: string;
    is_customized: boolean;
  };
  base_variant_id: number;
  open_graph_type: string;
  open_graph_title: string;
  open_graph_description: string;
  open_graph_use_meta_description: boolean;
  open_graph_use_product_name: boolean;
  open_graph_use_image: boolean;
  images: ProductImage[];
  videos: ProductVideo[];
  custom_fields: CustomField[];
  bulk_pricing_rules: BulkPricingRule[];
  variants: ProductVariant[];
}

export interface ProductImage {
  id: number;
  product_id: number;
  is_thumbnail: boolean;
  sort_order: number;
  description: string;
  image_file: string;
  url_zoom: string;
  url_standard: string;
  url_thumbnail: string;
  url_tiny: string;
  date_modified: string;
}

export interface ProductVideo {
  id: number;
  product_id: number;
  sort_order: number;
  name: string;
  description: string;
  video_id: string;
  type: string;
  length: string;
}

export interface CustomField {
  id: number;
  name: string;
  value: string;
}

export interface BulkPricingRule {
  id: number;
  quantity_min: number;
  quantity_max: number;
  type: string;
  amount: number;
}

export interface ProductVariant {
  id: number;
  product_id: number;
  sku: string;
  sku_id: number;
  price: number;
  calculated_price: number;
  sale_price: number;
  retail_price: number;
  map_price: number;
  weight: number;
  width: number;
  height: number;
  depth: number;
  is_free_shipping: boolean;
  fixed_cost_shipping_price: number;
  purchasing_disabled: boolean;
  purchasing_disabled_message: string;
  image_url: string;
  cost_price: number;
  upc: string;
  mpn: string;
  gtin: string;
  inventory_level: number;
  inventory_warning_level: number;
  bin_picking_number: string;
  option_values: OptionValue[];
}

export interface OptionValue {
  id: number;
  label: string;
  option_id: number;
  option_display_name: string;
}

export interface Category {
  id: number;
  parent_id: number;
  name: string;
  description: string;
  views: number;
  sort_order: number;
  page_title: string;
  meta_keywords: string[];
  meta_description: string;
  layout_file: string;
  is_visible: boolean;
  search_keywords: string;
  default_product_sort: string;
  image_url: string;
  custom_url: {
    url: string;
    is_customized: boolean;
  };
}

export interface Customer {
  id: number;
  company: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  date_created: string;
  date_modified: string;
  store_credit: number;
  registration_ip_address: string;
  customer_group_id: number;
  notes: string;
  tax_exempt_category: string;
  addresses: CustomerAddress[];
  form_fields: FormField[];
}

export interface CustomerAddress {
  id: number;
  customer_id: number;
  first_name: string;
  last_name: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  country_iso2: string;
  phone: string;
  address_type: string;
  form_fields: FormField[];
}

export interface FormField {
  name: string;
  value: string;
}

export interface Cart {
  id: string;
  customer_id: number;
  email: string;
  currency: {
    code: string;
  };
  tax_included: boolean;
  base_amount: number;
  discount_amount: number;
  cart_amount: number;
  line_items: {
    physical_items: CartLineItem[];
    digital_items: CartLineItem[];
    gift_certificates: CartGiftCertificate[];
    custom_items: CartCustomItem[];
  };
  created_time: string;
  updated_time: string;
  locale: string;
}

export interface CartLineItem {
  id: string;
  parent_id: string;
  variant_id: number;
  product_id: number;
  sku: string;
  name: string;
  url: string;
  quantity: number;
  taxable: boolean;
  image_url: string;
  discounts: CartDiscount[];
  coupons: CartCoupon[];
  discount_amount: number;
  coupon_amount: number;
  list_price: number;
  sale_price: number;
  extended_list_price: number;
  extended_sale_price: number;
  is_require_shipping: boolean;
  is_mutable: boolean;
  option_selections: OptionSelection[];
}

export interface CartGiftCertificate {
  id: string;
  name: string;
  theme: string;
  amount: number;
  taxable: boolean;
  sender: {
    name: string;
    email: string;
  };
  recipient: {
    name: string;
    email: string;
  };
  message: string;
}

export interface CartCustomItem {
  id: string;
  sku: string;
  name: string;
  quantity: number;
  list_price: number;
}

export interface CartDiscount {
  id: number;
  discounted_amount: number;
}

export interface CartCoupon {
  id: number;
  code: string;
  display_name: string;
  coupon_type: string;
  discounted_amount: number;
}

export interface OptionSelection {
  option_id: number;
  option_value: number | string;
}

// API Functions
export const getProducts = async (params?: {
  limit?: number;
  page?: number;
  include?: string[];
  sort?: string;
  direction?: 'asc' | 'desc';
  keyword?: string;
  categories?: number[];
  brand_id?: number;
  price_min?: number;
  price_max?: number;
  is_visible?: boolean;
  is_featured?: boolean;
  availability?: string;
}): Promise<{ data: Product[]; meta: any }> => {
  try {
    const response = await bigCommerceAPI.get('/catalog/products', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProduct = async (productId: number, params?: {
  include?: string[];
}): Promise<Product> => {
  try {
    const response = await bigCommerceAPI.get(`/catalog/products/${productId}`, { params });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const getCategories = async (params?: {
  limit?: number;
  page?: number;
  parent_id?: number;
  name?: string;
  is_visible?: boolean;
}): Promise<{ data: Category[]; meta: any }> => {
  try {
    const response = await bigCommerceAPI.get('/catalog/categories', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const createCart = async (cartData: {
  line_items: Array<{
    quantity: number;
    product_id: number;
    variant_id?: number;
    option_selections?: OptionSelection[];
  }>;
  customer_id?: number;
  locale?: string;
}): Promise<Cart> => {
  try {
    const response = await bigCommerceAPI.post('/carts', cartData);
    return response.data.data;
  } catch (error) {
    console.error('Error creating cart:', error);
    throw error;
  }
};

export const getCart = async (cartId: string, params?: {
  include?: string[];
}): Promise<Cart> => {
  try {
    const response = await bigCommerceAPI.get(`/carts/${cartId}`, { params });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};

export const addCartItem = async (cartId: string, lineItem: {
  quantity: number;
  product_id: number;
  variant_id?: number;
  option_selections?: OptionSelection[];
}): Promise<Cart> => {
  try {
    const response = await bigCommerceAPI.post(`/carts/${cartId}/items`, {
      line_item: lineItem
    });
    return response.data.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};

export const updateCartItem = async (cartId: string, itemId: string, updates: {
  quantity?: number;
  product_id?: number;
  variant_id?: number;
}): Promise<Cart> => {
  try {
    const response = await bigCommerceAPI.put(`/carts/${cartId}/items/${itemId}`, {
      line_item: updates
    });
    return response.data.data;
  } catch (error) {
    console.error('Error updating cart item:', error);
    throw error;
  }
};

export const removeCartItem = async (cartId: string, itemId: string): Promise<Cart> => {
  try {
    const response = await bigCommerceAPI.delete(`/carts/${cartId}/items/${itemId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error removing cart item:', error);
    throw error;
  }
};

export const deleteCart = async (cartId: string): Promise<void> => {
  try {
    await bigCommerceAPI.delete(`/carts/${cartId}`);
  } catch (error) {
    console.error('Error deleting cart:', error);
    throw error;
  }
};