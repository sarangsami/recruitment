import { Avatar, Box, Typography } from "@mui/material";

const CommentItem = ({ firstName, lastName, content }) => {
  return (
    <Box my={2}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Avatar sx={{ bgcolor: "#EFEC10", color: "black", mr: 1 }}>
          {firstName.charAt(0)}
        </Avatar>
        <Typography sx={{ fontWeight: "bold" }}>
          {firstName} {lastName}
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography>{content}</Typography>
      </Box>
    </Box>
  );
};
export default CommentItem;
