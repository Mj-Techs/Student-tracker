import React from "react";
import { LinkWrapper, StyledLink } from "../styled";
const Navbar = () => {
  return (
    <LinkWrapper>
      <div className="logo__header">Dct eye</div>
      <div className="link__wrapper">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/students">Students</StyledLink>
      </div>
    </LinkWrapper>
  );
};
export default Navbar;
