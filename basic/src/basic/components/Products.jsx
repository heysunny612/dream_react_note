import { useState, useEffect } from 'react';

export default function Products() {
  const [Products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((checked) => !checked);
  useEffect(() => {
    fetch(`data/${checked ? 'sale_products.json' : 'products.json'}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
    return () => {
      console.log('청소해');
    };
  }, [checked]);

  return (
    <>
      <input
        type='checkbox'
        id='checkbox'
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show only hot sale</label>
      <ul>
        {Products.map((product) => (
          <li>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
