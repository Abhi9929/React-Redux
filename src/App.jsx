import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './app/slices/counter';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  console.log(count);

  return (
    <div>
      <div>
        <h1>Count is: {count}</h1>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
