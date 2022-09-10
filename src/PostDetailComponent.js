//import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import AlertComponent from './AlertComponent';
import loader from './logo.svg'
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import useFetch2 from './useFetch2';
//import FooterComponent from './footerComponent';
//import imageFile from './images/slider2.jpg';


const PostDetailsComponent = () => {
    const {id} = useParams();
    //const {data:post, error, isPending} = useFetch(`http://localhost:8000/posts/${id}`)
    const {data:post, error, isPending} = useFetch2(id)
    return (
        <div>
            <Row>
                <Col className='p-5'>
            { 
            post && <Card>
                <Card.Header as="h5">{post.title}</Card.Header>
                <Card.Body>
                    <Card.Title><small>{post.author}</small></Card.Title>
                    <Card.Text>
                      {post.body}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            }

            {isPending && <div><img src={loader} width="200" alt='preloader'/></div>}    
            { error && <AlertComponent error={error} />}
            </Col>
            </Row>
            
        </div>
    );
}

export default PostDetailsComponent;
