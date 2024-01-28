import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const FooterCopyright = ({ contact }) => {
  const { updateYear, startYear, github, developerName } = contact;
  const currentWebsite = "tranhayem";
  return (
    <Typography variant="body2">
      @{updateYear} - {currentWebsite}. Since @{startYear} - All Rights
      Reserved. Developed by{" "}
      <Link href={github} color="inherit" underline="hover" fontWeight="bold">
        {developerName}
      </Link>
    </Typography>
  );
};

export default FooterCopyright;
