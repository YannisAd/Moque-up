import React, { useState, useRef, useMemo, useCallback } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const PlayerNameStep = ({ setPlayers, goToNextStep, saboteur }) => {
    const [step, setStep] = useState(1);
    const [showRole, setShowRole] = useState(false);
    const [inputName, setInputName] = useState("");
    const playersList = useRef({});

    let playerNumber = parseInt(localStorage.getItem("playerNumber"));

    if (!playerNumber) {
        playerNumber = 4;
    }
    if (!saboteur) {
        saboteur = Math.floor(Math.random() * playerNumber) + 1;
    }

    const currentName = useMemo(() => inputName, [inputName]);

    const handlePlayerName = useCallback((name) => {
        setInputName(name);
    }, []);

    const handleShowRole = () => {
        setShowRole(true);
    };

    const goToNextPlayer = () => {
        if (step === playerNumber) {
            localStorage.setItem("startingGameStep", 3);
            localStorage.setItem("player", playersList.current);
            setPlayers(playersList.current);
            goToNextStep();
        }

        playersList.current[step] = {
            playerName: currentName,
            role: step === saboteur ? "saboteur" : "designer",
        };

        setInputName("");
        setShowRole(false);
        setStep((prev) => prev + 1);
    };

    const goToPreviousPlayer = () => {
        if (step === 1) {
            return;
        }
        setStep((prev) => prev - 1);
    };

    return (
        <div className="playerName">
            <span className="description">
                <h2>Il est maintenant temps de choisir un pseudo pour cette partie.
                Votre rôle vous sera ensuite révélé.</h2>
             
                <br />
                ⚠️ Attention : Faites en sorte de conserver votre rôle secret !{" "}
                <br />
                Une fois avoir pris connaissance de votre rôle, veuillez cliquer
                sur suivant.
            </span>

            <div className="nameSelection">
                <span>Au tour du joueur {step} !</span>
                <TextField
                    id="outlined-basic"
                    label="Pseudo"
                    variant="outlined"
                    value={inputName}
                    onChange={(event) => handlePlayerName(event.target.value)}
                    InputProps={{
                        style: {
                            color: "#FFFFFF", // Couleur du texte en blanc
                            borderColor: "#FFFFFF", // Couleur de la bordure en blanc
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            color: "#FFFFFF", // Couleur de l'étiquette en blanc
                        },
                    }}
                />
                <Button
                    variant="outlined"
                    onClick={handleShowRole}
                    disabled={inputName === ""}
                    style={{
                        color: "white", // Couleur du texte en rose pâle
                        borderColor: "white", // Couleur de la bordure en rose pâle
                        "&:hover": {
                            backgroundColor: "white", // Changement de couleur de fond au survol
                            color: "white", // Changement de la couleur du texte pour le contraste
                        },
                        width: "250px",
                        margin: "auto",
                    }}
                >
                    Révéler mon rôle
                </Button>

                {showRole &&
                    (step === saboteur ? (
                        <img
                            src="src/assets/images/saboteur.png"
                            alt="saboteur"
                        />
                    ) : (
                        <img
                            src="src/assets/images/designer.png"
                            alt="designer"
                        />
                    ))}
            </div>

            <div className="bottomPart">
                <Button
                    variant="outlined"
                    onClick={goToPreviousPlayer}
                    style={{
                        color: "white", // Couleur du texte en rose pâle
                        borderColor: "white", // Couleur de la bordure en rose pâle
                        "&:hover": {
                            backgroundColor: "white", // Changement de couleur de fond au survol
                            color: "white", // Changement de la couleur du texte pour le contraste
                        },
                    }}
                >
                    Revenir en arrière
                </Button>
                <Button
                    variant="contained"
                    onClick={goToNextPlayer}
                    disabled={inputName === "" || !showRole}
                >
                    Suivant
                </Button>
            </div>
        </div>
    );
};

export default PlayerNameStep;
