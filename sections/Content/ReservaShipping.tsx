import type { SectionProps } from "deco/mod.ts";
// // import { loader } from "$store/loaders/ReservaToken.tsx"


export interface Props {
    cep: string;
    product?: string
}


export async function loader(
    { cep, product } : Props,
    _req: Request,
  ) {
    const { token, specs } = (await fetch(
      `https://reserva.ink/301744/product/${product ?? 'moto-modernista'}`,
    ).then((r) => r.text())
     .then( (r) => {
       const token = r.match('input type="hidden" name="authenticity_token" value="([^"]*)"')![1];
       const specs = r.match('product_shipping" value="([^"]*)"')![1]!.replaceAll('&quot;', '"');
       console.log(specs)
        return { token, specs }
     }));

    const data = {
        'authenticity_token':token,
        'calculate_shipping[cep]': cep,
        'product_shipping':specs,
    }


    const htmlResult = (await fetch(
        'https://reserva.ink/stores/calculate_shipping',
        {
            method: "POST",
            headers: {
                "Content-Type" : 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data)
        }
    ).then ((r) => r.text())
    );
    console.log(htmlResult);
    return { htmlResult };
}


  export default function ReservaShipping(
    { htmlResult } : SectionProps<typeof loader>,
  ) {
    const days = htmlResult.match('Entrega Padrão até (.*) dias úteis');

    return (
      <div class="p-4">
        { days![0] }

      </div>
    );
  }
