import GlobalStyle from "../assets/GlobalStyle"
import LoginPage from "./LoginPage"
import SignUpPage from "./SignUpPage"
import TodayPage from "./TodayPage"
import HabitsPage from "./HabitsPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import MainProvider from "./context"
import HistoricPage from "./HistoricPage"

function App() {

  return (
    <MainProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoricPage />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;