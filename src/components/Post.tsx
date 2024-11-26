import { useState } from 'react';

const names: string[] = ['Tetz', 'LHS'];

export default function Post() {
  const [chosenName] = useState(() => names[Math.random() > 0.5 ? 0 : 1]);

  return (
    <div>
      <p>{chosenName}</p>
      <p>React was awesome!</p>
    </div>
  );
}
