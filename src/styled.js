import styled from "styled-components";
import { Link } from "react-router-dom";
export const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(to right top, #667db6, #0082c8, #0082c8, #667db6);
  display: grid;
  grid-template: 0.1fr 1fr/1fr;
`;
export const Nav = styled.div`
  border: 1px solid;
`;
export const Main = styled.div`
  border: 1px solid;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
export const StyledLink = styled(Link)`
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  display: inline-block;
  margin-right: 1.625%;
  text-align: center;
  color: white;

  &:hover {
    color: black;
  }
`;
