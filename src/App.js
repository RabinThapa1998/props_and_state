
import './app.css'
import { useEffect , useState} from 'react'
import { Todoslist } from './Context/data.js/context';
import Mainsection from './components/sections/mainSection';
import { Navbar } from './components/sections/navbar';
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
  

  return (
    <Todoslist.Provider value={data}>
    <Navbar/>
    <div className='app'>
       <div className='main'>
      <center><h1>Todos List</h1>
      {/* add title component here */}
      {/* map json data for each item and return card component here */}
   
     <Mainsection></Mainsection>
      </center>
    </div>
    </div>
    </Todoslist.Provider>
  );
}

export default App;
