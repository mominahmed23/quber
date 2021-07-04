import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Routes from "./routes/index";
// import Routes from "./Routes";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#084F92",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
