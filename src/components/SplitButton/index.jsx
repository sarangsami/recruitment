import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function SplitButton(props) {
  const handleClick = () => {
    props.handleClick();
  };

  return (
    <ButtonGroup
      sx={{ maxWidth: 180, borderRadius: 2 }}
      fullWidth
      variant="contained"
      color={props.color}
      aria-label="split button"
    >
      <Button
        fullWidth
        sx={{ textTransform: "none", borderRadius: 2, fontWeight: "bold" }}
        onClick={handleClick}
      >
        {props.children}
      </Button>
      <Button sx={{ maxWidth: 16, borderRadius: 2 }}>
        <ArrowDropDownIcon />
      </Button>
    </ButtonGroup>
  );
}
