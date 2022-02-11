import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Grid, InputBase, Paper, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import Breadcrumbs from "components/Breadcrumbs";

import data from "data";
import EditableTextView from "components/EditableTextView";
import UploadInput from "components/UploadInput";
import ChangeLogItem from "components/ChangeLogItem";
import CommentItem from "components/CommentItem";

const CandidateDetails = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    position: "",
    minSalary: "",
    maxSalary: "",
    linkedIn: "",
    candidateSource: "",
    seniority: "",
    experience: "",
    location: "",
    skills:[]
  });
  const [changeLog, setChangeLog] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  useEffect(() => {
    let foundUser = data.find((person) => person.id.toString() === id);
    setUser(foundUser);
  }, [id]);

  let stringDivider = (string, divider) => {
    let newArray = [];
    let divided = string.split(divider);
    divided.forEach((element) => {
      if (element !== " ") {
        newArray.push(element);
      }
    });
    let firstValue = "";
    let secondValue = "";
    if (newArray.length === 2) {
      firstValue = newArray[0];
      secondValue = newArray[1];
    }

    return { firstValue, secondValue };
  };

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    position,
    minSalary,
    maxSalary,
    linkedIn,
    candidateSource,
    seniority,
    experience,
    location,
    skills
  } = user;

  const handleCommentSubmit = () => {
    let newArray = [...changeLog];
    newArray.push({
      date: new Date(),
      type: "comment",
      content: commentInput,
      firstName: "Tornike ",
      lastName: "Shvanigradze",
    });

    setChangeLog(newArray);
    setCommentInput("");
  };

  return (
    <div>
      <Breadcrumbs />
      <Box my={2}>
        <Button
          onClick={() => navigation("/candidates")}
          startIcon={<ArrowBack />}
          sx={{ textTransform: "none" }}
          color="inherit"
        >
          Recruitement Pipeline
        </Button>
      </Box>
      <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
        Candidate Details
      </Typography>
      <Box mt={11}>
        <Paper variant="outlined" elevation={0} sx={{ borderRadius: 1 }}>
          <Box bgcolor="#F6F6F7" px={3} py={1}>
            <Typography>
              {firstName} {lastName}
            </Typography>
          </Box>
          <Box p={3}>
            <Grid container>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <Box display="flex" flexDirection="column">
                  <EditableTextView
                    title="Full Name"
                    value={`${firstName} ${lastName}`}
                    onSubmit={(value) => {
                      let { firstValue, secondValue } = stringDivider(
                        value,
                        /(\s+)/
                      );
                      let newHistory = [...changeLog];
                      newHistory.push({
                        date: new Date(),
                        old: `${firstName} ${lastName}`,
                        new: value,
                        message: `You changed full name from`,
                      });
                      setChangeLog(newHistory);
                      setUser((prev) => ({
                        ...prev,
                        firstName: firstValue,
                        lastName: secondValue,
                      }));
                    }}
                  />
                  <EditableTextView
                    title="Email"
                    value={email}
                    onSubmit={(value) => {
                      let newHistory = [...changeLog];
                      newHistory.push({
                        date: new Date(),
                        old: `${email}`,
                        new: value,
                        message: `You changed email from`,
                      });
                      setChangeLog(newHistory);
                      setUser((prev) => ({ ...prev, email: value }));
                    }}
                  />
                  <EditableTextView
                    title="Phone Number"
                    value={phoneNumber}
                    onSubmit={(value) => {
                      let newHistory = [...changeLog];
                      newHistory.push({
                        date: new Date(),

                        old: `${phoneNumber}`,
                        new: value,
                        message: `You changed phone number from`,
                      });
                      setChangeLog(newHistory);
                      setUser((prev) => ({ ...prev, phoneNumber: value }));
                    }}
                  />
                  <EditableTextView
                    title="Candidate Location"
                    value={location}
                    data={["Georgia", "Ghana", "Germany", "Guinea"]}
                    onSubmit={(value) => {
                      let newHistory = [...changeLog];
                      newHistory.push({
                        date: new Date(),
                        old: `${location}`,
                        new: value,
                        message: `You changed location from`,
                      });
                      setChangeLog(newHistory);
                      setUser((prev) => ({ ...prev, location: value }));
                    }}
                  />
                  <EditableTextView
                    title="Position"
                    value={position}
                    data={[
                      "UI/UX designer",
                      "Product designer",
                      "3D designer",
                      "Graphic designer",
                      "Frontend",
                      "CTO",
                      "Backend",
                    ]}
                    onSubmit={(value) => {
                      let newHistory = [...changeLog];
                      newHistory.push({
                        date: new Date(),
                        old: `${position}`,
                        new: value,
                        message: `You changed position from`,
                      });
                      setChangeLog(newHistory);
                      setUser((prev) => ({ ...prev, position: value }));
                    }}
                  />
                  <EditableTextView
                    title="Salary"
                    value={`${minSalary} - ${maxSalary}`}
                    onSubmit={(value) => {
                      let { firstValue, secondValue } = stringDivider(
                        value,
                        "-"
                      );
                      let newHistory = [...changeLog];
                      newHistory.push({
                        date: new Date(),
                        old: `${minSalary} - ${maxSalary}`,
                        new: value,
                        message: `You changed salary from`,
                      });
                      setChangeLog(newHistory);
                      setUser((prev) => ({
                        ...prev,
                        minSalary: firstValue,
                        maxSalary: secondValue,
                      }));
                    }}
                  />
                  <EditableTextView
                    title="Skills"
                    multiple
                    data={[
                      "UI/UX designer",
                      "Product designer",
                      "3D designer",
                      "Graphic designer",
                      "Frontend",
                      "CTO",
                      "Backend",
                    ]}
                    value={skills}
                    onSubmit={(value) => {
                     
                      let newHistory = [...changeLog];
                      newHistory.push({
                        date: new Date(),
                        old: skills,
                        new: value,
                        message: `You changed skills from`,
                      });
                      setChangeLog(newHistory);
                      setUser((prev) => ({
                        ...prev,
                        skills:value
                      }));
                    }}
                  />
                  <EditableTextView
                    title="Socials"
                    value={linkedIn}
                    onSubmit={(value) => {
                      let newHistory = [...changeLog];
                      newHistory.push({
                        date: new Date(),
                        old: `${linkedIn}`,
                        new: value,
                        message: `You changed Social from `,
                      });
                      setChangeLog(newHistory);
                      setUser((prev) => ({ ...prev, linkedIn: value }));
                    }}
                  />
                  <EditableTextView
                    title="Candidate source"
                    value={candidateSource}
                    onSubmit={(value) => {
                      let newHistory = [...changeLog];
                      newHistory.push({
                        date: new Date(),
                        old: `${candidateSource}`,
                        new: value,
                        message: `You changed candidate source from`,
                      });
                      setChangeLog(newHistory);
                      setUser((prev) => ({ ...prev, candidateSource: value }));
                    }}
                  />
                  <EditableTextView
                    title="Seniority"
                    value={seniority}
                    onSubmit={(value) => {
                      let newHistory = [...changeLog];
                      newHistory.push({
                        date: new Date(),
                        old: `${seniority}`,
                        new: value,
                        message: `You changed seniority from`,
                      });
                      setChangeLog(newHistory);
                      setUser((prev) => ({ ...prev, seniority: value }));
                    }}
                  />
                  <EditableTextView
                    title="Years of Experience"
                    value={experience}
                    onSubmit={(value) => {
                      let newHistory = [...changeLog];
                      newHistory.push({
                        date: new Date(),
                        old: `${seniority}`,
                        new: value,
                        message: `You changed experience from`,
                      });
                      setChangeLog(newHistory);
                      setUser((prev) => ({ ...prev, experience: value }));
                    }}
                  />
                  <UploadInput />
                </Box>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <Box>
                  {changeLog.map((item, key) =>
                    item.type === "comment" ? (
                      <CommentItem
                        content={item.content}
                        firstName={item.firstName}
                        lastName={item.lastName}
                      />
                    ) : (
                      <ChangeLogItem
                        message={item.message}
                        date={item.date}
                        old={item.old}
                        new={item.new}
                        key={key}
                      />
                    )
                  )}
                </Box>
                <Box
                  sx={{
                    border: "1px solid #E6E6E7",
                    p: 1,
                    borderRadius: 1,
                    mt: 4,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <InputBase
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    fullWidth
                    sx={{ height: "100%", mx: 2 }}
                    placeholder="Type to comment"
                  />
                  <Button
                    onClick={handleCommentSubmit}
                    color="secondary"
                    variant="contained"
                    sx={{ textTransform: "none" }}
                  >
                    Comment
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};
export default CandidateDetails;
