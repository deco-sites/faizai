
export interface Props {
  logo?: {
    title: string;
    description?: string;
  };
}

export default function LogoText({ logo }: Props) {
  return (
    <>
      {logo?.title && (
        <div class="flex flex-col gap-3">
          <div class="w-28 max-h-16 text-4xl font-bold">
            {logo?.title}
          </div>
          <div class="">
            {logo?.description}
          </div>
        </div>
      )}
    </>
  );
}
