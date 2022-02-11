import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import CustomRoundedButton from "components/CustomRoundedButton";

const Input = styled("input")({
  display: "none",
});

const UploadInput = () => {
  return (
    <div>
      <Box mb={3}>
        <Typography sx={{ fontWeight: "bold" }}>CV</Typography>
        <Box
          mt={2}
          sx={{
            minHeight: 180,
            maxWidth: 400,
            width: "100%",
            bgcolor: "#F6F6F7",
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "2px dashed #E6E6E7",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            Drag files here to upload
          </Typography>
          <Box my={2}>
            <Typography>or</Typography>
          </Box>

          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <CustomRoundedButton  component="span" variant="contained" color="secondary">
              CHOOSE FILE TO UPLOAD
            </CustomRoundedButton>
          </label>
        </Box>
      </Box>
    </div>
  );
};
export default UploadInput;
