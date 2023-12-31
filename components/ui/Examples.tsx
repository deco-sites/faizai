import type { ImageWidget } from "apps/admin/widgets.ts";
import { asset } from "$fresh/runtime.ts";
import Icon from "$store/components/ui/Icon.tsx";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export type Balloon = {
  textBalloon: string;
  imageDesktop: ImageWidget;
  imageMobile: ImageWidget;
  altText: string;
};

export interface Props {
  title?: string;
  /** @format html */
  description?: string;
  buttonText?: string;
  image?: ImageWidget;
  altTextImage?: string;
  balloons: Balloon[];
  url?: string;
}

function Examples(
  { title, description, buttonText, image, altTextImage, balloons, url }: Props,
) {
  const lcp = false;
  return (
    <>
      <div id="faizaibot" class="hidden lg:block border-l-[99vw] max-w-full border-l-transparent border-solid border-t-[10.9vw] border-t-white bg-primary">
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
                    <span dangerouslySetInnerHTML={{__html:description}} class="text-xl lg:text-3xl w-3/4 lg:w-2/3 text-center">
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
                        loading={"lazy"}
                        src={image}
                        alt={altTextImage}
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
                  alt={altTextImage}
                  width={956}
                  height={956}
                  loading={"lazy"}
                />
              </div>
            )}
        </div>

        {balloons?.map((balloon, index) => (
          <div class="grid">
            {index % 2 == 0
              ? (
                <>
                  <div class="grid gap-5 justify-items-center md:flex md:justify-around">
                    <div class="relative flex">

                      <div class="hidden md:block">
                        <Icon
                          id="balao"
                          width={494.2}
                          height={153.7}
                          strokeWidth={0.4}
                          flipX={true}
                        />
                      </div>
                      <div class="md:hidden">
                        <Icon
                          id="balao"
                          width={329.5}
                          height={102.5}
                          strokeWidth={0.4}
                          flipX={true}
                        />
                      </div>
                      <span class="absolute self-start z-10 text-lg md:text-3xl mt-2 md:mt-6 pl-4">
                        {balloon.textBalloon}
                      </span>
                    </div>

                    <Picture preload={lcp}>
                      <Source
                        media="(max-width: 767px)"
                        fetchPriority={lcp ? "high" : "auto"}
                        src={balloon.imageMobile}
                        width={307}
                        height={307}
                      />
                      <Source
                        media="(min-width: 768px)"
                        fetchPriority={lcp ? "high" : "auto"}
                        src={balloon.imageDesktop}
                        width={501}
                        height={501}
                      />
                      <img
                        class="object-contain"
                        loading={"lazy"}
                        src={balloon.imageDesktop}
                        alt={balloon.altText}
                      />
                    </Picture>
                  </div>
                </>
              )
              : (
                <>
                  <div class="grid gap-5 justify-items-center md:flex md:justify-around">
                      
                      {/* Speech text mobile*/}
                      <div class="relative flex md:hidden">
                        <Icon
                          id="balao"
                          width={329.5}
                          height={102.5}
                          strokeWidth={0.4}
                        />
                        <span class="absolute self-start z-10 text-lg md:text-3xl mt-2 md:mt-6 pl-4">
                        {balloon.textBalloon}
                        </span>
                      </div>
                      
                      {/* Image */}
                      <div class="relative grid">
                        <Picture preload={lcp}>
                          <Source
                            media="(max-width: 767px)"
                            fetchPriority={lcp ? "high" : "auto"}
                            src={balloon.imageMobile}
                            width={307}
                            height={307}
                          />
                          <Source
                            media="(min-width: 768px)"
                            fetchPriority={lcp ? "high" : "auto"}
                            src={balloon.imageDesktop}
                            width={501}
                            height={501}
                          />
                          <img
                            class="object-contain"
                            loading={"lazy"}
                            src={balloon.imageDesktop}
                            alt={balloon.altText}
                          />
                        </Picture>

                        {/* Small arrow */}
                        <div class="md:absolute grid md:flex md:justify-center md:w-full gap-2 md:items-baseline self-end ml-5 md:ml-[26rem] -mt-6 md:mt-0">
                          <Icon
                            id="linha"
                            width={77.5}
                            height={35}
                            strokeWidth={0.1}
                            fill={"white"}
                            class="rotate-45 md:rotate-0"
                            flipX={true}
                          />
                          <span class="text-white text-lg">
                            {"Esse carinha tá disponível na nossa loja :)"}
                          </span>
                        </div>
                      </div>


                    {/* Speech text Desktop */}
                    <div class="hidden md:relative md:flex">
                        <Icon
                          id="balao"
                          width={494.2}
                          height={153.7}
                          strokeWidth={0.4}
                          loading={"lazy"}
                        />
                      <span class="hidden md:block md:absolute z-10 text-3xl mt-6 pl-4">
                        {balloon.textBalloon}
                      </span>
                    </div>
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
