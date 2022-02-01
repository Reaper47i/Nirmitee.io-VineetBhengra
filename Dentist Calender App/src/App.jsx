import MainContent from './components/mainContent/MainContent'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <div className="contaner mx-auto flex w-full h-screen font-popins">
      <Sidebar/>
      <MainContent/>
    </div>
  )
}

export default App
