import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs() {
  const navigation = useNavigate()
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs  aria-label="breadcrumb">
        <Link
        fontSize="small"
          underline="hover"
          color="inherit"
          sx={{cursor:"pointer"}}
          onClick={()=>navigation("/candidates")}
        >
          Recruitement Pipeline
        </Link>
        <Typography fontSize="small">Candidate Details</Typography>
      </Breadcrumbs>
    </div>
  );
}
