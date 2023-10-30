import { useEffect } from "preact/hooks";


export interface Props{
    rootId: string;
}

const ATTRIBUTES = {
    "header-bg": "header-bg",
  };


const setup = ({ rootId }: Props) => {

    const root = document.getElementById(rootId);
    const headerBg = root?.querySelector(`[${ATTRIBUTES["header-bg"]}]`) as HTMLElement;

    const onScroll = () => {
        headerBg!.style.background = window.scrollY > 40? 'white' : 'transparent';
    }

    document.addEventListener("scroll", onScroll);

    return document.removeEventListener("scroll", onScroll);
}

function HeaderJS({ rootId } : Props){

    useEffect(() => setup({rootId}), [
        rootId,
      ]);
    return <div header-controller-js/>
}

export default HeaderJS