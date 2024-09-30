import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MyRoutes from './routes/MyRoutes'
import HistoryTracker from './tools/history_tracker/HistoryTracker'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HistoryTracker/>
        <MyRoutes />
      </BrowserRouter>
    </div>
  )
}



export default App;
