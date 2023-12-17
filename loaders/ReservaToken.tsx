
export interface Props {
    reservaToken: string;
    productId: string;

}


export async function loader (
    _req: Request
) {
    const { token: reservaToken } = (await fetch(
        'https://reserva.ink/301744/product/moto-modernista'
    ).then((r) => r.text())) as {token: string};
    return { reservaToken }
}