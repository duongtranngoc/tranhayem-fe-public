import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { REAL_NAME } from "~/utils/constant";

const FooterCopyright = ({ contact }) => {
  const {
    startYear: startYearTimestamp,
    updateYear: updateYearTimestamp,
    github,
    developerName,
  } = contact;
  const currentWebsite = window.location.host;
  const startYear = new Date(startYearTimestamp).getFullYear();
  const updateYear = new Date(updateYearTimestamp).getFullYear();

  return (
    <Typography variant="body2">
      @{updateYear} - {currentWebsite}. Since @{startYear} - All Rights
      Reserved. Developed by{" "}
      <Link href={github} color="inherit" underline="hover" fontWeight="bold">
        {developerName ? developerName : REAL_NAME}
      </Link>
    </Typography>
  );
};

export default FooterCopyright;
