# HealthSpan360 - BigCommerce Headless Storefront

A modern, headless e-commerce storefront built with React, TypeScript, and Tailwind CSS, integrated with BigCommerce for backend commerce functionality.

## Features

- **Headless Architecture**: Frontend built with React/Vite, backend powered by BigCommerce
- **Modern UI/UX**: Beautiful, responsive design with Framer Motion animations
- **BigCommerce Integration**: Full API integration with both REST and GraphQL APIs
- **Shopping Cart**: Complete cart functionality with persistent storage
- **Product Catalog**: Dynamic product listings with search, filtering, and sorting
- **Mobile Responsive**: Optimized for all device sizes
- **Performance Optimized**: Fast loading with modern web technologies

## BigCommerce Setup

### Prerequisites

1. **BigCommerce Store**: You need an active BigCommerce store (trial or paid)
2. **API Credentials**: Generate API credentials from your BigCommerce control panel

### Getting API Credentials

1. Log in to your BigCommerce control panel
2. Go to **Settings** → **API accounts**
3. Click **Create API Account**
4. Choose **Create V2/V3 API Token**
5. Set the following permissions:
   - **Information & Settings**: `read-only`
   - **Products**: `read-only`
   - **Customers**: `read-only`
   - **Orders**: `modify`
   - **Checkout Content**: `modify`
   - **Cart**: `modify`
6. Save and copy your credentials immediately (they're only shown once)

### Environment Configuration

1. Copy `.env.example` to `.env`
2. Fill in your BigCommerce credentials:

```env
VITE_BIGCOMMERCE_STORE_HASH=your_store_hash_here
VITE_BIGCOMMERCE_CLIENT_ID=your_client_id_here
VITE_BIGCOMMERCE_ACCESS_TOKEN=your_access_token_here
VITE_BIGCOMMERCE_API_URL=https://api.bigcommerce.com/stores/your_store_hash_here/v3
VITE_BIGCOMMERCE_STOREFRONT_API_URL=https://store-your_store_hash_here.mybigcommerce.com/graphql
VITE_BIGCOMMERCE_STOREFRONT_TOKEN=your_storefront_token_here
```

### Finding Your Store Hash

Your store hash can be found in:
- Your BigCommerce control panel URL: `https://store-[STORE_HASH].mybigcommerce.com/admin`
- The API Path provided when creating API credentials

## Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   └── CalendlySection.tsx
├── context/            # React context providers
│   └── CartContext.tsx
├── hooks/              # Custom React hooks
│   └── useBigCommerce.ts
├── lib/                # Utility libraries
│   ├── bigcommerce.ts  # BigCommerce API client
│   └── graphql/        # GraphQL queries
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Shop.tsx
│   └── services/       # Service detail pages
└── App.tsx
```

## API Integration

### REST API
Used for management operations like cart management, customer data, and order processing.

### GraphQL Storefront API
Used for frontend operations like product browsing, search, and catalog display.

## Key Features

### Shopping Cart
- Persistent cart storage in localStorage
- Add/remove/update cart items
- Real-time cart total calculation
- Cart context for global state management

### Product Catalog
- Dynamic product listings from BigCommerce
- Search functionality
- Category filtering
- Price-based sorting
- Responsive grid/list views

### Contract Pricing
The system supports BigCommerce's customer groups and price lists for contract pricing:
1. Set up customer groups in BigCommerce admin
2. Create price lists for specific customer groups
3. Customers see their contracted prices when logged in

## Deployment

The application can be deployed to any static hosting service:

- **Bolt Hosting**: Integrated deployment
- **Netlify**: Automatic deployments from Git
- **Vercel**: Optimized for React applications
- **AWS S3 + CloudFront**: Scalable static hosting

## Environment Variables

All BigCommerce credentials should be stored as environment variables:
- Never commit API credentials to version control
- Use different credentials for development/staging/production
- Rotate API tokens regularly for security

## Support

For BigCommerce-specific issues:
- [BigCommerce Developer Documentation](https://developer.bigcommerce.com/)
- [BigCommerce API Reference](https://developer.bigcommerce.com/docs/ZG9jOjEwNzQxOTU-api-reference)
- [BigCommerce GraphQL Playground](https://developer.bigcommerce.com/graphql-playground)

## License

This project is licensed under the MIT License.