import { Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      className="flex flex-row justify-center align-center bg-black text-white mt-10 text-center"
      container
      color="white"
      sx={{
        bgcolor: "black",
        color: "white",
        py: 5,
        borderTop: "1px solid #fff",
      }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          About Us
        </Typography>

        <div className="flex flex-col">
          <Typography variant="body2" component={Link} href="#" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" component={Link} href="#" gutterBottom>
            FAQs
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Products & Services
        </Typography>

        <div className="flex flex-col">
          <Typography variant="body2" component={Link} href="#" gutterBottom>
            Explore
          </Typography>
          <Typography variant="body2" component={Link} href="#" gutterBottom>
            Pricing
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Resources
        </Typography>

        <div className="flex flex-col">
          <Typography variant="body2" component={Link} href="#" gutterBottom>
            Guides
          </Typography>
          <Typography variant="body2" component={Link} href="#" gutterBottom>
            Webinars
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography className="pb-3" variant="h6" gutterBottom>
          Legal
        </Typography>
        <div className="flex flex-col">
          <Typography variant="body2" component={Link} href="#" gutterBottom>
            Terms & Conditions
          </Typography>
          <Typography variant="body2" component={Link} href="#" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="body2" component={Link} href="#" gutterBottom>
            Security
          </Typography>
        </div>
      </Grid>
      <Grid className="pt-10" item xs={12}>
        <Typography variant="body2" component="p" align="center">
          © 2024 tecnologia. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
