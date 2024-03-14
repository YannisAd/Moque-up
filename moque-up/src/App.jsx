import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from "./pages/GamePage/GamePage.jsx";
import HomePage from "./pages/HomePage/HomePage";
import ScorePage from "./pages/ScorePage/ScorePage";
import "./App.scss";

function App() {
    return (
        <Router>
            <Routes>
                <Route index exact element={<HomePage />} />
                <Route path="game" exact element={<GamePage />} />
                <Route path="score" exact element={<ScorePage />} />
                <Route path="*" element={<p>404</p>} />
            </Routes>
        </Router>
    );
}

export default App;
