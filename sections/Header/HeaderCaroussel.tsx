import  HeaderFaiz from "$store/components/header/HeaderFaiz.tsx";
import type { Props as HeaderProps} from "$store/components/header/HeaderFaiz.tsx" ;
import DoubleBannerCarousel from "../../components/ui/DoubleBannerCarousel.tsx";
import type { Props as CarouselProps } from "../../components/ui/DoubleBannerCarousel.tsx";

export interface Props{
    
    header: HeaderProps;
    carousel: CarouselProps;
}   



function HeaderCaroussel({header, carousel}: Props){

    return (
        <div>
            <HeaderFaiz
            {...header}/>
            <DoubleBannerCarousel
            {...carousel}/>
        </div>
    );
}

export default HeaderCaroussel;