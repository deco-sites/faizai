export interface Props {
    cep: string;
    product?: string
}


export default async function loader(
    { cep, product } : Props,
    _req: Request,
  ) : Promise< string | null > {
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
    const days = htmlResult.match('mt-2">\n(.*)\n(.*)\n(.*)\n');
    const result = days![1] + days![2] + days![3];
    return result ;
}