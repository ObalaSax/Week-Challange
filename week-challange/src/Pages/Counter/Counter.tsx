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
    <div>
      <div>
        <h1>{myCountSelector}</h1>
      </div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
