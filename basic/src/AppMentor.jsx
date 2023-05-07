import { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
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
  });
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
      <button
        onClick={() => {
          const prevName = prompt(`누구의 이름을 바꾸고 싶은가요!?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prevName) {
                return { ...mentor, name: current };
              }
              return mentor;
            }),
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your title?`);
          setPerson((prev) => ({
            ...prev,
            mentors: { ...prev.mentors, title },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
