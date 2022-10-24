import styled from "styled-components"
import { Header, Global } from "../assets/GlobalStyle";
import FooterContainer from "./FooterContainer";
import { useInfo, usePercentage, useToday } from "./context/index"
import CurrentHabit from "./CurrentHabit"
import axios from "axios";
import { useEffect, useState } from "react";

export default function TodayPage() {
    const dayjs = require('dayjs')
    const weekday = dayjs().day()
    const date = dayjs().date()
    const month = dayjs().month()
    const { percentage, setPercentage } = usePercentage()
    const { userInfo } = useInfo()
    const { todayHabits, setTodayHabits } = useToday()
    let habitsDone = 0

    for(let i = 0; i < todayHabits.length; i++) {
        if (todayHabits[i].done) {
            habitsDone++
        }
    }

    function convertToDay(weekday) {
        if (weekday === 0) {
            return "Domingo"
        } else if (weekday === 1) {
            return "Segunda"
        } else if (weekday === 2) {
            return "Terça"
        } else if (weekday === 3) {
            return "Quarta"
        } else if (weekday === 4) {
            return "Quinta"
        } else if (weekday === 5) {
            return "Sexta"
        } else if (weekday === 6) {
            return "Sábado"
        }
    }

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        axios.get(URL, config)
            .then(res => setTodayHabits(res.data))
            .catch(err => err.response.data.message)
    }, [])
    setPercentage(Math.ceil((habitsDone / todayHabits.length) *100))
    return (
        <>
            <MainContainer>
                <Global />
                <Header>
                    <div>
                        <h1>TrackIt</h1>
                        <img src={userInfo.image} alt="" />
                    </div>
                </Header>
                <h2>{`${convertToDay(weekday)}, ${date}/${month < 10 ? `0${month}` : month}`}</h2>
                {todayHabits.length === 0 ? <p>Nenhum hábito concluído ainda</p> : <h4>{percentage}% dos hábitos concluídos</h4>}
                {todayHabits.map((t, i) => <CurrentHabit key={i} t={t} habitsDone={habitsDone}/>)}
            </MainContainer>
            <FooterContainer />
        </>
    )
}

const MainContainer = styled.div`
    div:last-child {
        margin-bottom: 101px;
    }
    h2 {
        margin: 98px 0 0 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;color: #126BA5;
    }
    h4 {
        margin: 0 0 26px 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #8FC549;
    }
    p {
        margin: 0 0 26px 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
    div {
        margin-bottom: 10px;
    }
`