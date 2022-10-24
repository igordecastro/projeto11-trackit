import styled from "styled-components";
import { Header, Global } from "../assets/GlobalStyle";
import FooterContainer from "./FooterContainer";
import { useInfo } from "./context/index";

export default function HistoricPage() {
    const { userInfo } = useInfo()

    return (
        <>
            <Global />
            <MainContainer>
                <Header>
                    <div>
                        <h1>TrackIt</h1>
                        <img src={userInfo.image} alt="" />
                    </div>
                </Header>
                <h2>
                    Histórico
                </h2>
                <p>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </p>
            </MainContainer>
            <FooterContainer />
        </>
    )
}

const MainContainer = styled.div`
    h2 {
        margin: 98px 0 0 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    p {
        margin: 17px 0 0 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`