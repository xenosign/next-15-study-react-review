const names: string[] = ['Tetz', 'LHS'];

export default function Post() {
  const randName: string = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>
      <p>{randName}</p>
      <p>React was awesome!</p>
    </div>
  );
}
