
import React from 'react'
import "react-icons/fa"
import { FaCheck, FaPhone } from 'react-icons/fa'
import Button from '../../Components/Common/Button'
// import contact from "../../Assets/Images/contact.jpg"
// import contact from "../../Assets/Images/teammeeting4.jpg"
import cat from '../../assets/catonpiller.avif'

export default function About() {
  return (
    <>
    <div className="container" style={{marginTop:"160px"}}>
      <div className="row">
        <div className="col-12 col-md-6 ">
          <h6 className='text-primary '>ABOUT US</h6>
          <h3 className='mb-4'>The Best IT Solutions With 10 Years of <br /> Experience</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam odio molestiae  animi incidunt magnam expedita nemo! Ab, nesciunt exAM in distinctio sequi totam  soluta reiciendis pariatur deleniti, deserunt molestiae sint mollitia porro non, quisaas  recusanasdae facere.</p>
          <h6 className='d-flex mb-3'>
            <div className="col"><FaCheck style={{color:"279EFF"}}/> &ensp; Award Winning</div>
            <div className="col"><FaCheck style={{color:"279EFF"}}/> &ensp;24/7 Support</div>
          </h6>
          <h6 className='d-flex'>
            <div className="col"><FaCheck style={{color:"279EFF"}}/> &ensp;Professional Staff</div>
            <div className="col"><FaCheck style={{color:"279EFF"}}/> &ensp;Fair Price</div>
          </h6>
          <div className="d-flex mt-4 mb-4">
              <div className='pt-2 '><FaPhone style={{color:"white",backgroundColor:"279EFF",fontSize:"30px",padding:"7px"}}/></div>
              <div>
                <p className='mx-3 mb-0'> Call to ask any question</p>
                <h6 className='mx-3'>+92 345 6789000</h6>
              </div>
          </div>
          <Button  text="Request a Quote" style={{paddingTop:"15px",backgroundColor:"279EFF"}}/>
        </div>

        <div className="col-12 col-md-6 mt-2 ">
            <img src={cat} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}



