import styled from "styled-components";
import { Theme } from "../../Styles/GlobalTheme";

interface ILinhaProgressPorops{
    lenght: number
}

export const Container = styled.div`
    width: 100%;
    min-height: 50vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    .banner{
        width: 100%;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${Theme.primary};
    }
`

export const ProgressBar = styled.div`
    width: 100%;
    height: 30px;
    background-color: ${Theme.black};
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
`
export const LinhaProgress = styled.div<ILinhaProgressPorops>`
    width: ${p => p.lenght}% ;
    height: 15px;
    background-color: ${Theme.primary};
    transition: all 0.2s;
`
export const CampoDeQuestoes = styled.div`
    width: 100%;
    height: calc(100vh - 30px);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
