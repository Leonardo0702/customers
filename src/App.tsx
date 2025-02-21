import { GlobalStyle } from "./global/globalStyles";
import { Routes } from "./routes";
import { ThemeProvider } from "./store/useTheme";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
