import React from "react";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "../../components/Droppable";
import { Draggable } from "../../components/Draggable";
import InitialElems from "./ElementList";

import "./GamePage.scss";

const GamePage = () => {
    const [zIndex, setZIndex] = useState(10);
    const [drags, setDrags] = useState(InitialElems);

    return (
        <div className="gamePage">
            <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
                <Droppable key="comp-list" id="comp-list" name="list-droppable">
                    <h2>Liste d'éléments</h2>
                    {drags.map((dragElem) =>
                        dragElem.parent == "comp-list" ? (
                            <Draggable
                                customStyle={{
                                    position: "relative",
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
                <Droppable key="board" id="board" name="board-droppable">
                    {drags.map((dragElem) =>
                        dragElem.parent == "board" ? (
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
            </DndContext>
        </div>
    );

    function handleDragStart(event) {
        const dragElem = drags.find((x) => x.id === event.active.id);
        const currPos = document
            .getElementById(dragElem.id)
            .getBoundingClientRect();
        console.log(currPos);
        dragElem.position.x = currPos.left;
        dragElem.position.y = currPos.top;

        setZIndex((prev) => prev + 1);
        dragElem.zIndex = zIndex;
    }

    function handleDragEnd(event) {
        const dragElem = drags.find((x) => x.id === event.active.id);

        dragElem.position.x += event.delta.x;
        dragElem.position.y += event.delta.y;
        dragElem.parent = event.over.id;

        const _drags = drags.map((x) => {
            if (x.id === dragElem.id) return dragElem;
            return x;
        });
        setDrags(_drags);
    }
};

export default GamePage;
