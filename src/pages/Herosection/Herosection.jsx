import React from 'react'
import slide1 from '../../Assets/Images/slide1.jpg'
import slide2 from '../../Assets/Images/slide2.jpg'
import slide3 from '../../Assets/Images/slide3.jpg'
// import Button from '../../Components/Common/Button'
export default function Herosection() {
    const cartext={
        position: "absolute",
        top:"300px",
        color:"white",
        marginLeft:"580px"
    }
    const cartext1={
        position: "absolute",
        top:"320px",
        color:"white",
        marginLeft:"380px",
        fontSize:"60px",
        fontFaimily:"san-serif"
    }
    const carbtn1={
        position: "absolute",
        top:"500px",
        color:"white",
        marginLeft:"-50px",
        // border:"1px solid white ",
        borderRadius:"0",
        background:"#0B5ED7"
    }
    const carbtn2={
        position: "absolute",
        top:"500px",
        color:"white",
        marginLeft:"-50px"
    }
    return (

        <>
            {/* <div className="container-flud overflow-x-hidden position-relative">
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
            </div> */}

           

            <div id="home">
      <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col ">
            <div id="carouselExampleIndicators" className="carousel">
              {/* <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
              </div> */}

              <div className="carousel-inner">
                <div className="carousel-item active" style={{height: '800px'}}>
                  <div className="container" style={{position: 'relative'}}>
                    <div className="row">
                      <div className="col text-center ">
                        <h6 className="pb-3 text-center" style={cartext}>Creatice & Innovative</h6>
                        <h1 className="pb-3" style={cartext1}>Creative & Innovative <br />Digital Solution </h1>
                        <button className="btn" style={carbtn1}>Learn More</button>
                        {/* <Button color="primary" text="Learn More" style={{carbtn2}}/> */}
                      </div>
                    </div>
                  </div>
                  <img src={slide1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item " style={{height: '800px'}}>
                  <div className="container" style={{position: 'relative'}}>
                    <div className="row">
                      <div className="col text-center">
                        <p className="pb-3 text-center" style={cartext}>Creatice & Innovative</p>
                        <h1 className="pb-3 " style={cartext1}>Creative & Innovative <br />Digital Solution</h1>
                        <button className="btn " style={carbtn1}>Learn More</button>
                      </div>
                    </div>
                  </div>
                  <img src={slide2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" style={{height: '800px'}}>
                  <div className="container" style={{position: 'relative'}}>
                    <div className="row">
                      <div className="col text-center">
                        <p className="pb-3 text-center" style={cartext}>Creatice & Innovative</p>
                        <h1 className="pb-3" style={cartext1}>Creative & Innovative <br />Digital Solution</h1>
                        <button className="btn " style={carbtn1}>Learn More</button>
                      </div>
                    </div>
                  </div>
                  <img src={slide3} className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden ">Next</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>





        </>
    )
}
