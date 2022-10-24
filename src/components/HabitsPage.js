import { useEffect, useState } from "react"
import styled from "styled-components"
import NewHabit from "./NewHabit"
import { useInfo, useHabits } from "./context/index"
import { Header, Global } from "../assets/GlobalStyle";
import axios from "axios";
import FooterContainer from "./FooterContainer";
import Habit from "./Habit"

export default function HabitsPage() {
    const [addHabit, setAddHabit] = useState(false)
    const { userInfo } = useInfo()
    const { habits, setHabits } = useHabits()

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`
            }
        }
        axios.get(URL, config)
            .then(res => setHabits(res.data))
            .catch(err => {alert(err.response.data.message)})
    }, [])
    

    return (
        <>
            <Global />
            <Header>
                <div>
                    <h1>TrackIt</h1>
                    <img src={userInfo.image} alt="" />
                </div>
            </Header>
            <BodyContainer>
                <div>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setAddHabit(true)}>+</button>
                </div>
                {addHabit ? <NewHabit setAddHabit={setAddHabit} /> : ""}
                {habits.length === 0 ?
                    <p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>
                    :
                    habits.map((h,i) => <Habit key={i} id={h.id} name={h.name} days={h.days}/>)}
            </BodyContainer>
            <FooterContainer />
        </>
    )
}

const BodyContainer = styled.div`
    div:last-child {
        margin-bottom: 101px;
    }
    div:first-child {
        margin: 92px 18px 28px 17px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        button {
            width: 40px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 34px;
            color: #FFFFFF;
            cursor: pointer;
        }
        h1{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
        }
    }
    p{
        margin: 0 auto;
        width: 338px;
        height: 74px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
    div {
        margin: 10px 18px 0 17px;
    }
`