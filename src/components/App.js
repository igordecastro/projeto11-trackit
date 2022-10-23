import GlobalStyle from "../assets/GlobalStyle"
import LoginPage from "./LoginPage"
import SignUpPage from "./SignUpPage"
import TodayPage from "./TodayPage"
import HabitsPage from "./HabitsPage.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import MainProvider from "./context"

function App() {
  const [habits, setHabits] = useState([])

  return (
    <MainProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;