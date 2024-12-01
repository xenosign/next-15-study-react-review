import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import './index.css';
import RootLayout from './routes/RootLayout';
import Posts, { loader as postsLoader } from './routes/Posts';
import NewPost, { action as newPostAction } from './routes/NewPost';
import PostDetail, { postDetailLoader } from './routes/PostDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>로딩중...</div>}>
        <RootLayout />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>로딩중...</div>}>
            <Posts />
          </Suspense>
        ),
        loader: postsLoader,
        children: [
          {
            path: '/write',
            element: (
              <Suspense fallback={<div>로딩중...</div>}>
                <NewPost />
              </Suspense>
            ),
            action: newPostAction,
          },
          {
            path: '/:id',
            element: (
              <Suspense fallback={<div>로딩중...</div>}>
                <PostDetail />
              </Suspense>
            ),
            loader: postDetailLoader,
          },
        ],
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <Suspense fallback={<div>로딩중...</div>}>
    <RouterProvider router={router} />
  </Suspense>
);
