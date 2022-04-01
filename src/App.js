import Card from "./components/Card";
import './App.css';
import Data from "./components/quotes.json";
import { useState } from 'react'


function App() {
  console.log(Data.quotes)
  const rand = Math.floor(Math.random() * 102)
  const quote = Data.quotes[rand].quote
  const author = Data.quotes[rand].author
  
  let [ count, setCount ] = useState(rand)


    const rload = () => {
      count = Math.floor(Math.random() * 102)
        return setCount(count)
    }

  return (
    <div className="App">
      <header className="App-header">
        <Card phrase={quote} aut={author} reload={rload}/>
      </header>
    </div>
  );
}

export default App;
