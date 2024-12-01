import axios from 'axios';
import { Outlet } from 'react-router-dom';
import PostList from '../components/PostList';

export default function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export const loader = async () => {
  const response = await axios.get('http://localhost:8080/posts');
  const resData = response.data;
  return resData;
};
