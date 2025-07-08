import { useLoaderData } from 'react-router'

// Local imports
import Navbar from '~/components/Navbar'
import type { MetaFunctionArgs, Product } from '~/types/product'

// Meta function to set the page title and description
export function meta(args: MetaFunctionArgs) {
	const product = args?.data

	if (!product) {
		return [
			{ title: 'Product Not Found' },
			{ name: 'description', content: 'No product found for this page.' },
		]
	}
	// Browser tab title and meta description for SEO
	return [
		{ title: product.title },
		{ name: 'description', content: product.description },
	]
}

export async function loader({ params }: { params: { id: string } }) {
	const response = await fetch(`https://dummyjson.com/products/${params.id}`)

	if (!response.ok) throw new Response('Not found', { status: 404 })

	const data = await response.json()

	return data as Product
}

export default function ProductDetail() {
	const product = useLoaderData<Product>()

	return (
		<main className="p-6">
			<Navbar productsHref="/products" viewTitle="Products" />

			<div className="max-w-xl mx-auto border rounded-lg p-6 flex flex-col items-center mt-12">
				<img
					src={product?.images?.[0]} // The Api always return images within an array
					alt={product?.title}
					className="w-full h-64 object-cover rounded mb-4"
				/>
				<h1 className="text-2xl font-bold mb-2">{product?.title}</h1>
				<p className="text-gray-700">{product?.description}</p>
				<p>
					<a href="/products" className="text-blue-600 hover:underline">
						Back to Products
					</a>
				</p>
			</div>
		</main>
	)
}
