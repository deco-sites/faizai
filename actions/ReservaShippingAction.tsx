import { AppContext } from "../apps/site.ts";

export interface ActionProps {
    cep: string;
    product?: string
}
export const  action = async (
    props: ActionProps,
    _req: Request,
    ctx: AppContext
) => {

    const loaderResponse = await ctx.invoke["deco-sites/faizai"].loaders.ReservaShipping(props)
    return loaderResponse;
}

export default action;