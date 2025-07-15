import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[cards,setdata]=useState([]);
  const fetchdata=async()=>{
     const response= await fetch("https://jsonplaceholder.typicode.com/posts");
     const data =await response.json();
     setdata(data.slice(0,10));
   }
  useEffect(() => {
   
   fetchdata();
  }, [])
const showalert =()=>{
  alert("hello there");
}
const [names, setnames] = useState({email:"",password:""})
const changeName=(e)=>{
  setnames({...names,[e.target.name]:e.target.value})
  console.log(names)
}
  return (
    <>
      <div className='bg-red-400 w-full h-full flex justify-center items-center gap-1.5 p-2.5 flex-wrap'>
      { cards.map((card)=>{
        return <div  onClick={showalert}className='card w-84 h-62 m-2  bg bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 border border-white/30 hover:scale-105 transform transiton duration-200 cursor-pointer' key={card.id}>
          <h1>{card.title}</h1>
          <p>{card.body}</p>
          <span>{card.userId}</span>
        </div>
      })
      }

      </div>
      <div className='m-10 border-4 bg-black' >
        <input type="text" name="email" value={names.email} onChange={changeName}  className='bg-white'/>
        <input type="text" name="password"  value={names.password } onChange={changeName}  className='bg-white'/>
      </div>
    </>
  )
}

export default App