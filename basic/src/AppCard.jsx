export default function AppCard() {
  return (
    <div>
      <Card>
        <p>나랑 저멀리 같이 가자~</p>
      </Card>
      <Card>
        <p>언뽈기븐 걸~</p>
        <p>설명2</p>
      </Card>
      <Card>
        <img src='https://via.placeholder.com/100' alt='' />
        <p>언뽈기븐 걸~</p>
        <p>설명2</p>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'black',
        borderRadius: '20px',
        color: 'white',
        minHeight: '200px',
        maxWidth: '200px',
        margin: '1rem',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}
