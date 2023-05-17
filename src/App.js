import React, {useState, useEffect} from 'react';
import './App.css';
import Image from '../src/components/Image/Image';
import Text from '../src/components/Text/Text';
import Footer from '../src/components/Footer/Footer';
import data from './data.json';


function App() {
  
  const [selection, setSelection] = useState(0);
  
  const handleClickDown = () => {
    setSelection(prev => {
      if (prev === 0) {
        return data.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  const handleClickUp = () => {
    setSelection(prev => {
      if (prev === data.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const handleKeyPress = e => {
    if(e.keyCode === 37) {
     handleClickDown()
    }
    if(e.keyCode === 39 || e.keyCode === 13) {
      handleClickUp()
    }
   }

   useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    
    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
   }, []);

  return (
    <div>      
      <main>
        <Image
        image={data[selection].image}
        handleClickUp={handleClickUp}
        handleClickDown={handleClickDown}
        handleKeyPress={handleKeyPress}
        />
        <Text 
        name={data[selection].name}
        job={data[selection].profession}
        quote={data[selection].quote}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
