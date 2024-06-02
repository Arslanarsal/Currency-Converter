import InputBox from "./Components/InputBox";

function App() {

  return (
    <>
      <div className="container w-[100vw] h-[100vh] flex justify-center items-center"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, }}

      >
        <div className="formContainer  w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30" >
            <form onSubmit={(e) => {
              e.preventDefault();
            }} >
              <div>
                <InputBox />
              </div>

              <div className="relative" >
                <button type="button" className=" border border-white rounded-md translate-x-[11rem] translate-y-[-1.2rem] absolute bg-blue-900 text-white px-2 py-1 " >Swap</button>
              </div>
              <div>
                <InputBox />
              </div>

            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
