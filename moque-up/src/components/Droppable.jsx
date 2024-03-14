import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
    });
    const style = {
        backgroundColor:
            isOver && props.id == "comp-list" ? "#dcdcdc" : undefined,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={props.name}
            id={props.id}
        >
            {props.children}
        </div>
    );
}
