import { Footer } from "../assets/GlobalStyle";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { usePercentage } from "./context";

export default function FooterContainer() {
    const { percentage } = usePercentage();
    return (
        <Footer>
                <Link to="/habitos">
                    <h1>Hábitos</h1>
                </Link>
                <Link to="/hoje">
                    <div style={{ width: 91, height: 91, marginTop: -35 }}>
                        <CircularProgressbar
                            value={percentage}
                            text="Hoje"
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#52B6FF",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent"
                            })}
                        />
                    </div>
                </Link>
                <Link to="/historico">
                    <h1>Histórico</h1>
                </Link>
            </Footer>
    )
}