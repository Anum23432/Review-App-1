import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from './images/op15.jpg';
import logo2 from './images/sam6.jpg';
import logo3 from './images/p4.jpg';
import logo4 from './images/hu15.jpg';
import Animation from './Animation';

function Home() {

    return (
        <>
            <br />
            <div className="carousel" style={{ width: '50%', marginLeft: '26%' }}>
                <Carousel fade >
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={logo1}
                            alt="First slide"

                        />
                        <Carousel.Caption>
                            <h3>Most Reviewed Items</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={logo2}
                            alt="Second slide"

                        />

                        <Carousel.Caption>
                            <h3>Most Reviewed Items</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={logo3}
                            alt="Third slide"

                        />

                        <Carousel.Caption>
                            <h3>Most Reviewed Items</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={logo4}
                            alt="fourth slide"

                        />

                        <Carousel.Caption>
                            <h3>Most Reviewed Items</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div><br /><br />
            <h2>Going to buy a mobile?</h2> <br />
            {/* <h2> Wait!! Don't forget to check  </h2> */}
            <Animation />

        </>
    )
}

export default Home;