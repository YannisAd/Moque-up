import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
    const [players, setPlayers] = useState([]); // {username:"...", role: "..."}
    const [score, setScore] = useState(0);

    // const modifyPlayers = (newPlayers) => {
    //     setPlayers(newPlayers);
    // }

    const AppContextValues = {
        players,
        score,
        setPlayers,
        setScore,
    };
    return (
        <AppContext.Provider value={AppContextValues}>
            {children}
        </AppContext.Provider>
    );
};
