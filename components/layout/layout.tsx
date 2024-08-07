import {
  AwaitedReactNode,
  Fragment,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

import MainNavigation from "./main-navigation";

function Layout(props: {
  children:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
}) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
