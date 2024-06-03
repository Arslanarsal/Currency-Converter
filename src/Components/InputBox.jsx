import { useId } from "react";

function InputBox({
  lebal,
  amount,
  onChangeAmount,
  Options = [],
  amountdisable = false,
  selectCurrency = "usd",
  onCurrencyChange,
}) {
  const amoundId = useId();

  return (
    <>
      <div className="container flex bg-white p-3 border rounded-md mb-2 ">
        <div className="from w-1/2 ">
          <label htmlFor={amoundId} className="text-gray-400">
            {lebal}
          </label>
          <input
            placeholder="0"
            className=" text-black mt-2  "
            type="number"
            name=""
            disabled={amountdisable}
            id={amoundId}
            value={amount}
            onChange={(e) => {
              onChangeAmount && onChangeAmount(Number(e.target.value));
            }}
          />
        </div>
        <div className="currencyType w-1/2  flex flex-col items-end ">
          <p className="block text-gray-400">Currency Type</p>
          <select
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            className=" text-black w-12 h-6 mt-2"
            name=""
            id={amoundId}
          >
            {Options.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
export default InputBox;
