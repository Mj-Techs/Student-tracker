import React from "react";
import { LinkWrapper, StyledLink } from "../styled";
const Navbar = () => {
  return (
    <LinkWrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/students">StudentsInfo</StyledLink>
    </LinkWrapper>
  );
};
export default Navbar;
