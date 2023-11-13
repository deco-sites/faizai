interface Props {
  title?: string;
  fontSize?: "Normal" | "Large";
  /** @format html */
  description?: string;
  alignment: "center" | "left";
  colorReverse?: boolean;
}

function Header(props: Props) {
  return (
    <>
      {props.title || props.description
        ? (
          <div
            class={`flex flex-col md:flex-row md:items-baseline gap-3 md:gap-12 text-center md:text-left`}
          >
            {props.title &&
              (
                <h1
                  class={`leading-8 lg:leading-10 text-primary
                  ${props.fontSize === "Normal" ? "lg:text-3xl" : "lg:text-4xl"}
                  text-4xl
                `}
                >
                  {props.title}
                </h1>
              )}
            {props.description &&
              (
                <h2 dangerouslySetInnerHTML={{__html: props.description}}
                  class={`
                  leading-6 lg:leading-8 text-primary
                  ${props.fontSize === "Normal" ? "lg:text-xl" : "lg:text-2xl"}
                `}
                >
                
                </h2>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default Header;
