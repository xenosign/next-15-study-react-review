import { useState } from 'react';

const names: string[] = ['Tetz', 'LHS'];

export default function Post3() {
  const randomNumber = Math.random();
  const [chosenName] = useState(() => names[randomNumber > 0.5 ? 0 : 1]);

  return (
    <div>
      <p>{chosenName}</p>
      <p>
        This is written by {chosenName} with random number {randomNumber}
      </p>
    </div>
  );
}
