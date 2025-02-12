import './App.css'
import Sidebar from './items/Sidebar/Sidebar';
import Topbar from './items/Topbar/Topbar';
import Rozvrh from './items/Rozvrh/Rozvrh';

function App() {
  return (
    <div className='layout'>
     <Sidebar/>
      <div className="window">
        <Topbar/>
        <div className="content">
          <Rozvrh/>
        </div>
      </div>
    </div>
  )
}

export default App
