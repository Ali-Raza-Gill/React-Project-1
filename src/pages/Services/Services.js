import React from 'react'
import Card from '../../Components/Common/Card'
import 'react-icons/fa'
import { FaAppStore, FaCode, FaDatabase, FaSearch, FaShieldAlt } from 'react-icons/fa'
// import {  FaShieldAlt } from 'react-icons/fa'

export default function Services() {
    return (
        /* icon, texth3, textp, bgcolor  => props */
        <div className="container" >
            <div className="row  mb-5 mt-5 pt-5 text-center">
                <div className="col">
                    <h6 className='text-info'>OUR SERVICES</h6>
                    <h1>Custom IT Solutions For Your <br /> Successful Businness</h1>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Card icon={<FaShieldAlt style={{ rotate: "-50deg" }} />} texth3="Cyber Security" textp="I have Technical Experience of 4 years in cyber security field" />
                    <Card icon={<FaDatabase style={{ rotate: "-50deg" }} />} texth3="Data Analytics" textp="I have Technical Experience of 4 years in Data Analytics field" />
                    <Card icon={<FaCode style={{ rotate: "-50deg" }} />} texth3="Web Programming" textp="I have Technical Experience of 4 years in Web Programming field" />
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Card icon={<FaAppStore style={{ rotate: "-50deg" }} />} texth3="App Development" textp="I have Technical Experience of 4 years in App Developmentfield" />
                    <Card icon={<FaSearch style={{ rotate: "-50deg" }} />} texth3="SEO Optimaization" textp="I have Technical Experience of 4 years in SEO Optimaization field" />
                    <Card icon={<FaSearch style={{ rotate: "-50deg" }} />} texth3="SEO Optimaization" textp="I have Technical Experience of 4 years in SEO Optimaization field" />
                </div>
            </div>
        </div>
    )
}
