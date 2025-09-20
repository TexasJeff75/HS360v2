import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client/react';
import { getProducts, getProduct, getCategories, Product, Category } from '../lib/bigcommerce';
import { GET_PRODUCTS, GET_PRODUCT, GET_CATEGORIES } from '../lib/graphql/queries';

// Hook for fetching products using REST API
export const useProducts = (params?: {
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
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<any>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await getProducts(params);
        setProducts(response.data);
        setMeta(response.meta);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [JSON.stringify(params)]);

  return { products, loading, error, meta };
};

// Hook for fetching a single product using REST API
export const useProduct = (productId: number, params?: { include?: string[] }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productData = await getProduct(productId, params);
        setProduct(productData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, JSON.stringify(params)]);

  return { product, loading, error };
};

// Hook for fetching categories using REST API
export const useCategories = (params?: {
  limit?: number;
  page?: number;
  parent_id?: number;
  name?: string;
  is_visible?: boolean;
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<any>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await getCategories(params);
        setCategories(response.data);
        setMeta(response.meta);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch categories');
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [JSON.stringify(params)]);

  return { categories, loading, error, meta };
};

// Hook for fetching products using GraphQL (Storefront API)
export const useProductsGraphQL = (variables?: {
  first?: number;
  after?: string;
  filters?: any;
}) => {
  const { loading, error, data, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: {
      first: 12,
      ...variables,
    },
    errorPolicy: 'all',
  });

  const products = data?.site?.products?.edges?.map((edge: any) => edge.node) || [];
  const pageInfo = data?.site?.products?.pageInfo;

  const loadMore = () => {
    if (pageInfo?.hasNextPage) {
      fetchMore({
        variables: {
          ...variables,
          after: pageInfo.endCursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          
          return {
            ...fetchMoreResult,
            site: {
              ...fetchMoreResult.site,
              products: {
                ...fetchMoreResult.site.products,
                edges: [
                  ...prev.site.products.edges,
                  ...fetchMoreResult.site.products.edges,
                ],
              },
            },
          };
        },
      });
    }
  };

  return {
    products,
    loading,
    error,
    pageInfo,
    loadMore,
  };
};

// Hook for fetching a single product using GraphQL
export const useProductGraphQL = (entityId: number) => {
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { entityId },
    skip: !entityId,
    errorPolicy: 'all',
  });

  const product = data?.site?.product;

  return {
    product,
    loading,
    error,
  };
};

// Hook for fetching categories using GraphQL
export const useCategoriesGraphQL = (variables?: {
  first?: number;
  after?: string;
}) => {
  const { loading, error, data } = useQuery(GET_CATEGORIES, {
    variables: {
      first: 50,
      ...variables,
    },
    errorPolicy: 'all',
  });

  const categories = data?.site?.categoryTree?.edges?.map((edge: any) => edge.node) || [];
  const pageInfo = data?.site?.categoryTree?.pageInfo;

  return {
    categories,
    loading,
    error,
    pageInfo,
  };
};