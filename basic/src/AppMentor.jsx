import { useReducer } from 'react';
import personReducer from './reducer/person-reducer';
export default function AppMentor() {
  //const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  //멘토 이름변경
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요!?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: 'updated', prev, current });
  };

  //타이틀변경
  const handleChange = () => {
    const prev = prompt(`어떤 타이틀 바꾸고 싶은가요!?`);
    const current = prompt(`타이틀을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: 'changed', prev, current });
  };

  //멘토추가
  const handleAdd = () => {
    const name = prompt(`추가하는 사람의 이름이 뭔가요?`);
    const title = prompt(`title은 뭔가요?`);
    dispatch({ type: 'added', name, title });
  };

  //멘토삭제
  const handleDelete = () => {
    const name = prompt('어떤 멘토를 삭제할까요?');
    dispatch({ type: 'deleted', name });
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {person.name}의 멘토는 {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleChange}>멘토 타이틀 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: '수연',
  title: '개발자',
  mentors: [
    {
      name: '엘리',
      title: '드림코딩강사',
    },
    {
      name: '제임스',
      title: '제로베이스강사',
    },
  ],
};
