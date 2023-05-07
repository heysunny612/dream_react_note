import Counter from './components/Counter';
import { useState } from 'react';

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <>
      <div className='total-count'>
        Total Count :{count} {count > 10 ? '⭐' : '❤️'}
      </div>
      <div className='counter'>
        <Counter total={count} onClick={handleClick} />
        <Counter total={count} onClick={handleClick} />
      </div>
    </>
  );
}
