import { useSignal } from "@preact/signals";
import { invoke } from "$store/runtime.ts";
import type { JSX } from "preact";


export default function ReservaShipping() {

    const loading = useSignal(false);
    const estimateResult = useSignal("");

    const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
    
        try {
          loading.value = true;
    
          const cep =
            (e.currentTarget.elements.namedItem("cep") as RadioNodeList)?.value;
    
          estimateResult.value = await invoke["deco-sites/faizai"].actions.ReservaShippingAction({ "cep": cep });
        } catch {
            estimateResult.value = "Erro ao estimar frete";
        } finally {
          loading.value = false;
        }
      };

    return (
        <div>
            
            <form class="form-control flex-col gap-3" onSubmit={handleSubmit}>
                <div class="text-primary text-base md:text-lg">
                    Veja a estimativa de entrega para o seu endereço!
                </div>
                <div class="flex gap-3">
                    <input type="text" name="cep" placeholder="22222-222" class="text-center border-2 border-primary"/>
                    <button
                        type="submit"
                        class="btn disabled:loading bg-primary text-white"
                        disabled={loading}
                    >
                        {"Calcular"}
                    </button>
                </div>

                { (estimateResult.value != "") &&
                    <div class="text-primary">
                        {estimateResult.value}
                    </div>

                }

            </form>

        </div>
    )
}