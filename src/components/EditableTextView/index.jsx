import { Fragment, useState, useEffect } from "react";

import {
  Cancel,
  CheckBox,
  CheckBoxOutlineBlank,
  CheckCircle,
  Edit,
} from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Checkbox,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

const EditableTextView = ({ title, value, onSubmit, data, multiple }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    if (value) {
      setNewValue(value);
    }
  }, [value]);

  const icon = <CheckBoxOutlineBlank fontSize="small" />;
  const checkedIcon = <CheckBox fontSize="small" />;

  return (
    <Box mb={3}>
      <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
      <Box display="flex" flexDirection="row" alignItems="center">
        {isEdit ? (
          data ? (
            <Autocomplete
              disablePortal
              limitTags={1}
              multiple={multiple}
              id="combo-box-demo"
              options={data}
              value={newValue}
              onChange={(event, value) => {
                setNewValue(value);
              }}
              sx={{ width: 230 }}
              renderOption={
                multiple
                  ? (props, option, { selected }) => (
                      <li {...props}>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                        />
                        {option}
                      </li>
                    )
                  : null
              }
              renderInput={(params) => <TextField {...params} />}
            />
          ) : (
            <TextField
              variant="standard"
              value={newValue}
              onChange={(e) => {
                setNewValue(e.target.value);
              }}
            />
          )
        ) : (
          <Typography>{value}</Typography>
        )}
        {isEdit ? (
          <Fragment>
            <IconButton size="small" onClick={() => setIsEdit((prev) => !prev)}>
              <Cancel fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => {
                onSubmit(newValue);
                setIsEdit((prev) => !prev);
              }}
            >
              <CheckCircle fontSize="small" />
            </IconButton>
          </Fragment>
        ) : (
          <IconButton
            sx={{ ml: 1 }}
            size="small"
            onClick={() => setIsEdit((prev) => !prev)}
          >
            <Edit fontSize="small" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};
export default EditableTextView;
