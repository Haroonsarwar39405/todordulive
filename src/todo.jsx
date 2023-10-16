import React, { useState } from 'react'
import { Handleonchange,HandleDelet } from './Action/todoaction'
import { useDispatch, useSelector } from 'react-redux'
const Todo = () => {
  const despatch = useDispatch()
  const select = useSelector(state => state.inpdata)
  
  const [data, setData] = useState('')
  const handleClick = () => {
    despatch(Handleonchange(data))
    setData("")
  }
  
  const Handaledit=(ele)=>{
    setData(ele);
  }
  const Handleupdate=()=>{
    despatch(Handleonchange(data))
    setData("")
  }
  
  return (
    <>
      <div className='h-[100vh] w-[100%]  main flex  justify-center items-center'>
        <div className='h-[60vh] w-[50%]  flex flex-col justify-evenly'>
          <div className='w-100%  flex justify-center '>
            <input className=' p-2 rounded-[5px] h-[7vh] w-[60%] text-gray-500 inp' onChange={(e) => setData(e.target.value)} value={data} type="text" placeholder='Enter Your Name' />
            <button className='bg-blue-800 p-2 rounded-[5px] h-[7vh] text-gray-600 btn' onClick={handleClick} >Submit</button>
          </div>
         {
          select.map((ele)=>{
            // console.log(i);
            return(
              <div className='w-100%   flex justify-center '>
            <h1 className='text-3xl font-bold h1'> To Do:</h1>
            <span className='text-gray-500 text-2xl font-bold'>{ele}</span>
            <button className='btn p-2 ml-1 h-[7vh]' onClick={()=>despatch(HandleDelet(ele))}>Delet</button>
            <button className='btn p-2 ml-1 h-[7vh]' onClick={() => Handaledit(ele)}>Edit</button>
            <button className='btn p-2 ml-1 h-[7vh]' onClick={()=>Handleupdate()}>Update</button>
            
            </div>
            )
            
            
          })
         }
        </div>

      </div>
    </>
  )
}

export default Todo
