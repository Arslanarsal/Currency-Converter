import InputBox from "./Components/InputBox";
import useCurrnecyInfo from "./hooks/useCurrenccyInfo";

import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertAmount, setconvertAmount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");

  const currencyinfo = useCurrnecyInfo("usd");
  const Option = Object.keys(currencyinfo);

  const convert = () => {
    setconvertAmount(amount * currencyinfo[to]);
  };
  const Swap = () => {
    setfrom(to);
    setto(from);
    setAmount(convertAmount);
    setconvertAmount(amount);
  };

  return (
    <>
      <div
        className="container w-[100vw] h-[100vh] flex justify-center items-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="formContainer  w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div>
                <InputBox
                  lebal="From"
                  amount={amount}
                  onChangeAmount={(amount) => setAmount(amount)}
                  Options={Option}
                  selectCurrency={from}
                  onCurrencyChange={(currency) => setfrom(currency)}
                />
              </div>

              <div className="relative">
                <button
                  type="button"
                  className=" border border-white rounded-md translate-x-[11rem] translate-y-[-1.2rem] absolute bg-blue-900 text-white px-2 py-1 "
                  onClick={Swap}
                >
                  Swap
                </button>
              </div>

              <div>
                <InputBox
                  lebal="To"
                  amount={convertAmount}
                  onChangeAmount={(amount) => setAmount(amount)}
                  Options={Option}
                  selectCurrency={to}
                  onCurrencyChange={(currency) => setto(currency)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
