//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import ContentColumn from './contentColumn';
//import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import PostsComponent from './postsComponent';
//import {useState, useEffect} from 'react';
import loader from './logo.svg';
import AlertComponent from './AlertComponent';
import useFetch from './useFetch';
import CarouselComponent from './carouselComponent';
import { sliderImage } from './data';
//import FooterComponent from './footerComponent';
//import { UserContext } from './UserContext';
//import { useContext } from 'react';
//import { UserContext } from './UserContext';

const HomeComponent = () => {
    //const { data: posts, isPending, error } = useFetch('http://localhost:8000/posts')
    const { data: posts, isPending, error } = useFetch('')
   // const value = useContext(UserContext)



    // let styleHome = {
    //     border: '1px solid black'
    // };
    //let name = "Ujiro"

    // const [posts, setPost] = useState(null);
    //     // {author: "John", title: "Civil Servant", body: "he is a graduate ", id: 1 },
    //     // {author: "Michael", title: "Business Man", body: "he is intelligent", id: 2 },
    //     // {author: "Grace", title: "Business woman", body: "she is innovative", id: 3 },
    //     // {author: "Martha", title: "Civil Servant", body: "she is hardworking", id: 4 },
    //     // {author: "Sharon", title: "Business woman", body: "she is hardworking", id: 5 }

    // // const [name, setName] = useState('Glory');
    // const [error, setError] =useState(null)
    // const [isPending, setIsPending] = useState(true);

    // useEffect(
    //     // () => {alert('This functions Ada')}, [name]
    //     // );
    //     () =>{
    //         setTimeout(() => {
    //             fetch('http://localhost:8000/post')
    //             .then(
    //                 res => {
    //               // console.log(res)
    //               if(!res.ok){
    //                 throw Error('no response from end point or server')
    //               }
    //                return res.json()
    //             }
    //                 )
    //             .then(
    //                 (data) =>{
    //                     //console.log(data);
    //                     setIsPending(false)
    //                     setPost(data)
    //                 }
    //             ) 
    //             .catch(
    //                 err => {
    //                     setIsPending(false);
    //                     setError(err.message)
    //                 }
    //             ) 
    //         }, 1000);

    //     }, []
    // )
    // // const deletePost = (id) =>{
    // //     const newPost = posts.filter(
    // //         post => post.id !== id 
    // //     )
    // //     setPost(newPost)
    // //}

    // // let people = [
    // //     {author: "James", title: "Doctor", body: "he is intelligent", id: 1},
    // //     {author: "Harriet", title: "Nurse", body: "she is active", id: 2}
    // // ];


    return (
        <div>
            {/* < PostsComponent posts={posts} /> */}
            {/* <Button variant="secondary" if (post!=null)<postComponent posts={posts}/> onClick={()=>setName('John')}>Click me to change name</Button> */}
            {/* { posts && < PostsComponent posts={posts.filter(post=>post.author !== 'Grace')} deletePost={deletePost}/>} */}
           { posts && <CarouselComponent posts={posts} images={sliderImage} />} 

            {error && <AlertComponent error={error} />}
           
            {/* <h1>{{ value }}</h1> */}
            {isPending && <div><img src={loader} width="200" alt='preloader' /></div>}
            {posts && < PostsComponent posts={posts} />}

        </div>
    );
}

export default HomeComponent;
