'use client';

import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-orange-600 mb-2">🧮 Calculator</h1>
          <p className="text-orange-400 text-sm">Orange Theme Edition</p>
        </div>

        {/* Display */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 mb-6 shadow-inner">
          <div className="text-right">
            <div className="text-white text-4xl font-light font-mono overflow-hidden">
              {display}
            </div>
          </div>
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <button
            onClick={clear}
            className="col-span-2 bg-orange-200 hover:bg-orange-300 text-orange-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            Clear
          </button>
          <button
            onClick={() => performOperation('÷')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            ÷
          </button>
          <button
            onClick={() => performOperation('×')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            ×
          </button>

          {/* Row 2 */}
          <button
            onClick={() => inputNumber('7')}
            className="bg-orange-100 hover:bg-orange-200 text-orange-900 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            7
          </button>
          <button
            onClick={() => inputNumber('8')}
            className="bg-orange-100 hover:bg-orange-200 text-orange-900 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            8
          </button>
          <button
            onClick={() => inputNumber('9')}
            className="bg-orange-100 hover:bg-orange-200 text-orange-900 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            9
          </button>
          <button
            onClick={() => performOperation('-')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            -
          </button>

          {/* Row 3 */}
          <button
            onClick={() => inputNumber('4')}
            className="bg-orange-100 hover:bg-orange-200 text-orange-900 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            4
          </button>
          <button
            onClick={() => inputNumber('5')}
            className="bg-orange-100 hover:bg-orange-200 text-orange-900 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            5
          </button>
          <button
            onClick={() => inputNumber('6')}
            className="bg-orange-100 hover:bg-orange-200 text-orange-900 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            6
          </button>
          <button
            onClick={() => performOperation('+')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            +
          </button>

          {/* Row 4 */}
          <button
            onClick={() => inputNumber('1')}
            className="bg-orange-100 hover:bg-orange-200 text-orange-900 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            1
          </button>
          <button
            onClick={() => inputNumber('2')}
            className="bg-orange-100 hover:bg-orange-200 text-orange-900 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            2
          </button>
          <button
            onClick={() => inputNumber('3')}
            className="bg-orange-100 hover:bg-orange-200 text-orange-900 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            3
          </button>
          <button
            onClick={handleEquals}
            className="row-span-2 bg-gradient-to-b from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-lg"
          >
            =
          </button>

          {/* Row 5 */}
          <button
            onClick={() => inputNumber('0')}
            className="col-span-2 bg-orange-100 hover:bg-orange-200 text-orange-900 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            0
          </button>
          <button
            onClick={inputDecimal}
            className="bg-orange-100 hover:bg-orange-200 text-orange-900 font-semibold py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md"
          >
            .
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-orange-400 text-xs">Made with 🧡 and React</p>
        </div>
      </div>
    </div>
  );
}

