import { ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import theme from "./Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        hello
      </ThemeProvider>
    </>
  );
}

export default App;
