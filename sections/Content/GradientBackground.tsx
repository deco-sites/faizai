import { asset } from "$fresh/runtime.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  buttonText: string;
  image: ImageWidget;
  altTextImage: string;
  url: string;
}

export default function GradientBackground({ buttonText, image, altTextImage, url }: Props) {
  return (
    <>
      <style>
        {`


            .background-animate {
                background-size: 400%;
                
                -webkit-animation: AnimationName 8s ease infinite;
                -moz-animation: AnimationName 8s ease infinite;
                animation: AnimationName 8s ease infinite;
            }

            @keyframes AnimationName {
                0%,
                100% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 100%;
                }
                            }
            `}
      </style>
      <div class="bg-gradient-to-br from-[#ee7752] via-[#e73c7e] to-[#23a6d5] w-full h-full background-animate">
        <div class="flex flex-col items-center gap-16 h-full">
          
          <div class="flex flex-col md:flex-row justify-center items-center md:contents-center gap-2 mt-5">
            <svg
              width={30}
              height={30}
              strokeWidth={"10px"}
              fill={"white"}
              class="md:align-middle md:inline-block"
            >
              <use
                href={asset(`/sprites.svg#LogoQualidade`)}
              />
            </svg>
            <span class="text-white font-bold text-lg md:align-middle md:inline-block">
              QUALIDADE RESERVA INK
            </span>
          </div>
          
          <div class="grid justify-items-center md:flex md:relative w-full md:justify-center md:items-start">
            
            {/* desktop  */}
            <div class="block md:hidden text-white font-bold text-3xl">
                Você imagina, a gente Faiz
            </div>
            <img
              class="object-center w-3/4 md:-ml-[52rem] md:-mt-28 md:w-1/2"
              src={image}
              alt={altTextImage}
              loading={"lazy"}
              width={750}
              height={750}
            />

            <div class="flex flex-col gap-8 md:absolute justify-center items-center pt-10 md:pt-28">
              
              {/* mobile  */}
              <div class="hidden md:block text-white font-bold text-7xl">
                Você imagina, a gente Faiz
              </div>

              <a
                href={url}
                class={"text-lg mb-12 w-52 h-12 py-1 \
                            rounded-full \
                            border-solid border-4 border-white \
                            text-white font-bold lg:text-xl text-center\
                            hover:scale-110 transition-transform hover:text-primary \
                            hover:bg-white \
                            "}
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
