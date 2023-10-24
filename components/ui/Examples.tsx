import type { ImageWidget } from "apps/admin/widgets.ts";
import { asset } from "$fresh/runtime.ts";
import Icon from "$store/components/ui/Icon.tsx";

export type Balloon = {
  textBalloon: string;
  imageBalloon: ImageWidget;
};

export interface Props {
  title?: string;
  description?: string;
  buttonText?: string;
  image?: ImageWidget;
  balloons: Balloon[];
  url?: string;
}

function Examples(
  { title, description, buttonText, image, balloons, url }: Props,
) {
  return (
    <>
      <div class="hidden lg:block border-l-[99vw] max-w-full border-l-transparent border-solid border-t-[10.9vw] border-t-white bg-primary">
      </div>
      <div class="flex flex-col gap-32 bg-primary pb-20">
        <div class="flex content-center justify-center
                w-full bg-primary">
          {(title || description || buttonText) &&
            (
              <div
                class={`flex py-20 flex-col gap-12 items-center w-full lg:w-1/2`}
              >
                {title &&
                  (
                    <h1
                      class={`text-4xl lg:text-6xl text-white text-center font-bold
                                `}
                    >
                      {title}
                    </h1>
                  )}

                {description &&
                  (
                    <span class="text-xl lg:text-3xl text-white w-3/4 lg:w-2/3 text-center">
                      Que tal gerar
                      <span class={`text-secondary`}>estampas únicas</span>
                      com o poder da sua imaginação e da
                      <span class={`text-secondary`}>
                        inteligência artificial
                      </span>
                    </span>
                  )}

                {buttonText &&
                  (
                    <a
                      href={url}
                      class="text-lg py-1 px-10 rounded-full bg-primary hover:bg-white hover:scale-110 transition-transform hover:text-primary font-medium lg:text-xl text-white border-solid border-2 border-white "
                    >
                      {buttonText}
                    </a>
                  )}

                {image &&
                  (
                    <div class="lg:hidden relative ">
                      <img
                        class="object-center"
                        src={image}
                        alt={"Nada"}
                        width={956}
                        height={956}
                      />
                    </div>
                  )}
              </div>
            )}

          {image &&
            (
              <div class="hidden lg:block overflow-hidden -mt-40 w-1/2">
                <img
                  class="object-center"
                  src={image}
                  alt={"Nada"}
                  width={956}
                  height={956}
                />
              </div>
            )}
        </div>

        {balloons?.map((balloon, index) => (
          <div class="flex justify-around">
            {index % 2 == 0
              ? (
                <>
                  <div class="relative flex">
                    <Icon
                      id="balao"
                      width={494.2}
                      height={153.7}
                      strokeWidth={0.4}
                    />
                    <span class="absolute z-10 text-3xl mt-6 pl-4">
                      {balloon.textBalloon}
                    </span>
                  </div>
                  <img
                    class="object-center"
                    src={balloon.imageBalloon}
                    alt={"Nada"}
                    width={501}
                    height={501}
                  />
                </>
              )
              : (
                <>
                  <div class="relative flex flex-col">
                    <img
                      class="object-center"
                      src={balloon.imageBalloon}
                      alt={"Nada"}
                      width={501}
                      height={501}
                    />
                    <div class="flex absoltue">
                      <Icon
                        id="linha"
                        width={155}
                        height={70}
                        strokeWidth={0.4}
                      />
                      <span class="text-white text-lg">
                        {"Esse carinha tá disponível na nossa loja :)"}
                      </span>
                    </div>
                  </div>
                  <div class="relative flex">
                    <Icon
                      id="balao"
                      width={494.2}
                      height={153.7}
                      strokeWidth={0.4}
                    />
                    <span class="absolute z-10 text-3xl mt-6 pl-4">
                      {balloon.textBalloon}
                    </span>
                  </div>
                </>
              )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Examples;
