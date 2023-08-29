
import React from 'react'
import { FaCloud, FaMedal, FaAward, FaPhone } from 'react-icons/fa'
// import twomember from "../../Assets/Images/2teammember.jpg"
import cat from '../../assets/catonpiller.avif'

export default function Choise() {
  return (
    <>
      <div className="container" style={{marginTop:"70px"}}>
        <div className="row ">
          <div className="col mb-5  text-center">
            <h6 className='text-info'>WHY CHOOSE US</h6>
            <h3>We Are Here To Grow Your <br /> Businness Expotentially</h3>
          </div>
        </div>
      
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <FaCloud style={{ color: "white", backgroundColor: "279EFF", fontSize: "30px", padding: "7px" }} />
          <h5 className='mt-2'>Best In Industry</h5>
          <p className='mb-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate error unde. Non accusantium odio adipisci saepe magnam excepturi quidem.</p>
          <FaMedal style={{ color: "white", backgroundColor: "279EFF", fontSize: "30px", padding: "7px" }} />
          <h5 className='mt-2'>Award Winning</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate error unde. Non accusantium odio adipisci saepe magnam excepturi quidem.</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <img src={cat} alt="" className='mt-3 w-100' />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mt-sm-4">
          <FaAward style={{ color: "white", backgroundColor: "279EFF", fontSize: "30px", padding: "7px" }} />
          <h5 className='mt-2'>Proffesional Staff</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate error unde. Non accusantium odio adipisci saepe magnam excepturi quidem.</p>
          <FaPhone style={{ color: "white", backgroundColor: "279EFF", fontSize: "30px", padding: "7px" }} />
          <h5 className='mt-2'>Best In Industry</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate error unde. Non accusantium odio adipisci saepe magnam excepturi quidem.</p>
        </div>

      </div>


      </div>

    
    </>
  )
}
