import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Theme } from "../../../Styles/GlobalTheme";
interface ILinkProps {
  name: string;
  path: string;
  currentPage: boolean;
}

const LiContainer = styled.p`
 color: ${Theme.gray};
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 20px;
  font-family: 'Montserrat', sans-serif;
  transition: all .3s;
  cursor: pointer;

  &:hover{
    color: ${Theme.primary};
  }
`

const Link = ({ name, path, currentPage }: ILinkProps) => {
  const navigate = useNavigate();
  return <LiContainer onClick={() => navigate(path)}>{name}</LiContainer>;
};

export default Link;
