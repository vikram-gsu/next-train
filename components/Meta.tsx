import React, { FunctionComponent } from "react";

const Meta: FunctionComponent = () => {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
      />
      <link rel="stylesheet" href="/static/nprogress.css" />

      <title>Leaflet</title>
    </div>
  );
};

export default Meta;
