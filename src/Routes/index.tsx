import { Navigate, Route, Routes as RouterRoutes } from "react-router-dom";
import Denuncia from "../Pages/Denuncia/Denuncia";
import Home from "../Pages/Home/Home";
import Quizz from "../Pages/Quizz/Quizz";
import Relacionamento from "../Pages/Quizz/Relacionamento";

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/quiz" element={<Quizz />} />
    <Route path="/quiz/relacionamento" element={<Relacionamento />} />
    <Route path="/quiz/trabalho" element={<Navigate to="/quiz" replace />} />
    <Route path="/quiz/escola" element={<Navigate to="/quiz" replace />} />
    <Route path="/denuncias" element={<Denuncia />} />
    <Route path="/Denuncias" element={<Navigate to="/denuncias" replace />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </RouterRoutes>
);

export default Routes;
