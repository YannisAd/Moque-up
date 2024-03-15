import React, { useRef, useCallback, useState, useEffect } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import cloneDeep from "lodash.clonedeep";
import { Droppable } from "../../components/Droppable";
import { Draggable } from "../../components/Draggable";
import InitialElems from "./ElementList";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
import Button from "@mui/material/Button";

import "./GamePage.scss";

const GamePage = () => {
    const [zIndex, setZIndex] = useState(101);
    const [activeId, setActiveId] = useState(null);
    const [drags, setDrags] = useState(InitialElems);
    const { setPlayers, players, playerNumber } = useAppContext();
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [currentTurn, setCurrentTurn] = useState(1);
    const navigate = useNavigate();
    const boardRef = useRef();

    useEffect(() => {
        for (let i = 0; i < boardRef.current.children[0].children.length; i++) {
            let elem = boardRef.current.children[0].children[i];

            new ResizeObserver(() => {
                const dragElem = drags.find((x) => x.id === elem.id);
                if (dragElem.content.props.style) {
                    //
                }
            }).observe(elem);
        }
    }, [drags]);

    useEffect(() => {
        if (players.length === 0) {
            const storedPlayers = localStorage.getItem("players");
            if (storedPlayers) {
                setPlayers(JSON.parse(storedPlayers));
            } else {
                localStorage.removeItem("playerNumber");
                localStorage.removeItem("startingGameStep");
                localStorage.removeItem("theme");
                navigate("/");
            }
        }
    }, []);

    const handleNextPlayer = useCallback(() => {
        if (currentTurn === playerNumber * 4) {
            navigate("/score");
            return;
        }

        if (currentPlayer === playerNumber) {
            setCurrentPlayer(1)
        } else {
            setCurrentPlayer((prev) => prev + 1);
        }

        setCurrentTurn((prev) => prev + 1);
    }, [currentTurn, playerNumber]);

    return (
        <div className="gamePage">
            <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
                <Droppable key="comp-list" id="comp-list" name="list-droppable">
                    {drags.map((dragElem) =>
                        dragElem.parent === "comp-list" &&
                        dragElem.id !== activeId ? (
                            <Draggable
                                customStyle={{
                                    position: "static",
                                    left: `0px`,
                                    top: `0px`,
                                    zIndex: dragElem.zIndex,
                                }}
                                key={dragElem.id}
                                id={dragElem.id}
                            >
                                {dragElem.content}
                            </Draggable>
                        ) : (
                            <></>
                        )
                    )}
                </Droppable>
                <div ref={boardRef} className="board-container">
                    <Droppable key="board" id="board" name="board-droppable">
                        {drags.map((dragElem) =>
                            dragElem.parent === "board" &&
                            dragElem.id !== activeId ? (
                                <Draggable
                                    customStyle={{
                                        position: "absolute",
                                        left: `${dragElem.position.x}px`,
                                        top: `${dragElem.position.y}px`,
                                        zIndex: dragElem.zIndex,
                                    }}
                                    key={dragElem.id}
                                    id={dragElem.id}
                                    content={dragElem.content}
                                >
                                    {dragElem.content}
                                </Draggable>
                            ) : (
                                <></>
                            )
                        )}
                    </Droppable>
                </div>

                {activeId ? (
                    <DragOverlay>
                        {drags.find((x) => x.id === activeId).content}
                    </DragOverlay>
                ) : (
                    <></>
                )}
            </DndContext>
            <div className="playerZone">
                <span>
                    Tour du joueur : {players[currentPlayer].playerName}
                </span>
                <Button
                    variant="outlined"
                    onClick={handleNextPlayer}
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
                    {currentTurn === playerNumber * 3
                        ? "Terminer la partie"
                        : "Joueur suivant"}
                </Button>
            </div>
        </div>
    );

    function handleDragStart(event) {
        const dragElem = drags.find((x) => x.id === event.active.id);
        const currPos = document
            .getElementById(dragElem.id)
            .getBoundingClientRect();

        dragElem.position.x = currPos.left;
        dragElem.position.y = currPos.top;

        setActiveId(dragElem.id);
        setZIndex((prev) => prev + 1);

        dragElem.zIndex = zIndex;
    }

    function handleDragEnd(event) {
        setActiveId(null);
        const dragElem = drags.find((x) => x.id === event.active.id);

        const _drags = drags.map((x) => {
            if (x.id === dragElem.id) return dragElem;
            return x;
        });

        if (dragElem.parent === "comp-list" && event.over.id === "board") {
            var clone = cloneDeep(dragElem);

            clone.position.x += event.delta.x;
            clone.position.y += event.delta.y;

            clone.parent = event.over.id;
            clone.id = Date.now().toString(36);

            _drags.push(clone);
        } else if (
            dragElem.parent === "board" &&
            event.over.id === "comp-list"
        ) {
            _drags.splice(_drags.indexOf(dragElem), 1);
        } else {
            dragElem.position.x += event.delta.x;
            dragElem.position.y += event.delta.y;
        }

        setDrags(_drags);
    }
};

export default GamePage;
