import styled from "styled-components"
import { Day } from "../assets/GlobalStyle"
import { useDays, useHabits } from "./context/index"
import bin from "../assets/img/Vector.svg"

export default function Habit({ id, name, days }) {
    console.log(days)
    const { weekDays } = useDays()
    const { habits, setHabits } = useHabits()

    function deleteHabit(habitToBeDeleted) {
        const newHabits = habits.filter((h) => h.id !== habitToBeDeleted)
    }
    
    return (
        <MainContainer>
            <h2>{name}</h2>
            <img onClick={() => deleteHabit(id)} src={bin} />
            {weekDays.map((d, i) =>
                <Day key={i} color={days.includes(d.id)
                    ?
                    { backgroud: "#CFCFCF", letter: "#FFFFFF" }
                    :
                    { background: "#FFFFFF", letter: "#DBDBDB" }}
                >
                    {d.name}
                </Day>
            )}
        </MainContainer>
    )
}

const MainContainer = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin: 10px;
    }
    span:nth-child(2) {
        margin-left: 19px;
    }
    img {
        position: absolute;
        left: 89.07%;
        right: 7.47%;
        top: 23.69%;
        bottom: 74.06%;
        cursor: pointer;
    }
`