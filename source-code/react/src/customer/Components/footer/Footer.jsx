import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid
      className="bg-black text-white mt-10 text-center"
      container
      color="white"
      sx={{ bgcolor: "black", color: "white", py: 3, borderTop: "1px solid #fff" }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body2" component={Link} href="#" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body2" component={Link} href="#" gutterBottom>
          FAQs
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Products & Services
        </Typography>
        <Typography variant="body2" component={Link} href="#" gutterBottom>
          Explore
        </Typography>
        <Typography variant="body2" component={Link} href="#" gutterBottom>
          Pricing
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Resources
        </Typography>
        <Typography variant="body2" component={Link} href="#" gutterBottom>
          Guides
        </Typography>
        <Typography variant="body2" component={Link} href="#" gutterBottom>
          Webinars
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Legal
        </Typography>
        <Typography variant="body2" component={Link} href="#" gutterBottom>
          Terms & Conditions
        </Typography>
        <Typography variant="body2" component={Link} href="#" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body2" component={Link} href="#" gutterBottom>
          Security
        </Typography>
      </Grid>
      <Grid className="pt-20" item xs={12}>
        <Typography variant="body2" component="p" align="center">
          © 2024 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love by us.
        </Typography>
        
        <Typography variant="body2" component="p" align="center">
          Icons made by{' '}
          <Link href="https://www.freepik.com" color="inherit" underline="always">
            Freepik
          </Link>{' '}
          from{' '}
          <Link href="https://www.flaticon.com/" color="inherit" underline="always">
            www.flaticon.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
