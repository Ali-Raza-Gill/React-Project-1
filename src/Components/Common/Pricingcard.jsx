import React from 'react'
import"react-icons/fa"
// import { FaCheck } from 'react-icons/fa'
import Button from './Button';

export default function Pricingcard(props) {
    const {plan,bsize,price,course1,course2,course3,course4,icon1,icon2,icon3,icon4}=props
  return (
    
   
   <>
<div className="container-fluid" style={{width:"350px"}}>
    <div className="row">
        <div className="col">
            <div className="card  rounded-0 border-0" style={{backgroundColor:"aliceblue"}} >
                <div className="card-body">
                    <h4 style={{color:"skyblue"}}>{plan}</h4>
                    <p>{bsize}</p>
                    <hr />
                    <h1><span style={{fontSize:"15px"}}>$</span>{price}<span style={{fontSize:"15px"}}>/month</span></h1>
                    <p>{course1} {icon1}</p>
                    <p>{course2} {icon2}</p>
                    <p>{course3} {icon3}</p>
                    <p>{course4} {icon4}</p>
                    <Button  text="Oder Now" style={{paddingTop:"15px",backgroundColor:"blue"}}/>
                </div>
            </div>
        </div>
    </div>
</div>





{/* 
    <div className="container">
        <div className="row">
            <div className="col">
            <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase ">Basic Plan</h5>
            <h6 className=' pt-2'>For Small Businness</h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><FaCheck/></span><strong>Unlimited Users</strong>
              </li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
            </div>
        </div>
    </div> */}
    </>
  )
}
