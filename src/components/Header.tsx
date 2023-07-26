import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { default as Logo } from "../assets/logo.svg";

interface ScrollingProps {
  children: React.ReactElement;
}

const pages = ["Products", "Pricing", "Blog"];

// Create special .toolbar margin on the div after header
const useStyles = makeStyles((theme: Theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

const Header = () => {
  const appBarClasses = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function ElevationScroll(props: ScrollingProps) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <img
                src={Logo}
                alt="logo diablo funpage"
                width="60"
                height="60"
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  marginLeft: ".2rem",
                  letterSpacing: ".4px",
                  fontWeight: 700,
                  fontStyle: "italic",
                  textTransform: "uppercase",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                D4 Fast arrow
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="secondary"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 0.5, display: "block" }}
                      >
                        {page}
                      </Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  fontFamily: "Poppins, sans-serif",
                  marginLeft: ".2rem",
                  flexGrow: 1,
                  letterSpacing: ".2px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                D4 Fast arrow
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <div className={appBarClasses.toolbarMargin} />
    </>
  );
};

export default Header;
