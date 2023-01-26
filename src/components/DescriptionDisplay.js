import React from "react";
import "./PLOs";

export default function DescriptionDisplay(props) {
    return (
        <>
            <div>
                {props.title}
            </div>
            <div>
                {props.description}
            </div>
        </>
    )
}