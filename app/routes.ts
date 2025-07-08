import { index, type RouteConfig, route } from '@react-router/dev/routes'

export default [
	index('routes/welcome.tsx'), // "/" shows Welcome page
	route('products', 'products/Products.tsx'), // "/products" shows Products list
	route('products/:id', 'products/ProductDetail.tsx'), // "/products/123" shows ProductDetail
	route('products/new', 'products/PostProduct.tsx'), // "/products/new" shows PostProduct
	route('*', 'routes/catchall.tsx'), // Catch all route
] satisfies RouteConfig
