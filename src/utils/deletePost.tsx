import { redirect } from 'react-router-dom';
import { type ActionFunctionArgs } from 'react-router-dom';

export async function action({ params }: ActionFunctionArgs) {
  const id = params.id;

  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('게시물을 삭제하는데 실패했습니다.');
  }

  return redirect('/');
}
