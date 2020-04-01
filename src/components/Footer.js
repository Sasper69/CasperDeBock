import React from "react";
import styled from "styled-components";

const FooterComponent = styled.div`
  background: var(--color-hero-bg);
  width: 100%;
  text-align: center;
  letter-spacing: .2em;
  padding: 3rem 0;
  a {
    color: var(--color-black);
  }
  a:hover {
    color: var(--color-orange);
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