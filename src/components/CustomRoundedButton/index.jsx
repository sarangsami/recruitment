import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const RoundButton = styled(Button)(({ theme }) => ({
  borderRadius: 28,
  padding:10,
  fontWeight:"bold",
  fontSize:14
}));

const CustomRoundedButton = (props) => {
  return <RoundButton disableElevation {...props} />;
};
export default CustomRoundedButton;
