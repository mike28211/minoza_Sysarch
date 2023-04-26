import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const cardimage = require('../Images/motor.jpg')
function BasicExample() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cardimage} />
        <Card.Body>
          <Card.Title>Yamaha YZF R15 155</Card.Title>
          <Card.Text>
          Manufactured by Yamaha Motor Company since 2008, the Yamaha YZF R15 155 is a sport bike giving riders a suite of innovative technology coupled with the generic racing experience on any road.
          </Card.Text>
          <Button variant="primary">See more Details</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default BasicExample;