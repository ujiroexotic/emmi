import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import api from './api';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const CreateImages = () => {

// const tokenSession = sessionStorage.getItem('user_information')
// const token = tokenSession.token;

const [title, setTitle] = useState('')
const [caption, setCaption] = useState('')
const [image, setImage] = useState('')

//const [author, setAuthor] = useState('')
const author = localStorage.getItem('username')
const [isPending, setIsPending] = useState(true)
const history = useHistory();

const newImage = {title, caption, image}
const handleSubmit = (e) => {
  e.preventDefault();
console.log(image)
console.log(newImage)

  setIsPending(false) 
  setTimeout(() => {




const CreateImages = async () => {
  try {
    const response = await api.post('/images', newImage).then(
      res => {
        if (res.data.status === 200){
          console.log('image added')
          setIsPending(!isPending) 
          swal("Created Successfully", res.data.message, "success")
          history.push('/')
        }
      }
    )
    history.push('/')
  } catch (error) {
    //console.log(error.response.data)
  }
}
CreateImages();
}, 2000);

localStorage.setItem('imagelist', newImage);
let imagelist = localStorage.getItem('imagelist');
console.log(imagelist);

  
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
                
                <Form.Text className="text-muted">{title}
                </Form.Text>
              </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='mt-3'>
                Enter Your Caption
              </Form.Label>
              <textarea class="form-control mt-1 mb-3" value={caption} onChange={(e)=> setCaption(e.target.value)}>

              </textarea>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control type="file" placeholder="upload an image" value={image}  onChange={(e)=> setImage(e.target.value)} />
                <Form.Text className="text-muted">Please upload an image
                </Form.Text>
               
                <Form.Text className="text-muted">{image}
                
                </Form.Text>
              </Form.Group>
             
              { isPending && <Button variant="primary" type="submit">
                Upload image
              </Button>}
              { !isPending && <Button variant="primary" type="submit" disabled>
                Uploading image <Spinner
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

export default CreateImages;