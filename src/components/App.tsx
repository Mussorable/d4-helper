import { ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import theme from "./Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
