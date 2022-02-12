import { useState } from "react";
import { Typography, Box, IconButton, Link } from "@mui/material";
//import {useDropzone} from 'react-dropzone';
import { styled } from "@mui/material/styles";
import { Clear, InsertDriveFileOutlined } from "@mui/icons-material";

import CustomRoundedButton from "components/CustomRoundedButton";

const Input = styled("input")({
  display: "none",
});

const UploadInput = () => {

  const [file, setFile] = useState(null);
  // const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  return (
    <div>
      <Box mb={3}>
        <Typography sx={{ fontWeight: "bold" }}>CV</Typography>
        <Box
          mt={2}
          component="div"
      
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
          
              accept="pdf/*"
              onChange={(e) => {
              
                const { files } = e.target;
               

                setFile(files[0]);
              }}
              id="contained-button-file"
              type="file"
            />
            <CustomRoundedButton
              component="span"
              variant="contained"
              color="secondary"
            >
              CHOOSE FILE TO UPLOAD
            </CustomRoundedButton>
          </label>
        </Box>
        {file && (
          <Box maxWidth={400}>
            <Typography variant="caption" sx={{color:"#BFC0C4",fontStyle:"italic"}}>
              Required
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",

                mt: 2,
              }}
            >
              <Box display="flex" flexDirection="row">
                <InsertDriveFileOutlined />
                <Typography sx={{ ml: 1 }}>{file.name}</Typography>
              </Box>
              <Box display="flex" flexDirection="row" alignItems="center">
                <Typography sx={{ mr: 1 }}>Done</Typography>
                <IconButton size="small" onClick={() => setFile(null)}>
                  <Clear fontSize="small" color="error" />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                height: 2,
                width: "100%",
                bgcolor: (globalTheme) => globalTheme.palette.success.main,
                my: 1,
              }}
            />
            <Link
              color="secondary"
              sx={{ fontWeight: "bold", cursor: "pointer" }}
            >
              Download
            </Link>
          </Box>
        )}
      </Box>
    </div>
  );
};
export default UploadInput;
