import { useState } from 'react';
import styles from './PostList.module.css';
import Post from './Post';
import NewPost from './NewPost';

export type ChangeUserInputHandlerType = (
  event: React.ChangeEvent<HTMLInputElement>,
  field: 'author' | 'body'
) => void;

type NewPostProps = { author: string; body: string };

export default function PostList() {
  const [userInput, setUserInput] = useState<NewPostProps>({
    author: '',
    body: '',
  });

  const changeUserInputHandler: ChangeUserInputHandlerType = (event, field) => {
    // #1. 이슈 발생 코드

    // setUserInput((prev) => ({
    //   ...prev,
    //   [field]: event.currentTarget.value,
    // }));

    // ** 이슈 발생 원인
    // 지연된 상태 업데이트를 사용한 경우, event.currentTarget.value 값이 두번째 입력부터
    // 제대로 반영되지 않는 이슈 발생
    // 리액트의 경우 이벤트 객체를 풀링하고 재사용하는데 이로 인해 콜백을 사용하여 비동기적으로 접근 시
    // 업데이트 큐에서 이벤트 객체가 초기화 되어 빈 상태에서 값을 읽으려는 시도가 발생하는 것이 원인

    // ** 이슈 해결 코드
    // 이벤트 객체를 직접 사용하여 값을 읽는 방식으로 수정하여 이벤트 객체가 초기화 되는 것을 방지

    setUserInput({
      ...userInput,
      [field]: event.target.value,
    });
  };

  return (
    <>
      <h1 className="text-center">PostList</h1>
      <NewPost onUserInputChange={changeUserInputHandler} />
      <ul className={styles.posts}>
        <Post author={userInput.author} body={userInput.body} />
      </ul>
    </>
  );
}
