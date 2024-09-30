import { HashRouter} from 'react-router-dom'

import './App.css'
import MyRoutes from './routes/MyRoutes'
import HistoryTracker from './tools/history_tracker/HistoryTracker'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <HistoryTracker/>
        <MyRoutes />
      </HashRouter>
    </div>
  )
}



export default App;
