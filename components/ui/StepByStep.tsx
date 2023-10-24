export type Step = {
  highligtedText: string;
  text: string;
};

export interface Props {
  steps: Step[];
  title: string;
  buttonText: string;
}

export default function StepByStep({ steps, title, buttonText }: Props) {
  return (
    <div class="flex flex-col justify-center items-center gap-20 bg-[url('/image/bg.png')] w-full h-full bg-no-repeat bg-cover bg-center">
      <div class="flex flex-col justify-center w-full items-center gap-24">
        <div class="pt-14 mt-20 text-white text-5xl font-bold w-1/2 text-center">
          {title}
        </div>
        <div class="flex items-start justify-around bg-white bg-opacity-80 w-full h-48 ">
          {steps?.map((step, index) => (
            <div class="flex flex-col items-center justify-center gap-4 w-60 mt-4">
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
