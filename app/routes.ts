import { index, type RouteConfig, route } from '@react-router/dev/routes'

export default [
	index('routes/index.tsx'), // "/" shows Welcome page
	route('products', 'routes/products/index.tsx'), // "/products" shows Products list
	route('products/:id', 'routes/products/[id].tsx'), // "/products/1" shows ProductDetail
	route('products/new', 'routes/products/new.tsx'), // "/products/new" shows PostProduct
	route('*', 'routes/catchall.tsx'), // Catch all route
] satisfies RouteConfig
