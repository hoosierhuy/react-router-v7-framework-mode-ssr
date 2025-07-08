import Nav from '~/components/Navbar'

export function meta() {
	return [
		{ title: 'Computer Science For Everyone' },
		{
			name: 'description',
			content: 'Demo React Router v7 Framework Mode app!',
		},
	]
}

// 👇 Added this loader for SSR testing
export function loader() {
	return { ssr: 'SSR IS WORKING' }
}

export default function Welcome({ ssr }: { ssr: string }) {
	return (
		<main className="flex items-center justify-center pt-16 pb-4">
			<Nav />

			<div className="max-w-2xl mx-auto">
				<h2 className="text-2xl font-bold text-center">Salve Amicis! </h2>
				{ssr}
				<p className="text-gray-600 mt-4 indent-4">
					This app is built with React Router v7 Framework Mode, this app is a
					demo of React Router v7's ability to handle server-side rendering
					(SSR) and to fetch and post data without the useEffect hook, nor
					Tanstack Query, nor any other library, again all server-side rendered,
					for SEO. If you take a look at the Products page, the individual
					products have their own browser tab title, and if you inspect the
					individual product pages, you will see that the DOM's meta tag's name
					and content attributes are also set based on the product information
					for SEO purposes.
				</p>
			</div>
		</main>
	)
}
