import React from 'react'
import slide1 from '../../Assets/Images/slide1.jpg'
import slide2 from '../../Assets/Images/slide2.jpg'
import slide3 from '../../Assets/Images/slide3.jpg'

export default function Herosection() {
    return (

        <>
            <div className="container-flud overflow-x-hidden position-relative">
                <div className="row">
                    <div className="col">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100 " style={{height:"900px"}} src={slide1} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={slide2} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={slide3} alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next mh-50" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="sr-only">Next</span>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
