
import { Section } from "deco/blocks/section.ts";
import { renderSection } from "deco/pages/LivePage.tsx";

export interface Props {
  header: Section
  carousel: Section
}
function HeaderCaroussel ({header,carousel}: Props){
  return (
    <div class="relative flex">
        {renderSection(carousel, 1)}
        <div class="absolute top-0">
            {renderSection(header, 0)}
        </div>
    </div>
  )
}

export default HeaderCaroussel;