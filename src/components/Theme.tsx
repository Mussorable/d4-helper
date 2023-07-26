import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    ochre: Palette["primary"];
    pink: Palette["primary"];
    sapphire: Palette["primary"];
  }

  interface PaletteOptions {
    ochre?: PaletteOptions["primary"];
    pink?: PaletteOptions["primary"];
    sapphire?: PaletteOptions["primary"];
  }
}

export default createTheme({
  palette: {
    ochre: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
    pink: {
      main: "#a101e5",
      light: "#c94dfe",
      dark: "#59017f",
      contrastText: "#000",
    },
    sapphire: {
      main: "#0b1354",
      light: "#15249e",
      dark: "#030517",
      contrastText: "#000",
    },
  },
});
