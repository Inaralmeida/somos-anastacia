import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import GlobalStyles from "./Styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles/>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
