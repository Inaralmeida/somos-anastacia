import ButtoAction from "../ButtoAction/ButtoAction";
import Link from "../Link/Link";
import { useNavigate } from "react-router-dom";
import * as S from "./Header.styles";

interface IHeaderProps {
  page: string;
}

const Header = ({ page }: IHeaderProps) => {
  const navigate = useNavigate();
  const headers = [
    {
      name: "Sobre",
      path: "/",
    },
    {
      name: "Quiz",
      path: "/quiz",
    },
    {
      name: "Rede de Apoio",
      path: "/",
    },
    {
      name: "Ajude a iniciativa",
      path: "/",
    },
    {
      name: "Contato",
      path: "/",
    },
  ];
  return (
    <S.Container>
      <h1 onClick={()=> navigate('/')}><img src="/assets/img/logo-texto.png" alt="SOMOS ANASTÁCIA" /></h1>

      <nav>
        {headers.map((head, i) => {
          return (
            <Link
              key={i}
              name={head.name}
              path={head.path}
              currentPage={page === head.name}
            />
          );
        })}

        <ButtoAction
        text='DENUNCIAR'
        color='pink'
        onclick={()=> navigate('/denuncias')}
        />
      </nav>
    </S.Container>
  );
};

export default Header;
