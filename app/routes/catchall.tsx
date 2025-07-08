export function meta() {
	return [
		{ title: 'Product Not Found' },
		{
			name: 'description',
			content: "You don't find Taylor Swift, she finds you.",
		},
	]
}

export default function CatchAll() {
	return (
		<main className="p-8 text-center">
			<h1 className="text-3xl font-bold mb-4">404 - Product Not Found</h1>
			<p className="text-gray-600">
				Sorry, the page you are looking for does not exist.
			</p>
		</main>
	)
}
