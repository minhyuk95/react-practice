import Button from './Button';
import style from './App.module.css'
import {useState, useEffect} from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  useState(() => {
    console.log(toDo);
  },[toDos]);
  const onChange = (event) => { setToDo(event.target.value); }
  console.log(toDo);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === ""){
      return;
    }
    setToDos(current => [...current, toDo]);
    setToDo("");
  }
  console.log(toDos);
  return (
    <form onSubmit={onSubmit}>
      <div className="App">
        <input onChange={onChange} value={toDo} type='text' placeholder='Search Here'></input>
        <button>Click</button>
        <hr />
        <ol>
          {toDos.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </div>
    </form>
  );
}

export default App;
