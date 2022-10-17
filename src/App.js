import { useState } from "react";

const App = () => {
  let [input, setInput] = useState("");
  let [output, setOuput] = useState("");

  // handling the input value
  const inputValue = (value) => {
    if (value === "c") {
      setInput(input.slice(0, -1));
      console.log(input);
      setOuput(eval(input));
      return;
    }

    let myvalue = input + value;

    // handling the duplicate symbol entry to prohibit mis calculation
    if (input.length != 0) {
      let lastElement = input[input.length - 1];
      if (
        (lastElement === "%" &&
          (value === "%" ||
            value === "/" ||
            value === "*" ||
            value === "-" ||
            value === "+" ||
            value === ".")) ||
        (lastElement === "/" &&
          (value === "%" ||
            value === "/" ||
            value === "*" ||
            value === "-" ||
            value === "+" ||
            value === ".")) ||
        (lastElement === "*" &&
          (value === "%" ||
            value === "/" ||
            value === "*" ||
            value === "-" ||
            value === "+" ||
            value === ".")) ||
        (lastElement === "-" &&
          (value === "%" ||
            value === "/" ||
            value === "*" ||
            value === "-" ||
            value === "+" ||
            value === ".")) ||
        (lastElement === "+" &&
          (value === "%" ||
            value === "/" ||
            value === "*" ||
            value === "-" ||
            value === "+" ||
            value === ".")) ||
        (lastElement === "=" &&
          (value === "%" ||
            value === "/" ||
            value === "*" ||
            value === "-" ||
            value === "+" ||
            value === ".")) ||
        (lastElement === "." &&
          (value === "%" ||
            value === "/" ||
            value === "*" ||
            value === "-" ||
            value === "+" ||
            value === "."))
      ) {
        return;
      }
    }

    // removing the extra spaces from both end, if exist
    myvalue.trim();

    // if button clicked was ac then input will be zero
    if (value === "ac") {
      setInput("");
      setOuput("");
      return;
    }

    

    // updating last letter value
    let lastLetter = myvalue[myvalue.length - 1];
    setInput(myvalue);
    if (
      lastLetter !== "c" &&
      lastLetter !== "%" &&
      lastLetter !== "/" &&
      lastLetter !== "*" &&
      lastLetter !== "-" &&
      lastLetter !== "+" &&
      lastLetter !== "="
    ) {
      outputValue(myvalue);
    }
  };

  // function to calculate the output ans
  const outputValue = (value) => {
    let ans = eval(value);
    setOuput(ans);
    return;
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        {/* creatin the calculator ui */}
        <div className="border border-black p-4 flex flex-col gap-4">
          <h1>Calculator App</h1>

          {/* input and output box area */}
          <div className="flex flex-col gap-4">
            {/* input tag for taking input*/}
            <input
              readOnly
              value={input}
              typeof="text"
              placeholder="0"
              className="border border-black"
            ></input>
            {/* input box for displaying the output */}
            <input
              readOnly
              value={output}
              typeof="text"
              placeholder="0"
              className="border border-black"
            ></input>
          </div>

          {/* creating the buttons here */}
          <table>
            <tbody className="flex flex-col items-center justify-center w-full gap-2">
              <tr className="flex items-center justify-around w-full">
                <td onClick={() => inputValue("ac")}>AC</td>
                <td onClick={() => inputValue("c")}>C</td>
                <td onClick={() => inputValue("%")}>%</td>
                <td onClick={() => inputValue("/")}>/</td>
              </tr>
              <tr className="flex items-center justify-around w-full">
                <td onClick={() => inputValue("7")}>7</td>
                <td onClick={() => inputValue("8")}>8</td>
                <td onClick={() => inputValue("9")}>9</td>
                <td onClick={() => inputValue("*")}>*</td>
              </tr>
              <tr className="flex items-center justify-around w-full">
                <td onClick={() => inputValue("4")}>4</td>
                <td onClick={() => inputValue("5")}>5</td>
                <td onClick={() => inputValue("6")}>6</td>
                <td onClick={() => inputValue("-")}>-</td>
              </tr>
              <tr className="flex items-center justify-around w-full">
                <td onClick={() => inputValue("1")}>1</td>
                <td onClick={() => inputValue("2")}>2</td>
                <td onClick={() => inputValue("3")}>3</td>
                <td onClick={() => inputValue("+")}>+</td>
              </tr>
              <tr className="flex items-center justify-around w-full">
                <td onClick={() => inputValue("00")}>00</td>
                <td onClick={() => inputValue("0")}>0</td>
                <td onClick={() => inputValue(".")}>.</td>
                <td onClick={() => inputValue("=")}>=</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
