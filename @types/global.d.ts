/* eslint-disable @typescript-eslint/consistent-type-imports */

type TComponentPropsWithRef<
  Component extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = import("react").ComponentProps<Component> & {
  ref?: import("react").Ref<Component>;
};
