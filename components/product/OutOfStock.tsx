import { useSignal } from "@preact/signals";
import { invoke } from "$store/runtime.ts";
import type { Product } from "apps/commerce/types.ts";
import type { JSX } from "preact";

export interface Props {
  productID: Product["productID"];
}

function Notify({ productID }: Props) {
  const loading = useSignal(false);

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      loading.value = true;

      const name = (e.currentTarget.elements.namedItem("name") as RadioNodeList)
        ?.value;
      const email =
        (e.currentTarget.elements.namedItem("email") as RadioNodeList)?.value;

      await invoke.vtex.actions.notifyme({ skuId: productID, name, email });
    } finally {
      loading.value = false;
    }
  };

  return (
    // <form class="form-control justify-start gap-2" onSubmit={handleSubmit}>
    //   <span class="text-base">Este produto está indisponivel no momento</span>
    //   <span class="text-sm">Avise-me quando estiver disponivel</span>

    //   <input placeholder="Nome" class="input input-bordered" name="name" />
    //   <input placeholder="Email" class="input input-bordered" name="email" />

    //   <button class="btn disabled:loading" disabled={loading}>Enviar</button>
    // </form>
    <div class="flex flex-col gap-4 sm:mt-10 w-72">
      <span>Pedimos desculpas, mas este produto está indisponivel no momento</span>
      <button class="btn" disabled={true}>Adicionar à sacola</button>

    </div>
  );
}

export default Notify;
