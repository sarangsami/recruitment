import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useEffect } from "react";

const options = [
  "Initial",
  "First Contact",
  "Interview",
  "Tech Assignment",
  "Rejected",
  "Hired",
];

export default function SplitButton({ status,handleClick,fullWidth,onChange }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    if (status) {
      switch (status) {
        case "Initial":
          setSelectedIndex(0);
          break;
        case "First Contact":
          setSelectedIndex(1);
          break;
        case "Interview":
          setSelectedIndex(2);
          break;
        case "Tech Assignment":
          setSelectedIndex(3);
          break;
        case "Rejected":
          setSelectedIndex(4);
          break;
        case "Hired":
          setSelectedIndex(5);
          break;

        default:
          setSelectedIndex(0);
          break;
      }
    }
  }, [status]);

  const onClickHandler = () => {
    handleClick()
  };

  const handleMenuItemClick = (event, index) => {
    if(onChange){
      onChange(options[index])
    }
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const colorGenerator = () => {
    switch (selectedIndex) {
      case 0:
        return "inherit";
      case 1:
        return "success";
      case 2:
        return "primary";
      case 3:
        return "warning";
      case 4:
        return "error";
      case 5:
        return "info";

      default:
        return "primary";
    }
  };

  return (
    <React.Fragment>
      <ButtonGroup
      fullWidth={fullWidth}
        variant="contained"
        ref={anchorRef}
        color={colorGenerator()}
        aria-label="split button"
      >
        <Button onClick={onClickHandler} sx={{ textTransform: "none" }}>
          {options[selectedIndex]}
        </Button>
        <Button
        sx={{maxWidth:16}}
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        style={{ zIndex: 1 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
