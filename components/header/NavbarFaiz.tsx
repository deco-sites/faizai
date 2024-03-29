import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton, SearchButton } from "$store/islands/Header/Buttons.tsx";
import CartButtonLinx from "$store/islands/Header/Cart/linx.tsx";
import CartButtonShopify from "$store/islands/Header/Cart/shopify.tsx";
import CartButtonVDNA from "$store/islands/Header/Cart/vnda.tsx";
import CartButtonVTEX from "$store/islands/Header/Cart/vtex.tsx";
import CartButtonWake from "$store/islands/Header/Cart/wake.tsx";
import Searchbar from "$store/islands/Header/Searchbar.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { NavItemProps } from "$store/components/header/NavItem.tsx";
import Image from "apps/website/components/Image.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import NavBarClass from "$store/components/header/NavBarClass.tsx"

function NavbarFaiz({ items, searchbar, logo, headerPageType }: {
  items: NavItemProps[];
  searchbar?: SearchbarProps;
  logo?: string;
  headerPageType?: string;
}) {
  const platform = usePlatform();

  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center w-full pl-2 pr-6 gap-2"
      >
        <MenuButton />

        {logo && (
          <a
            href="/"
            class="flex-grow inline-flex items-center text-xl font-bold"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            {logo}
          </a>
        )}

        <div class="flex gap-1">
          <SearchButton />
          {platform === "vtex" && <CartButtonVTEX />}
          {platform === "vnda" && <CartButtonVDNA />}
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center w-full pl-2 pr-6">
        <div class="flex-none w-44">
          {logo && (
            <NavBarClass.Logo
              href="/"
              aria-label="Store logo"
              class={`block px-4 py-3 w-[160px] ${headerPageType == "home"? "text-white" : "text-primary"} text-4xl font-bold`}
            >
              {logo}
            </NavBarClass.Logo>
          )}
        </div>
        <div class="flex-auto flex justify-center">
          {items.map((item) => {
            item.headerPageType = headerPageType;
            return <NavItem item={item} />;
          })}
        </div>
        <div class="flex-none w-44 flex items-center justify-end gap-2">
          <SearchButton />
          <Searchbar searchbar={searchbar} />
          <a
            class="btn btn-circle btn-sm btn-ghost"
            href="/login"
            aria-label="Log in"
          >
            <Icon id="User" size={24} strokeWidth={0.4} />
          </a>

          { platform === "vtex" &&

            <a
            class="btn btn-circle btn-sm btn-ghost"
            href="/wishlist"
            aria-label="Wishlist"
            >
            <Icon
              id="Heart"
              size={24}
              strokeWidth={2}
              fill="none"
              />
          </a>
          }
          {platform === "vtex" && <CartButtonVTEX />}
          {platform === "vnda" && <CartButtonVDNA />}
          {platform === "wake" && <CartButtonWake />}
          {platform === "linx" && <CartButtonLinx />}
          {platform === "shopify" && <CartButtonShopify />}
        </div>
      </div>
    </>
  );
}

export default NavbarFaiz;
