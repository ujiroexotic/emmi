import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import api from './api'
import swal from 'sweetalert';

const Login = () => {
// const [username, setUsername] = useState('')
// const [password, setPassword] = useState('')
// const [body, setBody] = useState('')
// const [isPending, setIsPending] = useState(true)
const [loginDetails, setLoginDetails] = useState({
  email: '',
  password: '',
  error_list: []
});
const history = useHistory();
const [isPending, setIsPending] = useState(true)
const handleInput = (e) => {
  e.persist()
  setLoginDetails({
    ...loginDetails, [e.target.name]: e.target.value
  })
}
//const [formErrors, setformErrors] = useState('')

const data = {
  email : loginDetails.email,
  password : loginDetails.password
}

 // const [title, setTitle] = useState('');
const handleSubmit = (e) => {
  e.preventDefault();
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
 // console.log(data)
  const login = async() => {
    try {
        const response = await api.post('/login', data)
        .then(res => {
          // console.log(res.data.validation_errors);
          if(res.data.status === 200){

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.user);
            swal("Success", res.data.message, "success")
            history.push('/create')

          }else if(res.data.status === 401){
            swal("Login invalid", res.data.message, "error")
          }
          else{
            const emailError = res.data.validation_errors.email[0] ?
            res.data.validation_errors.email[0] : '';
            const passwordError = res.data.validation_errors.password[0] ?
            res.data.validation_errors.password[0] : '';
            const totalError = emailError + passwordError;
             swal("Login Invalid", "error");
           
             setLoginDetails({
              ...loginDetails, error_list: res.data.validation_errors
            })
          }
        })
    } catch (error) {
      swal("Request not Performed", error.message, "error")
    }
  } 
  login();

   // sessionStorage.setItem('loginDetails', JSON.stringify(loginDetails));
   
    // let data = localStorage.getItem('loginDetails');
    // console.log(data);
  
// }
// const showData = () =>{
//   // let data = localStorage.getItem('loginDetails');
//   // console.log(data[1]);
//   let rawdata = sessionStorage.getItem('loginDetails');
//   let data = JSON.parse(rawdata)
//   console.log(data.password);
}
  return (
    <Row className='pt-5'>
      <Col md={{ span: 6, offset: 3 }} sm={12}>
        <Card style={{ width: 'auto', margin: '10px', padding: '20px' }}>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email" name="email" value={loginDetails.email} onChange={handleInput} />
                <Form.Text className="text-danger">{loginDetails.error_list.email}
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
                <Form.Control type="password" placeholder="Enter password" name="password" value={loginDetails.password} onChange={handleInput} />
                <Form.Text className="text-danger">{loginDetails.error_list.password}
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
            {/* <Button variant="primary" className="mt-5" onClick={()=> showData()}>
                Show Storage
              </Button> */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
  }

export default Login;