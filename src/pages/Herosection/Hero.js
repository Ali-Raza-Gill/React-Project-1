import React from 'react'
import img1 from '../../assets/slide1.jpg'
import img2 from '../../assets/slide2.jpg'
import img3 from '../../assets/slide3.jpg'

export default function Herosection() {
  return ( 
  <div className="container-fluid" >
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={img1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img3} alt="Third slide"/>
    </div>
  </div>
</div>
</div>
  )
}
