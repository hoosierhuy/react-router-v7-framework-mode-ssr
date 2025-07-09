export interface Product {
	id: number
	title: string
	description?: string
	thumbnail?: string
	images?: string[]
}

export type ProductsProps = {
	products?: Product[]
}

export interface MetaFunctionArgs {
	data?: Product
}
