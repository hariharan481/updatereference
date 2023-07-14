import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Table from "./Table";
import { Star } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerticalTabs from "./Vertical";
import TabPanel from "./openTab";
import { Tablecontent } from "./Tablecontent";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export const Tabpanel = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Stack direction={"row"} gap={"70px"} ml={5}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ marginTop: "-10px" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                disableFocusRipple
                disableRipple
                disableTouchRipple
                sx={{
                  cursor: "pointer",
                  variant: "subtitle1",
                  fontWeight: "700px",
                  color: "blue",
                  textTransform: "lowercase",
                }}
                label="  Code notes"
                {...a11yProps(0)}
              />
              <Tab
                disableFocusRipple
                disableRipple
                disableTouchRipple
                sx={{
                  cursor: "pointer",
                  variant: "subtitle1",
                  fontWeight: "700px",
                  color: "blue",
                  textTransform: "lowercase",
                }}
                variant="subtitle1"
                fontWeight={"700"}
                label="Section notes"
                {...a11yProps(1)}
              />
              <Tab
                disableFocusRipple
                disableRipple
                disableTouchRipple
                sx={{
                  cursor: "pointer",
                  variant: "subtitle1",
                  fontWeight: "700px",
                  color: "blue",
                  textTransform: "lowercase",
                }}
                variant="subtitle1"
                fontWeight={"700"}
                label="Chapter notes"
                {...a11yProps(2)}
              />
              <Tab
                disableFocusRipple
                disableRipple
                disableTouchRipple
                sx={{
                  cursor: "pointer",
                  variant: "subtitle1",
                  fontWeight: "700px",
                  color: "blue",
                  textTransform: "lowercase",
                }}
                variant="subtitle1"
                fontWeight={"700"}
                label="Chapter guidlines"
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Tablecontent />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}></CustomTabPanel>
          <CustomTabPanel value={value} index={2}></CustomTabPanel>
          <CustomTabPanel value={value} index={3}></CustomTabPanel>
        </Box>
      </Stack>
    </>
  );
};
