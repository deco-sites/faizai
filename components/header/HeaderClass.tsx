import type { ComponentChildren, JSX } from "preact";


function HeaderClass(){

}

function HeaderBg(props: JSX.IntrinsicElements["div"]) {
  return <div header-bg {...props} />;
}

HeaderClass.HeaderBg = HeaderBg

export default HeaderClass;
