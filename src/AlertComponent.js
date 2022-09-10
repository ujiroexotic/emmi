import Alert from 'react-bootstrap/Alert';

function AlertComponent({error}) {
  return (
      
        <Alert variant="warning">
          {error}
        </Alert>
    
  );
}

export default AlertComponent;