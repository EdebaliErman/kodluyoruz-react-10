
import './App.css';
import Header from './components/Header';
import { useCallback,  useState } from 'react';
function App() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState("")
 
  const onClickNumber = useCallback(() => {
    setNumber((prevState)=>prevState+1)
  },[])
 
  const onChange = ({ target }) => {
    setText(target.value)
  }
 
  return (
    <div className="App">
      <Header increment={onClickNumber} />
      <h1>{number}</h1>

      <br></br>
      <br></br>
      <input type="text" value={text} onChange={onChange} />
    </div>
  );
}

export default App;
