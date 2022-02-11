import { Typography, Box } from "@mui/material";
import { showDate } from "utils/globalFunctions";

const ChangeLogItem = (props) => {
  const { message, date, old } = props;

  return (
    <Box>
      <Box>
        <Typography variant="body2" sx={{ color: "#808189" }}>
          {message}{" "}
          {typeof old === "string" ? (
            <Typography
              sx={{ color: "black" }}
              component="span"
              variant="body2"
            >
              {old}{" "}
            </Typography>
          ) : (
            old.map((item, id) => (
              <Typography
                key={id}
                sx={{ color: "black" }}
                component="span"
                variant="body2"
              >
                {item}{" "}
              </Typography>
            ))
          )}
          to
          {typeof props.new === "string" ? (
            <Typography
              sx={{ color: "black" }}
              component="span"
              variant="body2"
            >
              {" "}
              {props.new}
            </Typography>
          ) : (
            props.new.map((item, id) => (
              <Typography
                key={id}
                sx={{ color: "black" }}
                component="span"
                variant="body2"
              >
                {" "}
                {item}
              </Typography>
            ))
          )}
        </Typography>
      </Box>
      <Typography
        variant="caption"
        sx={{ color: "#808189", fontStyle: "italic" }}
      >
        {showDate(date)}
      </Typography>
    </Box>
  );
};
export default ChangeLogItem;
