import React from "react";
import { useState } from "react";
import "./GamePage.scss";
import { Droppable } from "../../components/Droppable";
import { Draggable } from "../../components/Draggable";
import { DndContext } from "@dnd-kit/core";

const initialElems = [
    {
        id: "1",
        content: "aaaaah",
        parent: "comp-list",
        position: {
            x: 0,
            y: 0,
        },
    },
];

const GamePage = () => {
    const [drags, setDrags] = useState(initialElems);

    return (
        <div className="gamePage">
            <DndContext onDragEnd={handleDragEnd}>
                <Droppable key="comp-list" id="comp-list" name="list-droppable">
                    {drags.map((dragElem) =>
                        dragElem.parent == "comp-list" ? (
                            <Draggable
                                customStyle={{
                                    position: "static",
                                    left: `0px`,
                                    top: `0px`,
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
        console.log(drags);
    }
};

export default GamePage;
