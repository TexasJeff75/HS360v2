import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts($first: Int, $after: String, $filters: ProductFiltersInput) {
    site {
      products(first: $first, after: $after, filters: $filters) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            id
            entityId
            name
            description
            sku
            path
            defaultImage {
              url(width: 500, height: 500)
              altText
            }
            images {
              edges {
                node {
                  url(width: 500, height: 500)
                  altText
                }
              }
            }
            prices {
              price {
                value
                currencyCode
              }
              salePrice {
                value
                currencyCode
              }
              retailPrice {
                value
                currencyCode
              }
              basePrice {
                value
                currencyCode
              }
            }
            inventory {
              isInStock
              hasVariantInventory
            }
            categories {
              edges {
                node {
                  id
                  entityId
                  name
                  path
                }
              }
            }
            brand {
              id
              entityId
              name
              path
            }
            variants {
              edges {
                node {
                  id
                  entityId
                  sku
                  prices {
                    price {
                      value
                      currencyCode
                    }
                    salePrice {
                      value
                      currencyCode
                    }
                  }
                  inventory {
                    isInStock
                  }
                  defaultImage {
                    url(width: 500, height: 500)
                    altText
                  }
                  productOptions {
                    edges {
                      node {
                        id
                        entityId
                        displayName
                        ... on MultipleChoiceOption {
                          values {
                            edges {
                              node {
                                id
                                entityId
                                label
                                isDefault
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            productOptions {
              edges {
                node {
                  id
                  entityId
                  displayName
                  isRequired
                  ... on MultipleChoiceOption {
                    displayStyle
                    values {
                      edges {
                        node {
                          id
                          entityId
                          label
                          isDefault
                        }
                      }
                    }
                  }
                  ... on CheckboxOption {
                    checkedByDefault
                  }
                  ... on NumberFieldOption {
                    defaultValue
                    lowest
                    highest
                    isIntegerOnly
                    limitNumberBy
                  }
                  ... on TextFieldOption {
                    defaultValue
                    minLength
                    maxLength
                  }
                  ... on MultiLineTextFieldOption {
                    defaultValue
                    minLength
                    maxLength
                    maxLines
                  }
                  ... on FileUploadFieldOption {
                    maxFileSize
                    fileTypes
                  }
                  ... on DateFieldOption {
                    defaultValue
                    earliest
                    latest
                    limitDateBy
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($entityId: Int!) {
    site {
      product(entityId: $entityId) {
        id
        entityId
        name
        description
        plainTextDescription
        sku
        path
        defaultImage {
          url(width: 800, height: 800)
          altText
        }
        images {
          edges {
            node {
              url(width: 800, height: 800)
              altText
            }
          }
        }
        prices {
          price {
            value
            currencyCode
          }
          salePrice {
            value
            currencyCode
          }
          retailPrice {
            value
            currencyCode
          }
          basePrice {
            value
            currencyCode
          }
          priceRange {
            min {
              value
              currencyCode
            }
            max {
              value
              currencyCode
            }
          }
        }
        inventory {
          isInStock
          hasVariantInventory
        }
        categories {
          edges {
            node {
              id
              entityId
              name
              path
            }
          }
        }
        brand {
          id
          entityId
          name
          path
        }
        variants {
          edges {
            node {
              id
              entityId
              sku
              prices {
                price {
                  value
                  currencyCode
                }
                salePrice {
                  value
                  currencyCode
                }
              }
              inventory {
                isInStock
              }
              defaultImage {
                url(width: 800, height: 800)
                altText
              }
              productOptions {
                edges {
                  node {
                    id
                    entityId
                    displayName
                    ... on MultipleChoiceOption {
                      values {
                        edges {
                          node {
                            id
                            entityId
                            label
                            isDefault
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        productOptions {
          edges {
            node {
              id
              entityId
              displayName
              isRequired
              ... on MultipleChoiceOption {
                displayStyle
                values {
                  edges {
                    node {
                      id
                      entityId
                      label
                      isDefault
                    }
                  }
                }
              }
              ... on CheckboxOption {
                checkedByDefault
              }
              ... on NumberFieldOption {
                defaultValue
                lowest
                highest
                isIntegerOnly
                limitNumberBy
              }
              ... on TextFieldOption {
                defaultValue
                minLength
                maxLength
              }
              ... on MultiLineTextFieldOption {
                defaultValue
                minLength
                maxLength
                maxLines
              }
              ... on FileUploadFieldOption {
                maxFileSize
                fileTypes
              }
              ... on DateFieldOption {
                defaultValue
                earliest
                latest
                limitDateBy
              }
            }
          }
        }
        customFields {
          edges {
            node {
              id
              entityId
              name
              value
            }
          }
        }
        seo {
          pageTitle
          metaDescription
          metaKeywords
        }
        giftWrappingOptions {
          edges {
            node {
              id
              entityId
              name
            }
          }
        }
        relatedProducts {
          edges {
            node {
              id
              entityId
              name
              path
              defaultImage {
                url(width: 300, height: 300)
                altText
              }
              prices {
                price {
                  value
                  currencyCode
                }
                salePrice {
                  value
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories($first: Int, $after: String) {
    site {
      categoryTree(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            id
            entityId
            name
            path
            description
            image {
              url(width: 300, height: 300)
              altText
            }
            products {
              edges {
                node {
                  id
                  entityId
                  name
                }
              }
            }
            children {
              edges {
                node {
                  id
                  entityId
                  name
                  path
                  description
                  image {
                    url(width: 300, height: 300)
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  query GetCategory($entityId: Int!) {
    site {
      category(entityId: $entityId) {
        id
        entityId
        name
        path
        description
        image {
          url(width: 800, height: 400)
          altText
        }
        products {
          edges {
            node {
              id
              entityId
              name
              description
              sku
              path
              defaultImage {
                url(width: 500, height: 500)
                altText
              }
              prices {
                price {
                  value
                  currencyCode
                }
                salePrice {
                  value
                  currencyCode
                }
              }
              inventory {
                isInStock
              }
            }
          }
        }
        children {
          edges {
            node {
              id
              entityId
              name
              path
              description
              image {
                url(width: 300, height: 300)
                altText
              }
            }
          }
        }
        breadcrumbs {
          edges {
            node {
              id
              entityId
              name
              path
            }
          }
        }
        seo {
          pageTitle
          metaDescription
          metaKeywords
        }
      }
    }
  }
`;

export const SEARCH_PRODUCTS = gql`
  query SearchProducts($filters: SearchProductsFiltersInput!, $sort: SearchProductsSortInput) {
    site {
      search {
        searchProducts(filters: $filters, sort: $sort) {
          products {
            edges {
              node {
                id
                entityId
                name
                description
                sku
                path
                defaultImage {
                  url(width: 500, height: 500)
                  altText
                }
                prices {
                  price {
                    value
                    currencyCode
                  }
                  salePrice {
                    value
                    currencyCode
                  }
                }
                inventory {
                  isInStock
                }
                categories {
                  edges {
                    node {
                      id
                      entityId
                      name
                      path
                    }
                  }
                }
                brand {
                  id
                  entityId
                  name
                  path
                }
              }
            }
          }
          filters {
            edges {
              node {
                name
                isCollapsedByDefault
                ... on BrandSearchFilter {
                  displayProductCount
                  brands {
                    edges {
                      node {
                        id
                        entityId
                        name
                        isSelected
                        productCount
                      }
                    }
                  }
                }
                ... on CategorySearchFilter {
                  displayProductCount
                  categories {
                    edges {
                      node {
                        id
                        entityId
                        name
                        isSelected
                        productCount
                        subCategories {
                          edges {
                            node {
                              id
                              entityId
                              name
                              isSelected
                              productCount
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on ProductAttributeSearchFilter {
                  displayProductCount
                  filterName
                  attributes {
                    edges {
                      node {
                        value
                        isSelected
                        productCount
                      }
                    }
                  }
                }
                ... on PriceSearchFilter {
                  selected {
                    minPrice
                    maxPrice
                  }
                }
                ... on RatingSearchFilter {
                  ratings {
                    edges {
                      node {
                        value
                        isSelected
                        productCount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;