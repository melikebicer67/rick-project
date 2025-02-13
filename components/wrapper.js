import React from "react";

const DesktopWrapper = ({ render }) => {
  return (
    <Wrapper id="nav-desktop">
      <nav>{render}</nav>
    </Wrapper>
  );
};

export default DesktopWrapper;
