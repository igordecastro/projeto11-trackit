import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/TrackIt.png";
import { usePassword, useEmail, useInfo } from "./context/index"

export default function LoginPage() {
    const { password, setPassword } = usePassword()
    const { email, setEmail } = useEmail()
    const { setUserInfo } = useInfo()
    const navigate = useNavigate()

    function login(e) {
        e.preventDefault()

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        axios.post(URL, { email, password })
            .then((res) => {
                const newInfos = {
                    id: res.data.id,
                    name: res.data.name,
                    image: res.data.image,
                    email: res.data.email,
                    token: res.data.token,
                }
                setUserInfo(newInfos)
                navigate("/hoje")
            })
            .catch(err => alert(err.response.data.message))
    }

    return (
        <MainContainer>
            <img src={logo} alt="TrackIt-Logo" />
            <form onSubmit={login}>
                <input name="email" required type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                <input name="password" required type="password" onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
                <button>Entrar</button>
            </form>
            <Link to="/cadastro">
                <p href="">Não tem uma conta? Cadastre-se!</p>
            </Link>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    height: 300px;
    margin: 10em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 180px;
        height: 178.38px;
    }
    input {
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
    }
    button {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center; 
        width: 303px;
        height: 45px;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }p {
        text-decoration: underline;
        color: #52B6FF;
        margin-top: 25px;
    }
`