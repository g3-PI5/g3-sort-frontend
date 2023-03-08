import React, { useState } from "react";
import "./style.css";


const Table = (selection, radix, bubble, binary, linear) => {
    return (
        <div className="Table">
            <div className="selectionValues">
                <label>Selection Times</label>
                {(selection.selection)?.map((time, i) => {
                    return <div className="values"><b>{i + 1}</b> {time} ms</div>
                })}
            </div>
            <div className="radixValues">
                <label>Radix Times</label>
                {(selection.radix)?.map((time, i) => {
                    return <div className="values"><b>{i + 1}</b> {time} ms</div>
                })}
            </div>
            <div className="bubbleValues">
                <label>Bubble Times</label>
                {(selection.bubble)?.map((time, i) => {
                    return <div className="values"><b>{i + 1}</b> {time} ms</div>
                })}
            </div>
            <div className="binaryValues">
                <label>Binary Times</label>
                {(selection.binary)?.map((time, i) => {
                    return <div className="values" ><b>{i + 1}</b> {time} ms </div>
                })}
            </div>
            <div className="linearValues">
                <label>Linear Times</label>
                {(selection.linear)?.map((time, i) => {
                    return <div className="values"><b>{i + 1}</b> {time} ms</div>
                })}
            </div>

        </div >
    );
}

export default Table;
