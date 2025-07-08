import Nav from '~/navigation/Navbar'

export function meta() {
	return [
		{ title: 'Computer Science For Everyone' },
		{
			name: 'description',
			content: 'Demo React Router v7 Framework Mode app!',
		},
	]
}

// 👇 Add this loader for SSR
export function loader() {
	return { ssr: 'SSR-WORKS' }
}

export default function Welcome({ ssr }: { ssr: string }) {
	return (
		<main className="flex items-center justify-center pt-16 pb-4">
			<Nav />

			<div className="max-w-2xl mx-auto text-center">
				<h2 className="text-2xl center font-bold">Salve Amicis! </h2>
				{ssr}
				<p className="text-gray-600 mt-4">
					Speak Now stadium music video Speak Now Aaron Dressner you need to
					calm down London surprise Blank Space swiftie folk casette Marjorie
					Willow merch debut exile co-writer Swift stained glass windows in my
					mind deluxe [From the Vault] vocalist album of the year stadium
					refrigerator light Cats bonus Fearless Our Song
				</p>
			</div>
		</main>
	)
}
