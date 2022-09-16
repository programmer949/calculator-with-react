import { useState } from "react";
const Calculator = () => {
    const [calc, setCalc] = useState("");
    const [displayText, setDisplayText] = useState("");
    const clear = () => {
        setDisplayText("");
        setCalc("");
    };
    const slice = () => {
        setDisplayText(displayText.slice(0, -1));
        setCalc(calc.slice(0, -1));
    };
    const evaluate = () => {
        try {
            setDisplayText(eval(calc));
            setCalc(eval(calc));
        } catch {
            console.log(calc, displayText);
            setDisplayText("Error");
            setCalc("");
            setTimeout(() => setDisplayText(""), 500);
        }
    };
    const body = document.body;
    if (body.style.font !== "Poppins") setTimeout(() => console.clear(), 1000)
    body.onkeydown = (e) => {
        if (e.key === "Delete") clear();
        else if (e.key === "Backspace") slice();
        else if (e.key === "+") {
            setDisplayText(displayText + e.key);
            setCalc(calc + e.key);
        } else if (Number(e.key)) {
            setDisplayText(displayText + e.key);
            setCalc(calc + e.key);
        } else if (e.key === "-") {
            setDisplayText(displayText + e.key);
            setCalc(calc + e.key);
        } else if (e.key === "*") {
            setDisplayText(displayText + "×");
            setCalc(calc + e.key);
        } else if (e.key === "/") {
            setDisplayText(displayText + "÷");
            setCalc(calc + e.key);
        } else if (e.key === ".") {
            setDisplayText(displayText + e.key);
            setCalc(calc + e.key);
        } else if (e.key === "0") {
            setDisplayText(displayText + e.key);
            setCalc(calc + e.key);
        } else if (e.key === "%") {
            setDisplayText(displayText + e.key);
            setCalc(calc + e.key);
        } else if (e.key === "Enter") {
            evaluate();
        }
    };
    return (
        <main>
            <div className="display">{displayText ? displayText : "0"}</div>
            <div className="buttons">
                <button onClick={clear} className="big bold">
                    AC
                </button>
                <button onClick={slice} className="bold">
                    C
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "+");
                        setCalc(calc + "+");
                    }}
                >
                    +
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "1");
                        setCalc(calc + "1");
                    }}
                >
                    1
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "2");
                        setCalc(calc + "2");
                    }}
                >
                    2
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "3");
                        setCalc(calc + "3");
                    }}
                >
                    3
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "-");
                        setCalc(calc + "-");
                    }}
                >
                    -
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "4");
                        setCalc(calc + "4");
                    }}
                >
                    4
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "5");
                        setCalc(calc + "5");
                    }}
                >
                    5
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "6");
                        setCalc(calc + "6");
                    }}
                >
                    6
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "×");
                        setCalc(calc + "*");
                    }}
                >
                    ×
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "7");
                        setCalc(calc + "7");
                    }}
                >
                    7
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "8");
                        setCalc(calc + "8");
                    }}
                >
                    8
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "9");
                        setCalc(calc + "9");
                    }}
                >
                    9
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "÷");
                        setCalc(calc + "/");
                    }}
                >
                    ÷
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "•");
                        setCalc(calc + ".");
                    }}
                >
                    •
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "0");
                        setCalc(calc + "0");
                    }}
                >
                    0
                </button>
                <button
                    onClick={() => {
                        setDisplayText(displayText + "%");
                        setCalc(calc + "%");
                    }}
                >
                    %
                </button>
                <button onClick={evaluate}>=</button>
            </div>
        </main>
    );
};

export default Calculator;
