interface PostProps {
  author: string;
  body: string;
}

export default function Post2({ author, body }: PostProps) {
  return (
    <div>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
}
