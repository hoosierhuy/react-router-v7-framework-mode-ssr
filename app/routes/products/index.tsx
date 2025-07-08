import { useLoaderData } from 'react-router'

// Local imports
import Navbar from '~/components/Navbar'
import type { MetaFunctionArgs, Product } from '~/types/product'

// Meta function to set the browser tab's title and the DOM's meta tag's name and content attributes
export function meta(args: MetaFunctionArgs) {
	const product = args?.data
	const count = Array.isArray(product) ? product.length : 0

	if (!product) {
		return [
			{ title: 'Welcome to Our Store' },
			{
				name: 'description',
				content:
					'Welcome to our store, we have a great selection of products for you to explore.',
			},
		]
	}

	// Browser tab title and meta description for SEO
	return [
		{ title: `${count} Products Available` },
		{
			name: 'description',
			content: `There are currently ${count} products available in our store.`,
		},
	]
}

export async function loader() {
	const url =
		'https://dummyjson.com/products?limit=10&skip=0&select=id,title,thumbnail'
	const response = await fetch(url)

	if (!response.ok)
		throw new Response('Failed to fetch products', { status: 500 })

	/* I could certainly write: const data = await response.json<ProductResponse>(), but
	my research indicated that Cloudflare Workers or Vercel might not support this syntax yet,
	so I'm casting product type. */
	const data = (await response.json()) as { products: Product[] }

	return data.products
}

type ProductsProps = {
	message?: string
	products?: Product[]
}

function ProductCard({ product }: { product: Product }) {
	return (
		<li className="border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition">
			<a
				href={`/products/${product.id}`}
				className="flex flex-col items-center w-full group"
			>
				<img
					src={product.thumbnail}
					alt={product.title}
					className="w-full h-32 object-cover rounded mb-3 group-hover:scale-105 transition"
				/>
				<h2 className="text-lg font-semibold text-center group-hover:text-blue-600">
					{product.title}
				</h2>
			</a>
		</li>
	)
}

export default function Products({ products }: ProductsProps) {
	const loaderProducts = useLoaderData<Product[]>()
	const data = products ?? loaderProducts

	return (
		<main className="p-6">
			<Navbar productsHref="/" viewTitle="Home" currentPath="/products" />

			<div className="max-w-6xl mx-auto mt-12">
				<ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{data.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</ul>
			</div>
		</main>
	)
}
