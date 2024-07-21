import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaiTapThucHanhLayout from './component/BaiTapThucHanhLayout'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <BaiTapThucHanhLayout />
  </div>)
}

export default App
