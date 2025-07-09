export interface Product {
	id: number
	title: string
	description?: string
	thumbnail?: string
	images?: string[]
}
export interface MetaFunctionArgs {
	data?: Product
}

export type ProductsProps = {
	message?: string
	products?: Product[]
}
