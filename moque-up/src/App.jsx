import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from "./pages/GamePage/GamePage.jsx";
import HomePage from "./pages/HomePage/HomePage";
import ScorePage from "./pages/ScorePage/ScorePage";
import { AppContextProvider, useAppContext } from "./contexts/AppContext.jsx";
import "./index.scss";

function App() {
    return (
        <AppContextProvider>
            <Router>
                <Routes>
                    <Route index exact element={<HomePage />} />
                    <Route path="game" exact element={<GamePage />} />
                    <Route path="score" exact element={<ScorePage />} />
                    <Route path="*" element={<p>404</p>} />
                </Routes>
            </Router>
        </AppContextProvider>
    );
}

export default App;
