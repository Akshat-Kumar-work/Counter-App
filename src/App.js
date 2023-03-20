
import { useState } from 'react';
import './App.css';

function App() {

  const [count,updateCount] = useState(0);

  let countdec = count-1;
  function decreaseHandler(){
     updateCount(countdec);
  }

let countinc =count+1;
function increaseHandler () {
  updateCount(countinc);
}

function resetHandler(event){

  updateCount(0)
}

  return (
   //container
   <div className=" w-[100vw] h-[100vh] flex justify-center  items-center  flex-col bg-[#344151] gap-10">

    <div className=' text-[#0398d4] font-medium text-2xl'
    >Increment and Decrement</div>


    <div className=' flex bg-slate-50 font-medium gap-12 py-3 rounder-sm text-[24px] text-[#344151]'>

      <button onClick={decreaseHandler} className="border-r-2 text-center w-20 text-5xl">
        -
      </button>

      <div className=' font-bold text-center w-20 text-5xl '>
        {count}
      </div>

      <button onClick={increaseHandler} className=" border-l-2 text-center w-20 text-5xl">
        +
      </button>

    </div>


    <button onClick={resetHandler} className =  " text-[#0398d4] font-medium text-2xl">
      reset
    </button>

   </div>
    
  );
}

export default App;
