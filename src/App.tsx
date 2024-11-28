import { useState } from 'react';
import MainHeader from './components/MainHeader';
import PostList from './components/PostList';
// import PostListSeparate from './components/PostListSeparate';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const openModalHandler = () => {
    setModalIsVisible(true);
  };

  const closeModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <MainHeader onCreatePost={openModalHandler} />
      <main>
        <div>
          <PostList
            isModalVisible={modalIsVisible}
            closeModalHandler={closeModalHandler}
          />
        </div>
        {/* <div>
        <PostListSeparate />
      </div> */}
      </main>
    </>
  );
}

export default App;
