import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Drawers from "$store/islands/Header/Drawers.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { NavItemProps } from "$store/components/header/NavItem.tsx";
import Alert from "./Alert.tsx";
import NavbarFaiz from "./NavbarFaiz.tsx";
import { headerHeight } from "./constants.ts";
import { useUI } from "$store/sdk/useUI.ts";

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

  const { hasScrolled } = useUI();

  return (
    <>
      <header style={{ height: headerHeight }}>
        <Drawers
          menu={{ items }}
          searchbar={searchbar}
          platform={platform}
        >
          <div
            class={`${
              hasScrolled.value ? "bg-white" : "bg-transparent"
            } w-screen transition-colors lg:hover:bg-white group/navbar fixed z-50`}
          >
            <Alert alerts={alerts} />
            <NavbarFaiz
              items={items}
              searchbar={searchbar && { ...searchbar, platform }}
              logo={logo}
              scrollStatus={hasScrolled.value}
            />
          </div>
        </Drawers>
      </header>
    </>
  );
}

export default HeaderFaiz;
