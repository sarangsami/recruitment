import { useState, useEffect } from "react";
import { Chip, IconButton, TableCell, TableRow } from "@mui/material";

import CustomTable from "components/CustomTable";
import SplitButton from "components/SplitButton";

import data from "data";
import { MoreHoriz } from "@mui/icons-material";

const Dashboard = () => {
  const [state, setState] = useState({
    tableData: [],
  });

  useEffect(() => {
    setState({ ...state, tableData: data });
  }, [state]);

  const statusColorGenerator = (status) => {
    switch (status) {
      case "First contact":
        return "primary";
      case "Rejected":
        return "error";
      case "Interview":
        return "success";
      default:
        return "primary";
    }
  };
  return (
    <div>
      <CustomTable
        headings={[
          "Candidate",
          "Contact",
          "Experience",
          "Skills",
          "Salary Range",
          "Status",
        ]}
      >
        {state.tableData.map(
          ({
            id,
            firstName,
            lastName,
            email,
            experience,
            skills,
            minSalary,
            maxSalary,
            status,
          }) => (
            <TableRow key={id}>
              <TableCell>
                {firstName} {lastName}
              </TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{experience}</TableCell>
              <TableCell>
                {skills.length && <Chip label={skills[0]} />}{" "}
                {skills.length > 1 && (
                  <IconButton sx={{ml:1}} size="small">
                    <MoreHoriz fontSize="small"/>
                  </IconButton>
                )}
              </TableCell>
              <TableCell>
                {minSalary} - {maxSalary}
              </TableCell>
              <TableCell>
                <SplitButton color={statusColorGenerator(status)}>
                  {status}
                </SplitButton>
              </TableCell>
            </TableRow>
          )
        )}
      </CustomTable>
    </div>
  );
};
export default Dashboard;
