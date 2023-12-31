/**
 * This component renders the filter and selectors for skus.
 * TODO: Figure out a better name for this component.
 */

const colors: Record<string, string> = {
  "azul-clara": "bg-[#87CEFA] ring-[#87CEFA]",
  "marinho": "bg-[#151c2b] ring-[#151c2b]",
  "branca": "bg-[#FFFFFF] ring-[#FFFFFF]",
  "cinza": "bg-[#808080] ring-[#808080]",
  "cinza-escura": "bg-[#A9A9A9] ring-[#A9A9A9]",
  "laranja": "bg-[#FFA500] ring-[#FFA500]",
  "marrom": "bg-[#A52A2A] ring-[#A52A2A]",
  "preta": "bg-[#161616] ring-[#161616]",
  "verde-clara": "bg-[#90EE90] ring-[#90EE90]",
  "vermelho": "bg-[#FF0000] ring-[#FF0000]",
  "amarelo": "bg-[#ce8c24] ring-[#ce8c24]",
  "verde" : "bg-[#02311b] ring-[#02311b]",

  // Color variants - only applied when no color as content is passed
  "active": "bg-neutral-focus text-neutral-content ring-neutral-focus ",
  "disabled": "bg-neutral-content text-neutral",
  "default": "bg-base-100 text-primary",
};

interface Props {
  variant?: "active" | "disabled" | "default";
  content: string;
}

const variants = {
  active: "ring ring-1 ring-offset-base-100 ring-offset-2",
  disabled:
    `relative after:absolute after:left-0 after:top-1/2 after:h-[1px] after:bg-red-800 after:w-full after:block after:-rotate-45 after:content-[""]`,
  default: "border border-base-200 hover:border-primary",
};

function Avatar({ content, variant = "default" }: Props) {
  const isGender = content.length > 2 && !colors[content.toLowerCase()];
  return (
    <div class="avatar placeholder text-xs">
      <div
        class={` ${isGender ? "rounded-lg h-7 w-20" : "rounded-full w-8 h-8"} ${colors[content.toLowerCase()] ?? colors[variant]} ${
          variants[variant]
        }`}
      >
        <span class="">
          {colors[content.toLowerCase()] ? "" : isGender ? content[0] + content.slice(1).toLowerCase() : content.substring(0, 2)}
        </span>
      </div>
    </div>
  );
}

export default Avatar;
