import React, { useState } from "react";
import "./HomePage.scss";
import { useAppContext } from "../../contexts/AppContext";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import { white } from '@mui/material/colors';

const HomePage = () => {
    const { score } = useAppContext();
    const [step, setStep] = useState(1);
    const [playerNumber, setPlayerNumber] = useState(null);

    const handlePlayerNumber = (number) => {
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
                {step === 2 && <PlayerNameStep />}
                {step === 3 && <StartGameStep />}
            </div>
        </div>
    );
};

const PlayerNumberStep = ({
    playerNumber,
    handlePlayerNumber,
    goToNextStep,
}) => {
    return (
        <div className="playerNumber">
            <span className="description">
                Salut les apprentis designers. Bienvenue dans Moque-up, le jeu
                où vos amis peuvent devenir vos pires cauchemars. Avez-vous
                vraiment une âme d’artiste ? C’est ce que vous allez devoir
                prouver à tous ! A vous de prouver que vous avez l’âme d’un
                designer.
            </span>
            <span>Quel est le nombre de joueurs ?</span>

            <div className="numberSelectors">
                <RadioGroup row name="radio-buttons">
                    <FormControlLabel
                        label="4 joueurs dont 1 saboteur"
                        control={
                            <Radio
                                value={4}
                                checked={playerNumber === 4}
                                onChange={() => handlePlayerNumber(4)}
                                sx={{
                                    color: "white",
                                    "&.Mui-checked": {
                                        color: "white",
                                    },
                                }}
                            />
                        }
                    />
                    <FormControlLabel
                        label="5 joueurs dont 1 saboteur"
                        control={
                            <Radio
                                value={5}
                                checked={playerNumber === 5}
                                onChange={() => handlePlayerNumber(5)}
                                sx={{
                                    color: "white",
                                    "&.Mui-checked": {
                                        color: "white",
                                    },
                                }}
                            />
                        }
                    />

                    <FormControlLabel
                        label="6 joueurs dont 1 saboteur"
                        control={
                            <Radio
                                value={6}
                                checked={playerNumber === 6}
                                onChange={() => handlePlayerNumber(6)}
                                sx={{
                                    color: "white",
                                    "&.Mui-checked": {
                                        color: "white",
                                    },
                                }}
                            />
                        }
                    />
                </RadioGroup>
            </div>

            <div className="bottomPart">
                <Button variant="contained" onClick={goToNextStep} disabled={playerNumber===null}>
                    Suivant
                </Button>
            </div>
        </div>
    );
};

const PlayerNameStep = () => {
    return (
        <div className="playerName">
            <h1>playerName</h1>
        </div>
    );
};

const StartGameStep = () => {
    return (
        <div className="startGame">
            <h1>startGame</h1>
        </div>
    );
};

export default HomePage;
