import { Typography, Box } from "@mui/material";
import { showDate } from "utils/globalFunctions";

const ChangeLogItem = (props) => {
  const { message, date, old,noTo } = props;

  const colorGenerator = (type,globalTheme) =>{
    switch (type) {
      case "Initial":
        return "#f5f5f5"
      
      case "First Contact":
        return globalTheme.palette.success.main
     
      case "Interview":
        return globalTheme.palette.primary.main
      
      case "Tech Assignment":
        return globalTheme.palette.warning.main
     
      case "Rejected":
        return globalTheme.palette.error.main
       
      case "Hired":
        return globalTheme.palette.info.main
      

      default:
        return globalTheme.palette.inherit.main
    }
  }

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
              {message.includes("status")&&
               <Box
               sx={{
                 width: 10,
                 height: 10,
                 borderRadius:1,
                 bgcolor:(globalTheme)=>colorGenerator(old,globalTheme),
                 display: "inline-block",
                 mx: 1,
               }}
             />
              }
             
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
          {noTo?"":"to"}
        
          {typeof props.new === "string" ? (
            <Typography
              sx={{ color: "black" }}
              component="span"
              variant="body2"
            >
               {message.includes("status")&&
               <Box
               sx={{
                 width: 10,
                 height: 10,
                 borderRadius:1,
                 bgcolor:(globalTheme)=>colorGenerator(props.new,globalTheme),
                 display: "inline-block",
                 mx: 1,
               }}
             />
              }
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
