import { asset } from "$fresh/runtime.ts";

export type Step = {
  highligtedText: string;
  text: string;
};

export interface Props {
  steps: Step[];
  title: string;
  buttonText: string;
  url: string;
}

export default function StepByStep({ steps, title, buttonText, url }: Props) {
  return (
    <div class={`flex flex-col justify-center items-center gap-20 bg-[${asset('/image/bg.png')}] w-full h-full bg-no-repeat bg-cover bg-center`}>
      <div class="flex flex-col justify-center w-full items-center gap-24">
        <div class="pt-14 md:mt-20 text-white text-3xl md:text-5xl font-bold md:w-1/2 text-center">
          {title}
        </div>                           
        <div class="grid gap-4 md:flex md:items-start md:justify-around bg-white rounded md:rounded-none bg-opacity-80 md:w-full md:h-48 ">
          {steps?.map((step, index) => (
            <div class="mb-2 pl-2 pr-2 md:mb-0 md:pl-0 md:pr-0 flex flex-col items-center justify-center gap-4 w-60 mt-4">
              <span class="text-primary font-bold text-6xl ">
                {index + 1}
              </span>
              <span class="text-primary text-lg leading-5">
                <span class="font-bold ">
                  {step.highligtedText}
                </span>
                {" " + step.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <a
        href={url}
        class={"text-lg mb-44 w-52 h-12 py-1 \
            rounded-full bg-white bg-opacity-80 \
            border-solid border-4 border-primary \
            text-primary font-bold lg:text-xl text-center\
            hover:scale-110 transition-transform hover:text-primary \
            "}
      >
        {buttonText}
      </a>
    </div>
  );
}
