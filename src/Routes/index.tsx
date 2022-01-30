import { Route, Routes as Switch} from "react-router-dom"
import Home from "../Pages/Home/Home";

const Routes = () => {
  return(
    <Switch>
        <Route path='/' element={<Home/>}  />

    </Switch>
  );
};

export default Routes;
