import React from "react";
import styled from "styled-components";
import Meta from "./Meta";

const LeafletContainer = styled.div`
  .leaflet-container {
    height: 100vh;
    width: 100%;
  }
`;

type PageProps = {
  children: Array<React.ReactElement>
}

const Page = ({children}: PageProps) => {
  return (
    <LeafletContainer>
      <Meta />
      <div  id="root" className="leaflet-container">{children}</div>
    </LeafletContainer>
  );
};

export default Page;
