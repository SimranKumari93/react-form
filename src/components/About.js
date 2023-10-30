import React from 'react'
import simranImage from '../images/SimranPhoto.jpg'
import LinkedIn from '../images/Linkedin.png'
import Instagram from '../images/Instagram.png'
import Github from '../images/Github.png'
// import fontawesome from '..stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
 
function About() {
  return (
    <>
    <div className='upc'>   
    <div className='gradient'></div>
    <div className='profile-down'>  
                <center><img src={simranImage} alt=''/></center>
                
            <div className='profile-title'> <center>Simran Kumari </center></div>
            <div className='profile-description'>
            <a href="https://www.linkedin.com/in/simran-kumari-213707208"  className='contact' ><img src={LinkedIn} alt='' className='contact' style={{height:"  25px", width:'  25px', padding:'7px'}}/></a>
            <a href="https://instagram.com/simmran___singh?utm_medium=copy_link"  className='contact' ><img src={Instagram} alt='' className='contact'  style={{height:"   25px", width:'   25px',  padding:'7px'}}/></a>
            <a href="https://github.com/SimranKumari93"  className='contact'><img src={Github} alt=''className='contact'  style={{height:"   25px", width:'   25px',  padding:'7px'}}/></a>
            
            </div>
          
            </div>
                 
              
           
        
    </div>
    </>
  )
}

export default About



