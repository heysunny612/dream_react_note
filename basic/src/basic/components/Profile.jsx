import Avatar from './Avatar';

export default function Profile({ name, job, badge }) {
  return (
    <div className='profile'>
      <Avatar imgSrc='이미지 SRC를 넣어주세요' badge={badge} />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
