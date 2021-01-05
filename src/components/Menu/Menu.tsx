import React from "react";
import { StyledMenu } from "./Menu.styled";

interface NavCompProps {
  open: boolean;
	children: React.ReactNode;
	className: string
}

const Menu: React.FunctionComponent<NavCompProps> = ({ open, children }) => {
  return <StyledMenu open={open}>{children}</StyledMenu>;
};
export default Menu;
