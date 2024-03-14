import React, { useEffect} from "react";
import Button from "@mui/material/Button";


const StartGameStep = () => {

    const handleStartGame = () => {
        console.log("prout");
    }
    const themes = ["", "", ""];

    const theme = theme[Math.floor(Math.random() * themes.length)];
    
    Math.floor(Math.random() * tableau.length);
    return (
        <div className="startGame">
            <span className="description">
                La partie peut enfin commencer !! <br />
                Vous pouvez dès maintenant cliquer sur le bouton "Lancer la partie". <br />
                Si vous souhaitez modifier une ou plusieurs informations libre à vous de revenir en arrière. 
            </span>

            <div className="bottomPart">
                <Button
                    variant="contained"
                    onClick={handleStartGame}
                >
                    Lancer la partie
                </Button>
            </div>
        </div>
    );
};

export default StartGameStep;