import Carousel  from "react-bootstrap/Carousel";
//import { sliderImage } from "./data";
// import slider1 from './images/slider1.jpg';
// import slider2 from './images/slider2.jpg';
// import slider3 from './images/slider3.jpg';

/* import api from './api'
import {useState, useEffect} from "react";
import swal from 'sweetalert'; */

const CarouselComponent = ({posts, images}) => {
  const post = [...posts, ...images]
  console.log(post)
 /*  const [images, setImages] = useState(null);
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(true);

  useEffect(
        
    () =>{
        setTimeout(() => {

            const fetchImages = async () => {
                try {
                   // const response = await api.get('/posts')
                    const response = await api.get('/images')
                    console.log(response.data)
                    setIsPending(false)
                    setImages(response.data)
                } catch (error) {
                    if(error.response){
                       // setIsPending(true);
                        setError(error.response.data)
                        swal("Success", error.response.data, "success" )
                
                    }else{
                        setError(error.message)
                    }
                }
            }
            fetchImages();
        
        }, 2000);

    }, []
) */



    return (
      <> 
      
      <Carousel className="sliderHeight">
      {posts.slice(0,3).map((item, index) => {
        const image = images[index];
       return ( <Carousel.Item key={index} className="sliderHeight">
        <img
        
          className="d-block w-100"
          src={image}
          alt=""
          style={{
            opacity: "0.9",
            filter: "alpha(opacity=100)",
          }}
          
        />
         
       {/*  <div 
        className="d-block w-100"
        style={{
          backgroundImage : `url(${image})`
        }}
        /> */}
        <Carousel.Caption > 
          <h3 className="sliderText">{item.title}</h3>

          <p>
            {item.body}
          </p>
        </Carousel.Caption>
       
      </Carousel.Item>
      )
      }
        )  
      }
    </Carousel>
     
     
     </>
    //  eslint-disable-nextline
    )
  }
export default CarouselComponent;


/* import Carousel from 'react-bootstrap/Carousel';
import slider1 from './images/slider1.jpg';
import slider2 from './images/slider2.jpg';
import slider3 from './images/slider3.jpg';

 const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item className="sliderHeight">
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="sliderText">First slide label</h3>
          <p className="sliderText">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="sliderHeight">
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="sliderText">Second slide label</h3>
          <p className="sliderText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="sliderHeight">
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="sliderText">Third slide label</h3>
          <p className="sliderText">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent; */