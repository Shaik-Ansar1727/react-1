import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"


function App() {
  const [count, setCount] = useState(0)
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    })
  }


  const onSubmit = async (data) => {
    // await delay(2);
    let r = await fetch("http://localhost:3000/", {
      method: "POST", headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify({username:data.username,password:data.password}),
    });
    let res = await r.text();


    console.log(data, res)
  }


  return (
    <>
      {isSubmitting && <div>Loading...</div>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='username' type="text" {...register("username", { required: true, minLength: { value: 3, message: "minimum 3 are characters required " }, maxLength: { value: 8, message: "maximum 8 characters allowed" } })} />
        <br />
        {errors.username && <span className='red'>{errors.username.message}</span>}

        <br />
        <input type="password" placeholder='password'{...register("password", { required: true, minLength: { value: 3, message: "minimum 3 are characters required " }, maxLength: { value: 8, message: "maximum 8 characters allowed" } })} />
        <br />
        {errors.password && <span className='red'>{errors.password.message}
        </span>}
        <br />
        <input disabled={isSubmitting} type="submit" />
      </form>
    </>
  )
}

export default App
