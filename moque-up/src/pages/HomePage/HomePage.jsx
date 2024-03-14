import React, { useState, useEffect } from "react";
import "./HomePage.scss";
import { useAppContext } from "../../contexts/AppContext";
import Button from "@mui/material/Button";
import StartGameStep from "./components/StartGameStep";
import PlayerNameStep from "./components/PlayerNameStep";
import PlayerNumberStep from "./components/PlayerNumberStep";

const HomePage = () => {
    const { setPlayers } = useAppContext();
    const [saboteur, setSaboteur] = useState(null)
    const [step, setStep] = useState(1);
    const [playerNumber, setPlayerNumber] = useState(null);

    useEffect(() => {
        const startingGameStep = localStorage.getItem('startingGameStep');
        if (startingGameStep) {
            setStep(parseInt(startingGameStep));
        }
    }, [])

    const handlePlayerNumber = (number) => {
        setSaboteur(Math.floor(Math.random() * number) + 1);
        setPlayerNumber(number);
    };

    const goToNextStep = () => {
        setStep((prev) => prev + 1);
    };

    const goToPreviousStep = () => {
        if (step === 1) {
            return;
        }
        setStep((prev) => prev - 1);
    };

    return (
        <div className="homePage page">
            <div className="topPart">
                <Button variant="outlined" onClick={goToPreviousStep}>
                    Revenir en arrière
                </Button>
            </div>
            <div className="steps">
                {step === 1 && (
                    <PlayerNumberStep
                        playerNumber={playerNumber}
                        handlePlayerNumber={handlePlayerNumber}
                        goToNextStep={goToNextStep}
                    />
                )}
                {step === 2 && (
                    <PlayerNameStep
                        setPlayers={setPlayers}
                        goToNextStep={goToNextStep}
                        saboteur={saboteur}
                    />
                )}
                {step === 3 && <StartGameStep/>}
            </div>
        </div>
    );
};




export default HomePage;
