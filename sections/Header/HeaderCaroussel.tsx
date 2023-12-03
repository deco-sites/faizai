
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
        <div class="hidden md:flex flex-col absolute justify-center w-[32rem] place-self-center ml-[38vw] -mt-60	" >
          <span class="text-white font-extrabold text-5xl">{headlineText}</span>
          <span class="text-white text-3xl">{subText}</span>
        </div>
    </div>
  )
}

export default HeaderCaroussel;