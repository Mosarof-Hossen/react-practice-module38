import Countries from './components/Countries/Countries'
import './App.css'
import { Suspense } from 'react';


const countiresFlags=async ()=>{
  const res=await fetch("https://openapi.programming-hero.com/api/all");
  const data=await res.json();
  return (data)
}

function App() {
  const countriesFlagsPromise=countiresFlags();


  return (
    <>
      <Suspense fallback={<h1>Loading........</h1>}>
        <Countries countriesFlagsPromise={countriesFlagsPromise} ></Countries>

      </Suspense>
    </>
  )
}

export default App
