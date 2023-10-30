import type { ComponentChildren, JSX } from "preact";


function NavBarClass(){

}

function Logo(props: JSX.IntrinsicElements["a"]) {
  return <a nav-logo {...props} />;
}
function Item(props: JSX.IntrinsicElements["span"]) {
    return <span nav-item {...props} />;
}
NavBarClass.Logo = Logo;
NavBarClass.Item = Item;


export default NavBarClass;
