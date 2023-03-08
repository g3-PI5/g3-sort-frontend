import React, { useState } from "react";
import "./style.css";


const Table = () => {
    return (
        <div className="Table">
            <table>
                <tr>
                    <td>Nome</td>
                    <td>Idade</td>
                    <td>Profissão</td>
                </tr>
                <tr>
                    <td>Ted</td>
                    <td>22</td>
                    <td>Estudante</td>
                </tr>
                <tr>
                    <td>Ralf</td>
                    <td>26</td>
                    <td>Designer</td>
                </tr>
            </table>
        </div>
    );
}

export default Table;
