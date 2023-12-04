
import { Section } from "deco/blocks/section.ts";
import { renderSection } from "deco/pages/LivePage.tsx";

export interface Props {
  header: Section
  carousel: Section
  headlineText: string
  subText: string
}
function HeaderCaroussel ({header,carousel, headlineText, subText}: Props){
  return (
    <div class="relative flex">
        {renderSection(carousel, 1)}
        <div class="absolute top-0">
            {renderSection(header, 0)}
        </div>
        <div class="hidden md:flex flex-col absolute justify-center w-[32rem] 2xl:w-[45rem] place-self-center ml-[38vw] -mt-60	" >
          <span class="text-white font-extrabold md:text-5xl 2xl:text-6xl">{headlineText}</span>
          <span class="text-white md:text-3xl 2xl:text-4xl">{subText}</span>
        </div>
    </div>
  )
}

export default HeaderCaroussel;