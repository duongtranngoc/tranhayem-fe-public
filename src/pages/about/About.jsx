import Box from "@mui/material/Box";
import GitHubActivity from "./gitHubActivity/GitHubActivity";
import PersonalInformation from "./personalInformation/PersonalInformation";
import TechnologiesUsed from "./technologiesUsed/TechnologiesUsed";
import ToolsAndIDEs from "./toolsAndIDEs/ToolsAndIDEs";

function About() {
  return (
    <Box>
      <PersonalInformation />
      <TechnologiesUsed />
      <ToolsAndIDEs />
      <GitHubActivity />
    </Box>
  );
}

export default About;
