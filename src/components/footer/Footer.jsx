import Box from "@mui/material/Box";

import theme from "~/theme";

import FooterContact from "./footerContact/FooterContact";
import FooterCopyright from "./footerCopyright/FooterCopyright";

const Footer = ({ contact }) => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.footer.backgroundColor,
        minHeight: theme.tranhayemCustom.minHeightFooter,
        padding: "16px",
        textAlign: "center",
        boxShadow: "var(--mui-shadows-20)",
      }}
    >
      <FooterContact contact={contact} />
      <FooterCopyright contact={contact} />
    </Box>
  );
};

export default Footer;
