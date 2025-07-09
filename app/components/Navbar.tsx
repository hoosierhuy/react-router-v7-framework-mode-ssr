import type { NavbarProps } from '~/types/navBar'

export default function Navbar({
	productsHref = '/products',
	viewTitle = 'Products',
	currentPath = '',
}: NavbarProps) {
	const isProductsPage = currentPath === '/products'

	return (
		<nav className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-white dark:bg-gray-950">
			<div className="flex gap-6">
				<a href={productsHref} className="text-blue-600 dark:text-blue-400">
					{viewTitle}
				</a>
				{/* Show Add Product link only on Products page */}
				{isProductsPage && (
					<a href="/products/new" className="text-blue-600 dark:text-blue-400">
						Add Product
					</a>
				)}
			</div>
		</nav>
	)
}
