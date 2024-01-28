import Link from "@mui/material/Link";

const FooterContactLinks = ({ href, icon: Icon }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      color="inherit"
      sx={{ mx: 0.5 }}
    >
      <Icon />
    </Link>
  );
};

export default FooterContactLinks;
