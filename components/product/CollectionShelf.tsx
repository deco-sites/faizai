import Icon from "$store/components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";


export interface Collection{
    title: string;
    tag: string;
    image: ImageWidget;
}

export interface Props {
  collections: Collection[] | null;
  title?: string;
  /** @format html */
  description?: string;
}

const relative = (url: string) => {
    const link = new URL(url);
    return `${link.pathname}${link.search}`;
};
  
const WIDTH = 200;
const HEIGHT = 279;

function WrittenBanner({ col } : { col: Collection }){
    const lcp = false;
    return (
        <a
        href={col.tag && `/search?q=${col.tag}`}
        aria-label="view collection"
        class="flex w-full relative text-center justify-center items-center overflow-hidden"
        >
            <Image
                src={col.image}
                alt={col.title}
                width={WIDTH}
                height={HEIGHT}
                class={`bg-base-100 rounded w-full object-contain duration-100 transition-scale scale-100 md:hover:scale-110`}
                sizes="(max-width: 640px) 50vw, 20vw"
                preload={lcp}
                loading={lcp ? "eager" : "lazy"}
                decoding="async"
            />
            <div class="absolute bg-black bg-opacity-40 rounded-lg p-4">
              <span class="text-center font-extrabold text-white text-4xl">{col.title}</span>
            </div>
        </a>
    )

}


function CollectionShelf({
  collections,
  title,
  description,
}: Props) {
  const id = useId();
  const platform = usePlatform();

  if (!collections || collections.length === 0) {
    return null;
  }

  return (
    <div class="w-full container  py-8 flex flex-col gap-12 lg:gap-16 lg:py-10">
      <Header
        title={title || ""}
        description={description || ""}
        fontSize={"Large"}
        alignment={"left"}
      />

      <div
        id={id}
        class="container grid grid-cols-[48px_1fr_48px] px-0 sm:px-5"
      >
        <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5">
          {collections?.map((collection, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-[270px] sm:w-[292px] first:pl-6 sm:first:pl-0 last:pr-6 sm:last:pr-0"
            >

            
                <WrittenBanner
                col={collection}
                />
              
            </Slider.Item>
          ))}
        </Slider>

        <>
          <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
            <Slider.PrevButton class="btn btn-circle btn-outline absolute right-1/2 bg-base-100">
              <Icon size={24} id="ChevronLeft" strokeWidth={3} />
            </Slider.PrevButton>
          </div>
          <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
            <Slider.NextButton class="btn btn-circle btn-outline absolute left-1/2 bg-base-100">
              <Icon size={24} id="ChevronRight" strokeWidth={3} />
            </Slider.NextButton>
          </div>
        </>
        <SliderJS rootId={id} />
        {/* <SendEventOnLoad
          event={{
            name: "view_item_list",
            params: {
              item_list_name: title,
              items: products.map((product) =>
                mapProductToAnalyticsItem({
                  product,
                  ...(useOffer(product.offers)),
                })
              ),
            },
          }}
        /> */}
      </div>
    </div>
  );
}

export default CollectionShelf;
