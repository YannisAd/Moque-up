import React from "react";
import { useDraggable } from "@dnd-kit/core";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

export function Draggable(props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
    });
    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${
                  transform.y + document.getElementById("comp-list").scrollTop
              }px, 0)`,
          }
        : undefined;

    return (
        <div
            className="draggable-item"
            ref={setNodeRef}
            id={props.id}
            style={{ ...style, ...props.customStyle }}
        >
            {props.children}
            <button {...listeners} {...attributes} className="handle">
                <MoreVertOutlinedIcon style={{ fill: "#afafaf" }} />
            </button>
        </div>
    );
}
