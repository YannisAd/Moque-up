import React, { useState, useEffect } from "react";
import "./ScorePage.scss";
import { useAppContext } from "../../contexts/AppContext";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

const ScorePage = () => {
    const { players, setPlayers, saboteur, playerNumber } = useAppContext();
    const [potentialSaboteur, setPotentialSaboteur] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [win, setWin] = useState(null);

    useEffect(() => {
        if (players.length === 0) {
            const storedPlayers = localStorage.getItem("players");
            if (storedPlayers) {
                setPlayers(JSON.parse(storedPlayers));
            }
        }
    }, []);

    const handleShowSaboteur = () => {
        if (potentialSaboteur === players[saboteur].playerName) {
            setWin(true);
        } else {
            setWin(false);
        }
        setShowResult(true);
    };

    const selectPotentialSaboteur = (player) => {
        setPotentialSaboteur(player);
    };

    return (
        <div className="scorePage page">
            <div className="endScreen">
                <h2>La partie est terminée !</h2>
                <span>Avez-vous trouvé le saboteur ?</span>
                <div className="saboteurSelectors">
                    <RadioGroup row name="radio-buttons">
                        {Array.from({ length: playerNumber }, (_, index) => (
                            <FormControlLabel
                                key={index}
                                label={players[index + 1].playerName}
                                control={
                                    <Radio
                                        value={players[index + 1].playerName}
                                        // checked={playerNumber === index + minPlayer}
                                        onChange={() =>
                                            selectPotentialSaboteur(
                                                players[index + 1].playerName
                                            )
                                        }
                                        sx={{
                                            color: "white",
                                            "&.Mui-checked": {
                                                color: "white",
                                            },
                                        }}
                                    />
                                }
                            />
                        ))}
                    </RadioGroup>
                </div>

                <Button
                    variant="outlined"
                    onClick={handleShowSaboteur}
                    style={{
                        color: "white", // Couleur du texte en rose pâle
                        borderColor: "white", // Couleur de la bordure en rose pâle
                        "&:hover": {
                            backgroundColor: "white", // Changement de couleur de fond au survol
                            color: "white", // Changement de la couleur du texte pour le contraste
                        },
                        width: "200px",
                    }}
                >
                    Vérifier
                </Button>

                {showResult &&
                    (win ? (
                        <span className="result">
                            Bravo Le saboteur était bien {potentialSaboteur}
                        </span>
                    ) : (
                        <span className="result">
                            Perdu ! Le saboteur était{" "}
                            {players[saboteur].playerName}
                        </span>
                    ))}
            </div>
        </div>
    );
};

export default ScorePage;
