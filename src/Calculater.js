import { useState } from "react";
import "./App.css";

export const Calculater = () => {
  const [isPlus, setIsPlus] = useState(false);
  const [isMinus, setIsMinus] = useState(false);
  const [isTimes, setIsTimes] = useState(false);
  const [isDivide, setIsDivide] = useState(false);
  const [leftSideVal, setLeftSideVal] = useState(0);
  const [calcNum, setCalcNum] = useState("0"); // calcNumを文字列にする

  const onClick0 = () => setCalcNum(calcNum === "0" ? "0" : calcNum + "0");
  const onClick1 = () => setCalcNum(calcNum === "0" ? "1" : calcNum + "1");
  const onClick2 = () => setCalcNum(calcNum === "0" ? "2" : calcNum + "2");
  const onClick3 = () => setCalcNum(calcNum === "0" ? "3" : calcNum + "3");
  const onClick4 = () => setCalcNum(calcNum === "0" ? "4" : calcNum + "4");
  const onClick5 = () => setCalcNum(calcNum === "0" ? "5" : calcNum + "5");
  const onClick6 = () => setCalcNum(calcNum === "0" ? "6" : calcNum + "6");
  const onClick7 = () => setCalcNum(calcNum === "0" ? "7" : calcNum + "7");
  const onClick8 = () => setCalcNum(calcNum === "0" ? "8" : calcNum + "8");
  const onClick9 = () => setCalcNum(calcNum === "0" ? "9" : calcNum + "9");

  const AC = () => setCalcNum("0");

  const plus = () => {
    if (calcNum !== "0") {
      setLeftSideVal(parseInt(calcNum));
    }
    setIsPlus(true);
    setCalcNum("0");
  };

  const minus = () => {
    if (calcNum !== "0") {
      setLeftSideVal(parseInt(calcNum));
    }
    setIsMinus(true);
    setCalcNum("0");
  };

  const times = () => {
    if (calcNum !== "0") {
      setLeftSideVal(parseInt(calcNum));
    }
    setIsTimes(true);
    setCalcNum("0");
  };

  const divide = () => {
    if (calcNum !== "0") {
      setLeftSideVal(parseInt(calcNum));
    }
    setIsDivide(true);
    setCalcNum("0");
  };

  const calculate = () => {
    let rightValue = parseInt(calcNum);

    if (isPlus) {
      const result = leftSideVal + rightValue;
      setCalcNum(result.toString());
      setCalcNum(result);
      console.log("leftSideVal:", leftSideVal);
      console.log("rightSideVal:", rightValue);
      console.log("result:", result);
      setIsPlus(false); // 計算完了後、フラグをリセット
    }

    if (isMinus) {
      const result = leftSideVal - rightValue;
      setCalcNum(result.toString());
      setCalcNum(result);
      console.log("leftSideVal:", leftSideVal);
      console.log("rightSideVal:", rightValue);
      console.log("result:", result);
      setIsMinus(false); // 計算完了後、フラグをリセット
    }

    if (isTimes) {
      const result = leftSideVal * rightValue;
      setCalcNum(result.toString());
      setCalcNum(result);
      console.log("leftSideVal:", leftSideVal);
      console.log("rightSideVal:", rightValue);
      console.log("result:", result);
      setIsTimes(false); // 計算完了後、フラグをリセット
    }

    if (isDivide) {
      const result = leftSideVal / rightValue;
      setCalcNum(result.toString());
      setCalcNum(result);
      console.log("leftSideVal:", leftSideVal);
      console.log("rightSideVal:", rightValue);
      console.log("result:", result);
      setIsDivide(false); // 計算完了後、フラグをリセット
    }
  };

  return (
    <>
      <h1 className="text-center text-xl">Calculater</h1>
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <p className="border px-20 py-3 text-xl">{calcNum}</p>
        <div className="w-3/5 p-5 flex items-center justify-center">
          <div className="flex flex-wrap w-full h-96 border">
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={onClick7}
            >
              7
            </button>
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={onClick8}
            >
              8
            </button>
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={onClick9}
            >
              9
            </button>
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={divide}
            >
              ÷
            </button>
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={onClick4}
            >
              4
            </button>
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={onClick5}
            >
              5
            </button>
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={onClick6}
            >
              6
            </button>
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={times}
            >
              ×
            </button>
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={onClick1}
            >
              1
            </button>
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={onClick2}
            >
              2
            </button>
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={onClick3}
            >
              3
            </button>
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={minus}
            >
              -
            </button>
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={onClick0}
            >
              0
            </button>
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={AC}
            >
              AC
            </button>
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={calculate}
            >
              =
            </button>
            <button
              className="w-3/12 border border-gray-300 hover:bg-gray-300 duration-75 ease-in-out"
              onClick={plus}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
