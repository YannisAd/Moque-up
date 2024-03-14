import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
    const [players, setPlayers] = useState([]); 
    const [score, setScore] = useState(0);
    const [theme, setTheme] = useState(null);
    const [saboteur, setSaboteur] = useState(null);
    const [playerNumber, setPlayerNumber] = useState(null);

    const AppContextValues = {
        players,
        score,
        theme,
        saboteur,
        playerNumber,
        setPlayers,
        setScore,
        setTheme,
        setSaboteur,
        setPlayerNumber
    };
    return (
        <AppContext.Provider value={AppContextValues}>
            {children}
        </AppContext.Provider>
    );
};
