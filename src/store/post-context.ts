import { createContext } from 'react';

const PostContext = createContext({
  posts: [],
  totalPosts: 0,
  lastFetch: null,
});

export default PostContext;
