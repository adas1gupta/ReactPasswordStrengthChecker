import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";

function App () {
    const [password, setPassword] = useState("")
    const [strength, setStrength] = useState("")

    const evaluateStrength = (password) => {
        setPassword(password)
        console.log(password.length)
        if (password.length >= 8 && password.match(/[A-Za-z]/) && password.match(/[0-9]/)) {
            setStrength("Strong"); // Check for "Strong" first
        } else if (password.match(/[A-Za-z]/) && password.match(/[0-9]/)) {
            setStrength("Medium");
        } else if (password.length < 6) {
            setStrength("Weak");
        }
    };

    return (
        <div>
            <label htmlFor="password">{"Enter Password "}</label>
            <input
                id="password"
                type="password"
                value={password} //always need this to bind password state to input here
                onChange={(e) => evaluateStrength(e.target.value)}
            >
            </input>
            <button onClick={() => evaluateStrength(password)}>Submit</button>
            <p>Password Strength: {strength}</p>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render (
    <React.StrictMode>
        <App />
    </React.StrictMode>
)