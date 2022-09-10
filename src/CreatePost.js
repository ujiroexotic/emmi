import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import api from './api/';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const CreatePost = () => {

// const tokenSession = sessionStorage.getItem('user_information')
// const token = tokenSession.token;

const [title, setTitle] = useState('')
const author = localStorage.getItem('username')
//const [author, setAuthor] = useState('')
const setAuthor = useState('')
const [body, setBody] = useState('')
const [isPending, setIsPending] = useState(true)
const history = useHistory();

const post = {title, author, body}
const handleSubmit = (e) => {
  e.preventDefault();
  setIsPending(false) 
  setTimeout(() => {




const CreatePost = async () => {
  try {
    const response = await api.post('/blogs', post).then(
      res => {
        if (res.data.status === 200){
          swal("Created Successfully", res.data.message, "success")
          history.push('/')
        }
      }
    )
    history.push('/')
  } catch (error) {
    console.log(error.response.data)
  }
}
CreatePost();
}, 200);

localStorage.setItem('data', post);
let data = localStorage.getItem('data');
console.log(data);
//const post = {title, author, body}

 // const [title, setTitle] = useState('');
//const handleSubmit = (e) => {
  //e.preventDefault();
  // console.log(post);
  // const url = 'http://localhost:8000/posts'
  // fetch(url, {
  //   method : "POST",
  //   headers:{
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(post)
  //   }).then(
  //     (res) => {res.json();
  //       setIsPending(false)
  //     }
  //   )
  
}
  return (
    <Row className='pt-5'>
      <Col md={{ span: 6, offset: 3 }} sm={12}>
        <Card style={{ width: 'auto', margin: '10px', padding: '20px' }}>
          <Card.Body>
            <h3 className="m-4">Welcome {author}</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" value={title}  onChange={(e)=> setTitle(e.target.value)} />
                <Form.Text className="text-muted">Please enter title
                </Form.Text>
                {/* onChange={(e)=> {
                  console.log(e);
                return setTitle(e.target.value)
              }
              } */}
                <Form.Text className="text-muted">{title}
                
                </Form.Text>
              </Form.Group>
              { <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter Author" value={author} onChange={(e)=> setAuthor(e.target.value)} />
                
              </Form.Group> }
{/* 
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Form.Label className='mt-3'>
                Enter Your Story
              </Form.Label>
              <textarea class="form-control mt-1 mb-3" value={body} onChange={(e)=> setBody(e.target.value)}>

              </textarea>
              { isPending && <Button variant="primary" type="submit">
                Submit
              </Button>}
              { !isPending && <Button variant="primary" type="submit" disabled>
                Submitting the blog <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
              </Button>}
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
  }

export default CreatePost;