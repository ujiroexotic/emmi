import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import api from './api';
import axios from 'axios';
import swal from 'sweetalert';

const Register = () => {
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [body, setBody] = useState('')

  const [registerDetails, setRegisterDetails] = useState({
          name: '',
          email: '',
          password: '',
          error_list: []
        });

  const handleInput = (e) => {
    e.persist();
    setRegisterDetails({
      ...registerDetails, [e.target.name] : e.target.value
    })
  }

  const [isPending, setIsPending] = useState(true)
  const history = useHistory();

  //const registerDetails = {username, email, password}

  // const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: registerDetails.name,
      email: registerDetails.email,
      password: registerDetails.password,
    }
    const register = async () => {
      try {

       // axios.get('/sanctum/csrf-cookie').then(response =>{

      // console.log(data) 
        const response = await api.post('/register', data).then(
          res => {
            if(res.data.status === 200){
             // console.log(res.data)
              localStorage.setItem('token', res.data.token);
              localStorage.setItem('username', res.data.user);
              swal("Success", res.data.message, "success")
              history.push('/create')
            }
            else{
              setRegisterDetails({
                ...registerDetails, error_list: res.data.validation_errors
              })
            }
          }
        )
     // })
        //console.log(response.data)
        //history.push('/login')
      } catch (error) {
       // console.log(error.response.data)
      }
    }
    register();
    //setIsPending(false)
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

    //sessionStorage.setItem('registerDetails', JSON.stringify(registerDetails));
    // let data = localStorage.getItem('registerDetails');
    // console.log(data);

    // }
    // const showData = () =>{
    //   // let data = localStorage.getItem('registerDetails');
    //   // console.log(data[1]);
    //   let rawdata = sessionStorage.getItem('registerDetails');
    //   let data = JSON.parse(rawdata)
    //   console.log(data.password);
  }
  return (
    <Row className='pt-5'>
      <Col md={{ span: 6, offset: 3 }} sm={12}>
        <h1>Register Here</h1>
        <Card style={{ width: 'auto', margin: '10px', padding: '20px' }}>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username"
                 name="name" value={registerDetails.name} onChange={handleInput} />
                <Form.Text className="text-danger">{registerDetails.error_list.name}
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail"> 
                </Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email" 
                name="email" value={registerDetails.email} onChange={handleInput} />
                 <Form.Text className="text-danger">{registerDetails.error_list.email}
                </Form.Text>
                {/* onChange={(e)=> {
                  console.log(e);
                return setTitle(e.target.value)
              }n
              } */}
                {/* <Form.Text className="text-muted">{username}
                
                </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" 
                name="password" value={registerDetails.password} onChange={handleInput} />
                 <Form.Text className="text-danger">{registerDetails.error_list.password}
                </Form.Text>
              </Form.Group>
              {/* 
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              {/* <Form.Label className='mt-3'> */}
              {/* Enter Your Story
              </Form.Label>
              <textarea class="form-control mt-1 mb-3" value={body} onChange={(e)=> setBody(e.target.value)}>

              </textarea> */}
              {isPending && <Button variant="primary" type="submit">
                Submit
              </Button>}
              {!isPending && <Button variant="primary" type="submit" disabled>
                Submitting the blog <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              </Button>}
            </Form>
            {/* <Button variant="primary" className="mt-5" onClick={()=> showData()}>
                Show Storage
              </Button> */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Register;