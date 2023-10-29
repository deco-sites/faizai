/**
 * This file takes care of global app side effects,
 * like clicking on add to cart and the cart modal being displayed
 */

import { signal, effect } from "@preact/signals";

const displayCart = signal(false);
const displayMenu = signal(false);
const displaySearchPopup = signal(false);
const displaySearchDrawer = signal(false);
const hasScrolled = signal(false);

const state = {
  displayCart,
  displayMenu,
  displaySearchPopup,
  displaySearchDrawer,
  hasScrolled
};

// Keyboard event listeners
addEventListener("keydown", (e: KeyboardEvent) => {
  const isK = e.key === "k" || e.key === "K" || e.keyCode === 75;

  // Open Searchbar on meta+k
  if (e.metaKey === true && isK) {
    displaySearchPopup.value = true;
  }
});

const trackScrolling = () => {
  hasScrolled.value = self.scrollY > 40 ? true : false;
};

effect(() => {
  addEventListener("scroll", trackScrolling);
  return () => removeEventListener("scroll", trackScrolling);
});

export const useUI = () => state;
