import {useState} from 'react'
import Musicbar from '../components/Musicbar'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import Topbar from '../components/Topbar'
const Landing = () => {
    const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 1){
      setColor(true);
    }else{
      setColor(false);
    }
  }
  window.addEventListener('scroll', changeColor);
  return (
    <div> 
      <div className='flex'>
        <Topbar hasColor={color}/> 
        <Sidebar />
        <Main/>
      </div>
      <Musicbar />
    </div>
  )
}

export default Landing
