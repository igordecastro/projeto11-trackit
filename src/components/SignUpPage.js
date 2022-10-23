import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/TrackIt.png";

export default function SignUpPage() {
    const [form, setForm] = useState({email: "", name: "", image: "", password: "" })
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    }

    function signUp(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        axios.post(URL, form)
            .then(() => navigate("/"))
            .catch(err => alert(err.response.data.message))
    }
    return (
        <MainContainer>
            <img src={logo} alt="TrackIt-Logo" />
            <form onSubmit={signUp}>
                <input required name="email" type="email" onChange={handleForm} value={form.email} placeholder="email" />
                <input required name="password" type="password" onChange={handleForm} value={form.password} placeholder="senha" />
                <input required name="name" onChange={handleForm} value={form.name} placeholder="nome" />
                <input required name="image" onChange={handleForm} value={form.image} placeholder="foto" />
                <button>Cadastrar</button>
            </form>
            <Link to="/">
                <p>Já tem uma conta? Faça Login!</p>
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
    img{
        width: 180px;
        height: 178.38px;
    }
    input {
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
    }
    p {
        text-decoration: underline;
        color: #52B6FF;
        margin-top: 25px;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`