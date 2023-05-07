export default function Avatar({ imgSrc, badge }) {
  return (
    <>
      <div className='avatar'>
        <p className='profile-img'>{imgSrc}</p>
        {badge && <span className='badge'>{badge}</span>}
      </div>
    </>
  );
}
