import React from 'react'
import ReplyIcon from '@mui/icons-material/Reply';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Button from '../../Components/Common/Button';


export default function Review() {
    return (
        <div className="contianer mt-5 pt-5 mb-5">
            <div className="row mt-5 pt-5">
                <div className="col-5" style={{marginRight:"40px", marginLeft:"230px"}}>
                    <h6 style={{ color: "#31D2F2" }}>REQUEST A QUOTE</h6>
                    <h1>Need a Free Quote? Please Feel Free to Contact Us</h1>
                    <div className="row d-flex g-5 pt-4">
                        <div className="col"><h6><ReplyIcon style={{color:"skyblue"}}/>Reply within 24 hours</h6></div>
                        <div className="col"><LocalPhoneIcon style={{color:"skyblue"}}/> 24 hours telephone Support</div>
                    </div>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, ipsum officia quis rem earum eaque consequuntur nobis distinctio labore tempora vel fuga, repellat suscipit voluptates vero exercitationem inventore officiis quidem ea hic! Aut perferendis eos quam ex ratione recusandae at aliquid placeat possimus sint. Fugiat perferendis illum similique obcaecati ullam.</p>
                    <div className="row d-flex gx-0 gy-0">
                       <LocalPhoneIcon style={{color:"white",marginRight:"20px",marginTop:"5px",backgroundColor:"#31D2F2",fontSize:"40px",padding:"10px"}}/>
                        <div className="col">
                            <h6>Call to ask any questions</h6>
                            <h6>+92 345 6655111</h6>
                        </div>

                    </div>

                </div>

                <div className="col border" style={{height:"370px",marginRight:"10px",maxWidth:"400px", paddingTop:"40px",backgroundColor:"skyblue"}}>
                    <form>
                    <div class="form-group" style={{marginBottom:"15px"}}>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />&ensp;
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Select a Service</option>
                            <option>seo</option>
                            <option>YouTube</option>
                            <option>Facebook</option>
                            <option>Twitter</option>
                        </select>
                    </div>
                    
                    <div class="form-group mb-3 ">
                        <label for="exampleFormControlTextarea1"></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
                    </div>
                    <Button text="Request a Quote"  />
                </form>
                </div>
            </div>
        </div>
    )
}
