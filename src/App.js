import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
// import Link from 'react-router-dom'

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>

      <div className="App">
        <Title />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
      <footer style={{textAlign: 'center'}}>This site is made by <a style={{ textDecoration: 'none', color: 'green' }} href='http://www.ahnafyaes.tech/'>@Ahnafya</a></footer>
    </>
  );
}

export default App;
