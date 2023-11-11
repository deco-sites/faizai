import type { Product } from "apps/commerce/types.ts";

export interface Props{
    products: Product [] | null
}


function Debug ({products}: Props) {
    console.log(products)
}

export default Debug;