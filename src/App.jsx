import ChildComponent from './components/ChildrenComponent'
import ParentComponent from './components/ParentComponent'

function App() {
  return (
    <ParentComponent children={<ChildComponent name="Василий" />} />
  )
}

export default App
