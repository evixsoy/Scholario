import './App.css'
import Sidebar from './items/Sidebar/Sidebar';
import Topbar from './items/Topbar/Topbar';
import GridContent from './items/GridContent/GridContent';

function App() {
  return (
    <div className='layout'>
     <Sidebar/>
      <div className="window">
        <Topbar/>
        <div className="content">
          <GridContent/>
        </div>
      </div>
    </div>
  )
}

export default App
