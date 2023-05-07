import { useState } from 'react';
import Products from './basic/components/Products';

export default function AppProduct() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <>
      <div>
        {showProducts && <Products />}
        <button onClick={() => setShowProducts((show) => !show)}>
          {showProducts ? '닫기' : '열기'}
        </button>
      </div>
    </>
  );
}
