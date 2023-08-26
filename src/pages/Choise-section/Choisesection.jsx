
import React from 'react'
import { FaAward, FaCloud, FaMedal, FaPhone } from 'react-icons/fa'
import twomember from "../../Assets/Images/2teammember.jpg"

export default function Choisesection() {
  return (
    <>
    <div className="container pt-5 mt-5 ">
      <div className="row mx-5 px-5">
        <div className="col ">
          <div className="col mb-5  text-center">
            <h6 className='text-info'>WHY CHOOSE US</h6>
            <h3>We Are Here To Grow Your <br /> Businness Expotentially</h3>
          </div>
          <div className='d-flex'>
            <div className="col">
            <FaCloud style={{color:"white",backgroundColor:"279EFF",fontSize:"30px",padding:"7px"}}/>
            <h5 className='mt-2'>Best In Industry</h5>
            <p className='mb-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate error unde. Non accusantium odio adipisci saepe magnam excepturi quidem.</p>
            <FaMedal style={{color:"white",backgroundColor:"279EFF",fontSize:"30px",padding:"7px"}}/>
            <h5 className='mt-2'>Award Winning</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate error unde. Non accusantium odio adipisci saepe magnam excepturi quidem.</p>
          </div>
          <div className="col mx-5">
            <img src={twomember} alt="" style={{height:"370px",width:"380px"}}/>
          </div>
          <div className="col">
            <FaAward style={{color:"white",backgroundColor:"279EFF",fontSize:"30px",padding:"7px"}}/>
            <h5 className='mt-2'>Proffesional Staff</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate error unde. Non accusantium odio adipisci saepe magnam excepturi quidem.</p>
            <FaPhone style={{color:"white",backgroundColor:"279EFF",fontSize:"30px",padding:"7px"}}/>
            <h5 className='mt-2'>Best In Industry</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate error unde. Non accusantium odio adipisci saepe magnam excepturi quidem.</p>
          </div>
          
          </div>

          
        </div>
      </div>
    </div>
    </>
  )
}
