import React from 'react'
import "react-icons/fa"
import Pricingcard from '../../Components/Common/Pricingcard'
import { FaCarrot, FaCheck } from 'react-icons/fa'

export default function Pricingsection() {
  return (
    <>
    <div className="container mt-5 pt-5 mb-5">
      <div className="row mx-5 ">
        <div className="row">
          <div className="col text-center mb-5">
            <h6 className='text-info mb-0' >PRICING LANS</h6>
            <h1>We Are Offering Compitative <br />Price For Our Clients</h1>
          </div>
          
        </div>
        <div className="col d-flex justify-content-center mx-5" >
        {/* plan,bsize,price,course1,course2,course3,course4,icon1,icon2,icon3,icon4 */}

        <Pricingcard 
        plan="Basic Plan" bgColor="lightblue" bsize="For Small Size Businiss" price="49.00" course1="HTML5 & CSS3" icon1={<FaCheck style={{color:"lightblue",marginLeft:"140px"}}/>} course2="Bootstrap v5"icon2={<FaCheck style={{color:"lightblue",marginLeft:"160px"}}/>} course3="Responsive Layout" icon3={<FaCarrot style={{color:"red",marginLeft:"120px"}}/>} course4="Cross-browser Support" icon4={<FaCarrot style={{color:"red",marginLeft:"90px",marginLeft:"90px"}}/>}
        />
        <Pricingcard 
        plan="Standard Plan" bsize="For Medium Size Businiss" price="99.00" course1="HTML5 & CSS3" icon1={<FaCheck style={{color:"lightblue",marginLeft:"140px"}}/>} course2="Bootstrap v5"icon2={<FaCheck style={{color:"lightblue",marginLeft:"160px"}}/>} course3="Responsive Layout" icon3={<FaCheck style={{color:"lightblue",marginLeft:"120px"}}/>} course4="Cross-browser Support" icon4={<FaCarrot style={{color:"red",marginLeft:"90px",marginLeft:"90px"}}/>}
        />
        <Pricingcard 
        plan="Advance Plan" bsize="For Large Size Businiss" price="149.00" course1="HTML5 & CSS3" icon1={<FaCheck style={{color:"lightblue",marginLeft:"140px"}}/>} course2="Bootstrap v5"icon2={<FaCheck style={{color:"lightblue",marginLeft:"160px"}}/>} course3="Responsive Layout" icon3={<FaCheck style={{color:"lightblue",marginLeft:"120px"}}/>} course4="Cross-browser Support" icon4={<FaCheck style={{color:"lightblue",marginLeft:"90px",marginLeft:"90px"}}/>}
        />
        </div>
      </div>
    </div>
    </>
  )
}

