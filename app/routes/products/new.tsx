// Local imports
import Navbar from '~/components/Navbar'

// Server-side action for posting a product
export async function action({ request }: { request: Request }) {
	const formData = await request.formData()

	const product = {
		title: formData.get('title'),
		price: Number(formData.get('price')),
	}

	const response = await fetch('https://dummyjson.com/products/add', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(product),
	})

	if (!response.ok) throw new Response('Failed to add product', { status: 500 })

	return response.json()
}

export default function PostProduct({
	actionData,
}: {
	actionData?: { id?: number; title?: string }
}) {
	return (
		<main className="p-6">
			<Navbar viewTitle="Products" productsHref="/products" />

			<div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
				<h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
					Add Product
				</h2>
				<form method="post" className="space-y-5">
					<section>
						<label
							htmlFor="title"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Title:
						</label>
						<input
							id="title"
							name="title"
							required
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Product title"
						/>
					</section>
					<section>
						<label
							htmlFor="price"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Price:
						</label>
						<input
							id="price"
							name="price"
							type="number"
							inputMode="decimal"
							step="0.01"
							min="0"
							required
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Product price"
						/>
					</section>
					<button
						type="submit"
						className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-colors"
					>
						Add Product
					</button>
				</form>
				{actionData?.id && (
					<section className="mt-6 p-4 bg-green-100 border border-green-300 rounded text-green-800 text-center">
						<strong>Product added:</strong> {actionData.title} (ID:{' '}
						{actionData.id})
					</section>
				)}
			</div>
		</main>
	)
}

// Meta function to set the browser tab's title and the DOM's meta tag's name and content attributes
export function meta() {
	return [
		{ title: 'Add New Product' },
		{
			name: 'description',
			content: 'Add new product section for admins.',
		},
	]
}
