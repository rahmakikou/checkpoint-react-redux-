 
import './App.css';
import AddTask from './Components/AddTask';
import ListTasks from './Components/ListTasks';
import FilterTask from './Components/FilterTask'

function App() {
  return (
    <div className='decor'> 
      <h1 style={{fontFamily: 'cursive', color: 'violet', margin:'60px', fontSize:'100px'}}>My to do list</h1>
     <div className='main'> 
      <FilterTask/> 
     </div>
      <br/> 
      <div className='main'> 
      <ListTasks/>  
      <br/> 
      <br/> 
      <AddTask/>
    </div>
    </div>
  );
}

export default App;
