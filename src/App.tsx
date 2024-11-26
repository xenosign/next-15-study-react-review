import Post from './components/Post';
import Post2 from './components/Post2';
import Post3 from './components/Post3';

function App() {
  return (
    <main>
      <h1>Hello, React Review</h1>
      <Post author="Tetz" body="React was awesome!" />
      <Post2 author="LHS" body="Next is awesome!" />
      <Post3 />
    </main>
  );
}

export default App;
