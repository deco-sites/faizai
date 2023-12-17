import type { SectionProps } from "deco/mod.ts";
// // import { loader } from "$store/loaders/ReservaToken.tsx"


export interface Props {
    cep: string;
}


export async function loader(
    { cep } : Props,
    _req: Request,
  ) {
    const token = (await fetch(
      `https://reserva.ink/301744/product/moto-modernista`,
    ).then((r) => r.text())
     .then( (r) => {
        return r.match('input type="hidden" name="authenticity_token" value="([^"]*)"')![1];
     }));

    const data = {
        'authenticity_token':token,
        'calculate_shipping[cep]': cep,
        'product_shipping':'[{"product_id":691392,"price":"119.9","weight":"0.3","height":"7.0","width":"40.0","length":"30.0","sku":"007975031201"}]',
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
    return { token, htmlResult };
}


  export default function ReservaShipping(
    { token, htmlResult } : SectionProps<typeof loader>,
  ) {
    const days = htmlResult.match('Entrega Padrão até (.*) dias úteis');

    return (
      <div class="p-4">
        { days![0] }

      </div>
    );
  }
