
import './app.css'
import { useEffect , useState} from 'react'
import { Card } from "./components/UI/card";
import { Todoslist } from './Context/data.js/context';
import Mainsection from './components/sections/mainSection';
function App() {
  
  const [data, setData] = useState([]);
  async function renderData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      console.log(data);
      setData(data);
    }
      catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    renderData();
  }, []);
  

const todos=data.map((item)=>{
     return <Card key={item.id} item={item}></Card>

  })
  return (
    <Todoslist.Provider value={data}>
    <div className='app'>
      <center><h1>Todos List</h1>
      {/* add title component here */}
      {/* map json data for each item and return card component here */}
      {todos}
     <Mainsection></Mainsection>
      </center>
    </div>
    </Todoslist.Provider>
  );
}

export default App;
