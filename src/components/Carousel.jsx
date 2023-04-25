import Carousel from 'react-bootstrap/Carousel';

const chopper = require('../Images/chopper.jpg')
const cross = require('../Images/cross.jpg')
const enduro = require('../Images/enduro.jpg')
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={chopper}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Chopper</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cross}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Cross</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={enduro}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Enduro</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;