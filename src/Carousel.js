import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from './images/slider1.jpg';
import slider2 from './images/slider2.jpg';
import slider3 from './images/slider3.jpg';

const posts = [
    {
        id: 1,
        image: "slider1",
        content: "testing.......",
        author: "dan1"
    },
    {
        id: 1,
        image: "slider2",
        content: "I'm happy oooo......",
        author:"ujiro"  
    },
    {
        id: 1,
        image: "slider3",
        content: "Hello...",
        author: "ujiro"
    }
] 

const Carousel = () => {
    return (
      <div>
        <h1 className="sliderText">Reviews</h1>
        <Carousel>
          {posts.map(posts => (
            <Carousel.Item key={post.id}>
              <img
                className="sliderText"
                src={image}
                alt={post.title}
              />
              <Carousel.Caption>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
  
  export default Carousel;