import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Drawers from "$store/islands/Header/Drawers.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { NavItemProps } from "$store/components/header/NavItem.tsx";
import Alert from "./Alert.tsx";
import NavbarFaiz from "./NavbarFaiz.tsx";
import { headerHeight } from "./constants.ts";
import { useId } from "$store/sdk/useId.ts";
import HeaderClass from "$store/components/header/HeaderClass.tsx";
import HeaderJS from "$store/islands/HeaderJS.tsx"

export interface Props {
  alerts: string[];

  /** @title Search Bar */
  searchbar?: Omit<SearchbarProps, "platform">;

  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItemProps[] | null;

  /** @title Logo */
  logo?: string;
}

function HeaderFaiz({
  alerts,
  searchbar,
  navItems,
  logo,
}: Props) {
  const platform = usePlatform();
  const items = navItems ?? [];

  const rootId = useId();

  return (
    <>
      <header id={rootId} style={{ height: headerHeight }}>
        <Drawers
          menu={{ items }}
          searchbar={searchbar}
          platform={platform}
        >
          <HeaderClass.HeaderBg
            class="
            bg-transparent
            w-screen transition-colors md:hover:bg-white group/navbar fixed z-50"
          >
            <Alert alerts={alerts} />
            <NavbarFaiz
              items={items}
              searchbar={searchbar && { ...searchbar, platform }}
              logo={logo}
              scrollStatus={false}
            />
            
          </HeaderClass.HeaderBg>
        </Drawers>
      </header>      
      <HeaderJS rootId={rootId}/>
    </>
  );
}

export default HeaderFaiz;
