function InputBox({
    lebal,
    amount,
}) {
    return (<>
        <div className="container flex bg-white p-3 border rounded-md mb-2 " >
            <div className="from w-1/2 ">
                <label className="text-gray-400" htmlFor="">From</label>
                <input placeholder="0" className=" text-black mt-2  " type="number" name="" id="" />
            </div>
            <div className="currencyType w-1/2  flex flex-col items-end " >
                <p className="block text-gray-400" >Currency Type</p>
                <select className=" text-black w-12 h-6 mt-2" name="" id="">
                    <option value="usd">Usd</option>
                </select>
            </div>
        </div>
    </>)
}
export default InputBox