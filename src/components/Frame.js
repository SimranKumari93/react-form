import React , { useState , useEffect } from 'react'

function Frame() {
    const data = {name : " " , email: " ", password: " "};
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
        <div>Name:*  <input type="text" onChange={handleData} placeholder='Enter your name'/></div>
        <div>Email:* <input type="text" onChange={handleData} placeholder='Enter your email'/></div>
        <div>Password:* <input type="text" onChange={handleData} placeholder='Enter your password' display="hidden"/></div>
        <p ><a href='@mailto:simrankumaribodhgay93@gmail.com'>Forgot Password?</a></p>
        <button onClick={handleSubmit}>Submit</button>
    </form>
    </>
  )
}

export default Frame;

/* value ={inputData.name}
 value={inputData.email}
 value={inputData.password}
  <a href="https://www.linkedin.com/in/simran-kumari-213707208"  className='contact' ><img src={LinkedIn} alt='' className='contact'/><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://instagram.com/simmran___singh?utm_medium=copy_link"  className='contact' ><img src={Instagram} alt='' className='contact'/><i class="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/SimranKumari93"  className='contact'><img src={Github} alt=''className='contact'/><i class="fa-brands fa-github"></i></a>
            </div>
 */