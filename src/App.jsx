import './App.css'
import Aside from '../src/components/Aside'
import Content from '../src/components/Content'
import { useState } from 'react'

function App() {

const [test, setTest] = useState(null)

const toAside = (item) => {
  setTest(item)
}

  return (
<div className="flex flex-row justify-center items-center">
<Aside test={test} />
<Content serie={toAside} />
</div>
  )
}

export default App
