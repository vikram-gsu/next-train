import React from "react";
import dynamic from "next/dynamic";
import Page from "../components/Page";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/MainMap.tsx"),
  {
    ssr: false
  }
);

export default () => (
  <Page>
    <DynamicComponentWithNoSSR />
  </Page>
);
