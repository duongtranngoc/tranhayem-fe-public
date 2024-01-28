import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import FooterContactLinks from "./footerContactLinks/FooterContactLinks";

const FooterContact = ({ contact }) => {
  const { email, github, linkedin, facebook, instagram, twitter, youtube } =
    contact;

  return (
    <Box>
      <Typography variant="body2" sx={{ display: { sm: "none" } }}>
        Contact me if you want to:{" "}
      </Typography>
      <Typography component={"span"} variant="body2">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            Contact me if you want to:{" "}
          </Typography>
          <FooterContactLinks href={`mailto:${email}`} icon={MailIcon} />
          <FooterContactLinks href={github} icon={GitHubIcon} />
          <FooterContactLinks href={linkedin} icon={LinkedInIcon} />
          <FooterContactLinks href={facebook} icon={FacebookIcon} />
          <FooterContactLinks href={instagram} icon={InstagramIcon} />
          <FooterContactLinks href={twitter} icon={TwitterIcon} />
          <FooterContactLinks href={youtube} icon={YouTubeIcon} />
        </Box>
      </Typography>
    </Box>
  );
};

export default FooterContact;
