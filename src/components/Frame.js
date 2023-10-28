import React , { useState , useEffect } from 'react'

function Frame() {
    const data = {name : "" , email: " ", password: " "};
    const [inputData , setInputData ] = useState(data);
    const [ flag , setFlag ] = useState(false)
    useEffect(() => { 
        console.log("Registered")
    },[flag])
    function handleData(e){
        setInputData({...inputData, [e.target.name]:e.target.value })
        console.log(inputData)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("all fields are mandatory")
        }else{
        setFlag(true)
        }
    }
  return (
    <>
    <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name}, You've registered sucessfully</h2>:""}</pre>
    <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
        <h1>Registration form</h1>
        </div>
        <div><input type="text" value ={inputData.name} onChange={handleData} placeholder='Enter your name'>Name</input></div>
        <div><input type="text" value={inputData.email} onChange={handleData} placeholder='Enter your email'>Email</input></div>
        <div><input type="text" value={inputData.password} onChange={handleData} placeholder='Enter your password'>Password</input></div>
    </form>
    </>
  )
}

export default Frame;