import Navbar from '~/components/Navbar'

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
			<Navbar />

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
					individual product pages in the browser's developer console 💻, you
					will see that the DOM's meta tag's name and content attributes are
					also set based on the product information for SEO purposes.🥂
				</p>
				<p className="text-gray-600 mt-4 indent-4">
					I made a companion YouTube tutorial video that goes with this app:{' '}
					<a
						href="https://www.youtube.com/watch?v=xIXBA9JzYMM"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
					>
						<svg
							className="w-5 h-5 mr-2 text-red-500"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-label="YouTube React Router v7 Tutorial"
						>
							<title>YouTube</title>
							<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
						</svg>
						RRv7
					</a>
					. Happy coding! 🚀
				</p>
			</div>
		</main>
	)
}
