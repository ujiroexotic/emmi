import Carousel  from "react-bootstrap/Carousel";
import slider1 from './images/slider1.jpg'
import slider2 from './images/slider2.jpg'
import slider3 from './images/slider3.jpg'
const CarouselComponent = () => {
    return ( 
        <Carousel className="sliderHeight">
      <Carousel.Item className="sliderHeight">
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="sliderText">First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="sliderHeight">
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3  className="sliderText">Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="sliderHeight">
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3  className="sliderText">Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

     );
}
 
export default CarouselComponent;