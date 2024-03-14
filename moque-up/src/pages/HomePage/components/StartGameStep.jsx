import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";

const StartGameStep = () => {
    const navigate = useNavigate();
    const {setTheme, players} = useAppContext();

    const handleStartGame = () => {
        localStorage.setItem("theme", theme);
        setTheme(theme)
        navigate("/game");
    };

    useEffect(() => {
        let stringyfiedPlayers = JSON.stringify(players);
        localStorage.setItem("players", stringyfiedPlayers);
    }, [])
    

    const themes = [
        "Créer la page d'accueuil d'un portfolio de manière ergonomique.",
        "Créer la page d'un article d'un journal en ligne de manière ergonomique.",
        "Créer une page de contact de manière ergonomique.",
        "Créer une page de profil utilisateur de manière ergonomique.",
    ];

    const theme = themes[Math.floor(Math.random() * themes.length)];

    return (
        <div className="startGame">
            <span className="description">
                <h2>La partie peut enfin commencer !!</h2> <br />
                Vous pouvez dès maintenant cliquer sur le bouton "Lancer la
                partie". <br />
                Si vous souhaitez modifier une ou plusieurs informations libre à
                vous de revenir en arrière.
            </span>

            <span className="theme">
                <h2>
                    Voici le theme sur lequel vous allez devoir baser votre
                    interface :
                </h2>
                <h2>{theme}</h2>
            </span>

            <div className="bottomPart">
                <Button variant="contained" onClick={handleStartGame}>
                    Lancer la partie
                </Button>
            </div>
        </div>
    );
};

export default StartGameStep;
