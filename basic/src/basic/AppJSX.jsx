import './App.css';

function AppJSX() {
  const name = '엘리';
  const list = ['우유', '딸기', '바나나', '포도', '멜론'];
  return (
    <div>
      <h1 className='orange'>{`Hello ${name}`}</h1>
      <h2>hello</h2>
      <ul>
        {list.map((list) => (
          <li>{list}</li>
        ))}
      </ul>
    </div>
  );
}

export default AppJSX;
