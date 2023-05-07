import { useState } from 'react';

export default function Counter({ total, onClick }) {
  const [number, setCount] = useState(0);
  return (
    <div className='counter-box'>
      <span>
        {number} / {total}
      </span>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          onClick();
        }}
      >
        Add +
      </button>
    </div>
  );
}
