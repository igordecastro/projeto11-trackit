import axios from "axios"
import styled from "styled-components"
import { Day } from "../assets/GlobalStyle"
import { useHabit, useHabits, useInfo, useDays, useSelectedDays } from "./context/index"

export default function NewHabit({ setAddHabit }) {
    const { weekDays } = useDays()
    const { userInfo } = useInfo()
    const { habit, setHabit } = useHabit()
    const { habits, setHabits } = useHabits()
    const { selectedDays, setSelectedDays } = useSelectedDays()
    function selectDay(dayToBeSelected) {
        if (!selectedDays.includes(dayToBeSelected)) {
            setSelectedDays([...selectedDays, dayToBeSelected])
        } else if (selectedDays.includes(dayToBeSelected)) {
            const newDays = selectedDays.filter(day => day !== dayToBeSelected)
            setSelectedDays(newDays)
        }
    }

    function isSelected(day) {
        if (selectedDays.includes(day)) {
            return { backgroud: "#CFCFCF", letter: "#FFFFFF" }
        } else {
            return { background: "#FFFFFF", letter: "#DBDBDB" }
        }
    }

    function addHabit() {
        let daysID = []
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`
            }
        }
        for (let i = 0; i < selectedDays.length; i++) {
            daysID.push(selectedDays[i].id)
        }
        const body = {
            name: habit,
            days: daysID
        }
        axios.post(URL, body, config)
            .then(res => setHabits([...habits, res.data]))
            
        setAddHabit(false)
    }

    return (
        <NewHabitContainer>
            <input placeholder="nome do hábito" value={habit} onChange={e => setHabit(e.target.value)} />
            {weekDays.map((d, i) =>
                <Day
                    key={i}
                    onClick={() => selectDay(d)}
                    color={isSelected(d)}
                >
                    {d.name}
                </Day>)}
            <div>
                <h2 onClick={() => setAddHabit(false)}>Cancelar</h2>
                <button onClick={addHabit}>Salvar</button>
            </div>
        </NewHabitContainer>
    )
}
const NewHabitContainer = styled.div`
    margin: 0 auto 29px auto;
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    input {
        margin: 18px 18px 10px 19px;
    }
    span:nth-child(2) {
        margin-left: 19px;
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 16px 15px 148px;
        button {
            width: 84px;
            height: 35px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            text-align: center;
            cursor: pointer;
        }
    }
    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
        cursor: pointer;
    }
`