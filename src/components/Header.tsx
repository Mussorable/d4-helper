import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Tabs,
  Tab,
  Typography,
  useScrollTrigger,
  styled,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { default as Logo } from "../assets/logo.svg";

interface ScrollingProps {
  children: React.ReactElement;
}

interface StyledTabProps {
  label: string;
  value: string;
}

const pages = ["Home", "Classes", "Builds", "Skills calculator"];

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#d38bf3",
  },
});

const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  color: "white",
  fontSize: "1rem",
  opacity: 0.9,
  fontWeight: 600,
  letterSpacing: ".7px",
  transition: ".2s",
  "&:hover": {
    color: "#FFBF00",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#d38bf3",
    opacity: 1,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#3447e4",
  },
}));

const Header = () => {
  const [value, setValue] = useState("home");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
              <AntTabs
                onChange={handleChange}
                value={value}
                aria-label="navigation bar"
              >
                {pages.map((page) => (
                  <AntTab
                    value={page.toLowerCase().replace(" ", "-")}
                    key={page.toLowerCase()}
                    label={page.toLowerCase().replace(" ", "-")}
                  />
                ))}
              </AntTabs>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Box
        sx={{
          minHeight: (theme) => theme.mixins.toolbar,
        }}
      ></Box>
    </>
  );
};

export default Header;
