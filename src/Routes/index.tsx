import { Route, Routes as Switch} from "react-router-dom"
import Denuncia from "../Pages/Denuncia/Denuncia";
import Home from "../Pages/Home/Home";
import Quizz from "../Pages/Quizz/Quizz";
import Relacionamento from "../Pages/Quizz/Relacionamento";

const Routes = () => {
  return(
    <Switch>
        <Route path='/' element={<Home/>}  />
        <Route path='/quiz' element={<Quizz/>}  />
        <Route path='/quiz/relacionamento' element={<Relacionamento/>}  />
        <Route path='/Denuncias' element={<Denuncia/>}  />

    </Switch>
  );
};

export default Routes;
