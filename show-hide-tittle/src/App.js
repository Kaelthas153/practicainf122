import React, { useState } from 'react';
import Buttons from './Components/Buttons';
import Title from './Components/Title';
const App = () => {
  const [isTitleVisible, setTitleVisible] = useState(true);

  const toggleTitle = () => {
    setTitleVisible(!isTitleVisible);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Buttons toggleTitle={toggleTitle} />
      <Title isVisible={isTitleVisible} />
    </div>
  );
};

export default App;