import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
const CustomizedTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

const CustomInput = (props) => {
  <Box>
    <CustomizedTextField {...props}/>
  </Box>;
};
export default CustomInput;
