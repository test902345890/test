import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 5000);


    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div style={ {border: '3px inset #fff', width: '250px', height: '250px', borderRadius: '50%', overflow: 'hidden', lineHeight: '250px', textAlign: 'middle' }} className="App-logo" >
          {time}
        </div>
      </header>
    </div>
  );
}

export default App;
