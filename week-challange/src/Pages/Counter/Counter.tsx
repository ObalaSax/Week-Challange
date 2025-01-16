import { useDispatch, useSelector } from "react-redux";
import {
  decrementNumber,
  incrementNumber,
} from "../../Features/Slices/CounterSlice";
import { myRootState } from "../../Features/Store/MainStore";

function Counter() {
  const myCountSelector = useSelector(
    (state: myRootState) => state.counter.myNumber,
  );
  const creaseDispatch = useDispatch();
  //Buttons Functions
  const handleIncrement = () => {
    creaseDispatch(incrementNumber());
  };
  const handleDecrement = () => {
    creaseDispatch(decrementNumber());
  };
  return (
    <div className="bg-gradient-to-b from-red-800 to-blue-800 w-full h-lvh content-center justify-items-center">
      <div className="bg-white w-2/5 h-1/4 items-center justify-items-center rounded-lg content-center">
        <div>
          <h1 className="font-bold text-9xl">{myCountSelector}</h1>
        </div>
        <div>
          <button
            className="p-3 bg-blue-600 text-white rounded-lg m-2 mt-9"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className="p-3 bg-blue-600 text-white rounded-lg m-2 mt-10"
            onClick={handleDecrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
