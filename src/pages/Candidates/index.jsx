import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Stack,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Clear, KeyboardArrowDown, MoreHoriz } from "@mui/icons-material";

import CustomTable from "components/CustomTable";
import SplitButton from "components/SplitButton";

import data from "data";

const Dashboard = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    tableData: [],
  });
  const [searchInput, setSearchInput] = useState("");
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    setState((prev) => ({ ...prev, tableData: data }));
  }, []);

  const handleTagDelete = (tag) => {
    let finalSearch = [...searched];
    let index = finalSearch.indexOf(tag);
    finalSearch.splice(index, 1);

    if (!finalSearch.length) {
      setState((prev) => ({ ...prev, tableData: data }));
    }
    setSearched(finalSearch);
  };

  const handleSearchSubmit = () => {
    if (searchInput !== "") {
      let finalSearchs = [...searched];
      finalSearchs.push(searchInput);
      setSearched(finalSearchs);

      let nameSearch = state.tableData.filter(
        (o) => o.firstName === searchInput
      );
      let familySearch = state.tableData.filter(
        (o) => o.lastName === searchInput
      );
      let phoneSearch = state.tableData.filter(
        (o) => o.phoneNumber === searchInput
      );
      let emailSearch = state.tableData.filter((o) => o.email === searchInput);
      let positionSearch = state.tableData.filter(
        (o) => o.position === searchInput
      );

      let skillsSearch = state.tableData.filter((o) =>
        o.skills.includes(searchInput)
      );

      let final = [
        ...nameSearch,
        ...familySearch,
        ...phoneSearch,
        ...emailSearch,
        ...positionSearch,
        ...skillsSearch,
      ];

      setState((prev) => ({ ...prev, tableData: final }));

      setSearchInput("");
    }
  };

  return (
    <div>
      <Box my={4}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Recruitement Pipeline
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
            <TextField
              fullWidth
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search with name & last name, skills, position, phone and email"
            />
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Button
              sx={{ textTransform: "none", height: "100%" }}
              variant="outlined"
              color="inherit"
              endIcon={<KeyboardArrowDown />}
              onClick={() => handleSearchSubmit()}
            >
              Filter Candidates by
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box my={3}>
        <Stack direction="row" spacing={1}>
          {searched.map((search, id) => (
            <Chip
              key={id}
              label={search}
              variant="outlined"
              onDelete={() => handleTagDelete(search)}
              deleteIcon={<Clear />}
            />
          ))}
        </Stack>
      </Box>
      <Box mb={3} sx={{ borderBottom: "2px dashed #E6E6E7" }} />
{state.tableData.length?

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
              <TableCell>
                {experience} Year{experience === 1 ? "" : "s"}
              </TableCell>
              <TableCell>
                {skills.length && <Chip label={skills[0]} />}{" "}
                {skills.length > 1 && (
                  <IconButton sx={{ ml: 1 }} size="small">
                    <MoreHoriz fontSize="small" />
                  </IconButton>
                )}
              </TableCell>
              <TableCell>
                {minSalary} - {maxSalary}
              </TableCell>
              <TableCell>
                <SplitButton
                  handleClick={() => navigate(`/candidates/${id}`)}
                  status={status}
                  fullWidth
                >
                  {status}
                </SplitButton>
              </TableCell>
            </TableRow>
          )
        )}
      </CustomTable>
:<Box>
  <Typography>
    No data available
  </Typography>
  </Box>}
    </div>
  );
};
export default Dashboard;
