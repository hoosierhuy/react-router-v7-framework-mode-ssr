// I'm leaving the commented out code here so that my viewers the "before" and "after" of the refactor from programmatic routes to filesystem-based routes.  Make sure you have a good business and technical reason to change from on to the other, because sometimes the programmatic routes are easier to read and understand.

/* import { index, type RouteConfig, route } from '@react-router/dev/routes'
export default [
	index('routes/index.tsx'), // "/" shows Welcome page
	route('products', 'routes/products/index.tsx'), // "/products" shows Products list
	route('products/:id', 'routes/products/[id].tsx'), // "/products/1" shows ProductDetail
	route('products/new', 'routes/products/new.tsx'), // "/products/new" shows PostProduct
	route('*', 'routes/catchall.tsx'), // Catch all route
] satisfies RouteConfig
 */

import type { RouteConfig } from '@react-router/dev/routes'
import { flatRoutes } from '@react-router/fs-routes'

export default flatRoutes() satisfies RouteConfig
// This will automatically generate routes based on the file structure in the 'app/routes' directory
