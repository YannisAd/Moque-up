import React, {
    useState,
    useRef,
    useMemo,
    useCallback,
} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const PlayerNameStep = ({
    setPlayers,
    goToNextStep,
    saboteur,
}) => {
    const [step, setStep] = useState(1);
    const [showRole, setShowRole] = useState(false);
    const [inputName, setInputName] = useState("");
    const playersList = useRef({});
    let playerNumber = localStorage.getItem("playerNumber");

    if (!playerNumber) {
        playerNumber = 4;
    }

    console.log(playerNumber);
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
            setPlayers(playersList.current);
            goToNextStep();
        }

        playersList.current[step] = {
            playerName: currentName,
            role: step === saboteur ? "saboteur" : "designer",
        };

        console.log(playersList.current);
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
                Il est maintenant temps de choisir un pseudo pour cette partie.
                <br />
                Votre rôle vous sera ensuite révélé. ⚠️ Attention : Faites
                attention de conserver ce rôle secret ! <br />
                Une fois avoir pris connaissance de votre rôle, veuillez cliquer
                sur suivant.
            </span>

            <div className="nameSelection">
                <span>Au tour du joueur {step} !</span>
                <br />
                <TextField
                    id="outlined-basic"
                    label="Pseudo"
                    variant="outlined"
                    value={inputName}
                    onChange={(event) => handlePlayerName(event.target.value)}
                />
                <Button
                    variant="outlined"
                    onClick={handleShowRole}
                    disabled={inputName === ""}
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
                <Button variant="outlined" onClick={goToPreviousPlayer}>
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
