import styled from "styled-components"
import checkboxDone from "../assets/img/checkboxdone.svg"
import checkbox from "../assets/img/checkbox.svg"
import { useInfo, useToday } from "./context/index"
import axios from "axios"

export default function CurrentHabit({ t, habitsDone }) {

    const { todayHabits, setTodayHabits } = useToday()
    const { userInfo } = useInfo()

    function markHabitAsDone(habit) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit}/check`

        const config = { headers: { "Authorization": `Bearer ${userInfo.token}` } }
        axios.post(URL, habit, config)
            .then(() => {
                habitsDone++
                // setTodayHabits([...todayHabits, todayHabits])
                console.log(todayHabits)
            })
            .catch(err => console.log(err.response.data.message, config))
    }

    function markHabitAsUndone(habit) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit}/uncheck`

        const config = { headers: { "Authorization": `Bearer ${userInfo.token}` } }
        axios.post(URL, habit, config)
            .then(habitsDone--)
            .catch(err => console.log(err.response.data.message, config))
    }

    return (
        <MainContainer>
            <span >
                <div>
                    <h1>{t.name}</h1>
                    <Current color={t.done ? "#8FC549" : "#666666"} >Sequência atual: {t.currentSequence}</Current>
                    <Record
                        color={(t.currentSequence >= t.highestSequence) && t.highestSequence > 0
                            ?
                            "#8FC549"
                            :
                            "#666666"}
                    >
                        Seu recorde: {t.highestSequence}
                    </Record>
                </div>
                {t.done ? <img src={checkboxDone} onClick={() => markHabitAsUndone(t.id)} /> : <img src={checkbox} onClick={() => markHabitAsDone(t.id)} />}
            </span>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    margin: 0 auto;
    display: flex;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    span {
        position: relative;
        width: 212px;
        font-family: 'Lexend Deca';
        font-style: normal;
        color: #666666;
    }
    h1 {
        margin: 13px 0 7px 4px;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
    img {
        position: absolute;
        width: 69px;
        height: 69px;
        left: 270px;
        top: 12px;
        fill: #8FC549;
        border-radius: 5px;
    }
`
const Current = styled.h6`
    color: ${props => props.color};
    margin: 7px 0 0 4px;
    line-height: 16px;
    font-size: 12.976px;
`
const Record = styled.h6`
    color: ${props => props.color};
    margin: 7px 0 0 4px;
    line-height: 16px;
    font-size: 12.976px;
`