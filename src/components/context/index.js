import React, { createContext, useState, useContext } from "react";

const MainContext = createContext();

export default function MainProvider({ children }) {
    const [percentage, setPercentage] = useState(0);
    const [habit, setHabit] = useState("")
    const [habits, setHabits] = useState([])
    const [selectedDays, setSelectedDays] = useState([])
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [userInfo, setUserInfo] = useState({id: 0, name: "", image: "", email: "", token: ""})
    const [weekDays, setWeekDays] = useState([
        { name: "D", selected: false, id:7 },
        { name: "S", selected: false, id:1 },
        { name: "T", selected: false, id:2 },
        { name: "Q", selected: false, id:3 },
        { name: "Q", selected: false, id:4 },
        { name: "S", selected: false, id:5 },
        { name: "S", selected: false, id:6 }]
    )

    return (
        <MainContext.Provider
            value={{
                habit,
                setHabit,
                selectedDays,
                setSelectedDays,
                weekDays,
                setWeekDays,
                password,
                setPassword,
                email,
                setEmail,
                userInfo,
                setUserInfo,
                habits,
                setHabits,
                percentage,
                setPercentage
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

export function useHabit() {
    const context = useContext(MainContext);

    const {habit, setHabit} = context;
    return {habit, setHabit}
}

export function useSelectedDays() {
    const context = useContext(MainContext);

    const {selectedDays, setSelectedDays} = context;
    return {selectedDays, setSelectedDays}
}

export function useDays() {
    const context = useContext(MainContext);

    const {weekDays, setWeekDays} = context;
    return {weekDays, setWeekDays}
}

export function usePassword() {
    const context = useContext(MainContext);

    const {password, setPassword} = context;
    return {password, setPassword}
}

export function useEmail() {
    const context = useContext(MainContext);

    const {email, setEmail} = context;
    return {email, setEmail}
}

export function useInfo() {
    const context = useContext(MainContext);

    const {userInfo, setUserInfo} = context;
    return {userInfo, setUserInfo}
}

export function useHabits() {
    const context = useContext(MainContext);

    const {habits, setHabits} = context;
    return {habits, setHabits}
}

export function usePercentage() {
    const context = useContext(MainContext);

    const {percentage, setPercentage} = context;
    return {percentage, setPercentage}
}