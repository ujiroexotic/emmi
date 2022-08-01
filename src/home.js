//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentColumn from './contentColumn';
//import Card from 'react-bootstrap/Card'

const HomeComponent = () => {

    // let styleHome = {
    //     border: '1px solid black'
    // };
    //let name = "Ujiro"
    return ( 
        <div>
            
                <Row className ='container-fluid mt-5'>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                            <ContentColumn></ContentColumn>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                            <ContentColumn></ContentColumn>
                        </div>
                    </Col>  <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                            <ContentColumn></ContentColumn>
                        </div>
                    </Col>  <Col xs={12} md={4} lg={3}>
                        <div className='p-3'>
                            <ContentColumn></ContentColumn>
                        </div>
                    </Col>

                </Row>
        
        </div>
     );
}
 
export default HomeComponent;
