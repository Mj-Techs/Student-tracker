import styled from "styled-components";
import { Link } from "react-router-dom";
export const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  /* background: linear-gradient(to right top, #c9d6ff, #e2e2e2); */
  background: #daa520;
  display: grid;
  grid-template: 0.1fr 1fr/1fr;
`;
export const Nav = styled.div`
  border: 1px solid;
`;
export const Main = styled.div`
  border: 1px solid;
  background: #fff;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
export const StyledLink = styled(Link)`
  outline: none;
  text-decoration: none;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-size: 1.7rem;
  display: inline-block;
  margin-right: 2.625%;
  padding-right: 10px;
  text-align: center;
  color: black;
  font-weight: 700;
  &:hover {
    color: white;
  }
`;
export const Button = styled.button`
  border: 0;
  outline: none;
  background: orange;
  color: black;
  border-radius: 0.25rem;
  font-family: -system-ui, sans-serif;
  font-size: 1.5rem;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.25rem 2.5rem;
  margin: 0.25rem;
  margin-right: 1rem;
  width: 150px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: white;
    background: orange;
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template: 0.1fr 1fr/1fr;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const StudentContainer = styled.div`
  display: grid;
  grid-template: 0.2fr 1fr/1fr 0.5fr;
  margin: 5px;
`;
export const List = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid;
  margin: 0.4rem 5em;
  padding: 1rem 1em;
  background: white;
  overflow-y: auto;
`;
