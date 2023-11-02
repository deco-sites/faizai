import { useEffect } from "preact/hooks";


export interface Props{
    rootId: string;
}

const ATTRIBUTES = {
    "header-bg": "header-bg",
    "nav-logo": "nav-logo",
    "nav-item": "nav-item",
    "faizaibot": "faizaibot"
  };


const setup = ({ rootId }: Props) => {

    const root = document.getElementById(rootId);
    const headerBg = root?.querySelector(`[${ATTRIBUTES["header-bg"]}]`) as HTMLElement;
    const logo = root?.querySelector(`[${ATTRIBUTES["nav-logo"]}]`) as HTMLElement;
    const items = Array.from(root?.querySelectorAll(`[${ATTRIBUTES["nav-item"]}]`) as NodeListOf<HTMLElement> );
    
    const faizAiNavItem = items[items.length - 1];
    console.log(faizAiNavItem);

    const onScroll = () => {
        if (window.scrollY > 40){
            items!.forEach(it=> it!.style.color = "#5b3465");
            logo!.style.color = "#5b3465";
            headerBg!.style.background = "white";
            items
        }
        else{
            items!.forEach(it=> it!.style.color = "white");
            logo!.style.color = "white";
            headerBg!.style.background = "transparent";
        }
    }

    const onClick = () => {
        document.getElementById("faizaibot")?.scrollIntoView({behavior : "smooth"});
    }



    document.addEventListener("scroll", onScroll);
    faizAiNavItem?.addEventListener("click", onClick);
    return () => {
        document.removeEventListener("scroll", onScroll);
        faizAiNavItem?.removeEventListener("click", onClick);
    }
}

function HeaderJS({ rootId } : Props){

    useEffect(() => setup({rootId}), []);
    return <div header-controller-js/>
}

export default HeaderJS;