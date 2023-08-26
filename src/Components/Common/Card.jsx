import React from 'react'
import 'react-icons/fa'
// import {  FaShieldAlt } from 'react-icons/fa'

export default function Card(props) {
    const { texth3, textp, icon } = props;
    return (
        <>
        <div className="container  rounded-0 m-3 text-center" style={{ width: "300px", height: "250px", backgroundColor:"skyblue" }}>
                <div className="row ">
                    <div className="col">
                        <div style={{ fontSize: "30px",marginBottom:"25px",backgroundColor:"blue",width:"50px",rotate:"50deg",height:"45px",paddingBottom:"50px",marginLeft:"110px",marginTop:"40px" }}> {icon} </div>
                        <h3 className='mb-4'>{texth3}</h3>
                        <p>{textp}</p>
                    </div>
                </div>
            </div>

        </>
    )
    
}

