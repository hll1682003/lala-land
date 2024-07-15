import * as React from "react";
import { StyledFooter } from "./FooterStyles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter elevation={5} variant="elevation">
      <small>
        &copy; 2024, <Link to={"/"}> La La Land</Link> wholesale
      </small>
    </StyledFooter>
  );
};
export { Footer };
