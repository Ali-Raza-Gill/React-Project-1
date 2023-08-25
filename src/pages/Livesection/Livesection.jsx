import React from 'react'
import "react-icons/fa"

import {FaCheck, FaMedal, FaTeamspeak } from 'react-icons/fa'

export default function Livesection() {
    return (
        <>
            <div className="container text-center pt-0">
                <div className="row  px-5 mx-5 ">

                    <div className="col bg-primary shadow">
                        <div className="row border text-center"style={{height:"120px"}}>
                            <div className="col-3"><FaTeamspeak style={{fontSize:"40px",marginLeft:"90px",marginTop:"35px",}} /></div>
                            <div className="col mt-4"><h6>Happy Clients</h6>
                                <h4>12345 </h4></div></div>
                    </div>
                    <div className="col shadow"style={{backgroundColor:'lightblue'}}>
                        <div className="row border text-center"style={{height:"120px"}}>
                            <div className="col-3"><FaCheck style={{fontSize:"40px",marginLeft:"90px",marginTop:"35px"}} /></div>
                            <div className="col mt-4"><h6>Projects Done</h6>
                                <h4>45129 </h4></div></div>
                    </div>
                    <div className="col shadow bg-primary">
                        <div className="row border text-center"style={{height:"120px"}}>
                            <div className="col-3"><FaMedal style={{fontSize:"40px",marginLeft:"90px",marginTop:"35px"}} /></div>
                            <div className="col mt-4"><h6>Win Award</h6>
                                <h4>3720 </h4></div></div>
                    </div>
                    
                    

                </div>
            </div>
        </>
    )
}
