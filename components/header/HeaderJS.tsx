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
    let hovering = false;
    let scrolled = false;

    const onScroll = () => {
        if (window.scrollY > 40 || hovering){
            scrolled = true;
            items!.forEach(it=> it!.style.color = "#5b3465");
            logo!.style.color = "#5b3465";
            headerBg!.style.background = "white";
        }
        else{
            items!.forEach(it=> it!.style.color = "white");
            logo!.style.color = "white";
            headerBg!.style.background = "transparent";
            scrolled = false;
        }
        
    }

    const onClick = () => {
        document.getElementById("faizaibot")?.scrollIntoView({behavior : "smooth"});
    }

    const onHover = () => {
        hovering = true;
        items!.forEach(it=> it!.style.color = "#5b3465");
        logo!.style.color = "#5b3465";
        headerBg!.style.background = "white";
    }
    const onLeaveHover = () => {
        hovering = false;
        if (scrolled){
            items!.forEach(it=> it!.style.color = "#5b3465");
            logo!.style.color = "#5b3465";
            headerBg!.style.background = "white"; 
        }
        else{
            items!.forEach(it=> it!.style.color = "white");
            logo!.style.color = "white";
            headerBg!.style.background = "transparent";
            scrolled = false;
        }
    }



    document.addEventListener("scroll", onScroll);
    faizAiNavItem?.addEventListener("click", onClick);
    headerBg.addEventListener("mouseover", onHover);
    headerBg.addEventListener("mouseleave", onLeaveHover);
    return () => {
        document.removeEventListener("scroll", onScroll);
        faizAiNavItem?.removeEventListener("click", onClick);
        headerBg.removeEventListener("mouseover", onHover);
        headerBg.removeEventListener("mouseleave", onLeaveHover);

    }
}

function HeaderJS({ rootId } : Props){

    useEffect(() => setup({rootId}), []);
    return <div header-controller-js/>
}

export default HeaderJS;