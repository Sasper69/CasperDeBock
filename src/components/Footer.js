import React from "react";
import styled from "styled-components";

const FooterComponent = styled.div`
  background: #EBDCBB;
  width: 100%;
  text-align: center;
  letter-spacing: .2em;
  padding: 3rem 0;
  a {
    color: #171717;
  }
  a:hover {
    color: #F53E26;
  }
`;

function Footer() {
  return (
    <FooterComponent>
      <small>Website by <a href="https://gilles.design">Gilles De Praetere</a></small>
    </FooterComponent>
  );
}

export default Footer;