import React from 'react'
import 'react-icons/fa'
// import {  FaShieldAlt } from 'react-icons/fa'

export default function Card(props) {
    const { texth3, textp, icon } = props;
    return (
        <>
        <div className="container  rounded-0 m-3 text-center" style={{ width: "300px", height: "250px", backgroundColor:"#ddeff1" }}>
                <div className="row ">
                    <div className="col">
                        <div style={{ alignItems:"center",fontSize: "20px",marginBottom:"25px",color:"white",backgroundColor:"#28a2ca",width:"50px",rotate:"50deg",height:"5px",paddingBottom:"50px",marginLeft:"110px",marginTop:"40px" }}> {icon} </div>
                        <h3 className='mb-4'>{texth3}</h3>
                        <p>{textp}</p>
                    </div>
                </div>
            </div>

        </>
    )
    
}

