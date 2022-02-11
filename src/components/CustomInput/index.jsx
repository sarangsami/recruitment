import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BootstrapInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 8,
    marginTop: 8,
  },
  ".MuiFormHelperText-root": {
    margin: 4,
  },
}));

const CustomInput = (props) => {
  const { id, title, helperText } = props;
  return (
    <Box>
      <Typography
        component="label"
        variant="body2"
        sx={{ fontWeight: "bold" }}
        htmlFor={id}
      >
        {title}
      </Typography>
      <BootstrapInput helperText={ helperText} id={id} {...props} />
    </Box>
  );
};
export default CustomInput;
