import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleClick = (event) => {
    console.log(event);
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <form onSubmit={handleSubmit}>
        <input type='text' />
      </form>
      <Profile name='황수연' job='프론트 엔드 개발자' badge='NEW' />
      <Profile name='박천남' job='백엔드 개발자' />
      <Profile name='정연정' job='회사원' />
    </>
  );
}

export default AppProfile;
