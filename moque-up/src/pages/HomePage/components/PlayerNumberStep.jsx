import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { useEffect } from "react";

const PlayerNumberStep = ({
    playerNumber,
    handlePlayerNumber,
    goToNextStep,
}) => {

    const handleSelectNumber = (number) => {
        localStorage.setItem("playerNumber", number);
        handlePlayerNumber(number)
    }


    const handleGoToNextStep = () => {
        localStorage.setItem("startingGameStep", 2);
        goToNextStep();
    }
    
    return (
        <div className="playerNumber">
            <span className="description">
                <h2>Salut les apprentis designers !</h2> <br />Bienvenue dans Moque-up, le jeu
                où vos amis peuvent devenir vos pires cauchemars.
                <br />
                Avez-vous vraiment une âme d’artiste ? C’est ce que vous allez devoir
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
                                onChange={() => handleSelectNumber(4)}
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
                                onChange={() => handleSelectNumber(5)}
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
                                onChange={() => handleSelectNumber(6)}
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
                <Button
                    variant="contained"
                    onClick={handleGoToNextStep}
                    disabled={playerNumber === null}
                >
                    Suivant
                </Button>
            </div>
        </div>
    );
};

export default PlayerNumberStep;