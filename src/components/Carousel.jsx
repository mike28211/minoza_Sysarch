import Carousel from 'react-bootstrap/Carousel';

const chopper = require('../Images/chopper.jpg')
const cafe = require('../Images/caferacer.jpg')
const sport = require('../Images/sportbike.jpg')
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
          <p>A chopper is a type of custom motorcycle which emerged in the US state of California in the late 1950s.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cafe}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Cafe Racer</h3>
          <p>A café racer is a genre of sport motorcycles that originated among British motorcycle enthusiasts of the early 1960s in London.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sport}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Sport Bike</h3>
          <p>
          A sport bike is a motorcycle designed and optimized for speed, acceleration, braking, and cornering on asphalt concrete race tracks and roads.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;