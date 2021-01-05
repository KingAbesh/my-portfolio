import React from "react";
import { StyledBurger } from "./Burger.styled";

interface BurgerCompProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Burger: React.FunctionComponent<BurgerCompProps> = ({
  open,
  setOpen,
}) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
