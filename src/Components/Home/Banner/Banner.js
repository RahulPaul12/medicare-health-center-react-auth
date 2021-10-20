import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../image/Banner/health-still-life-with-copy-space.jpg'
import banner1 from '../../../image/Banner/Navigating-Care-During-the-COVID-19-Pandemic_-How-to-Get-the-Help-You-Need-When-You-Need-It.jpg'
import banner2 from '../../../image/Banner/tinnitus-medical-condition-1024x640.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img style={{
                        width:'900px',
                        height:'450px'
                    }}
                        className="d-block w-100"
                        src={banner}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{
                        transform: 'translateY(-50%)',
                        bottom: 'initial',
                        top: '50%'
                    }}>
                        <h1  style={{
                            color:'blueviolet'
                        }}>Your Most Trusted Health Partner</h1>
                        <p>Healthy life with us be patients, happy life enjoy. Be healthy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{
                        width:'900px',
                        height:'450px'
                    }}
                        className="d-block w-100"
                        src={banner1}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{
                        transform: 'translateY(-50%)',
                        bottom: 'initial',
                        top: '50%'
                    }}>
                        <h1 
                        style={{
                            color:'blueviolet'
                        }}>We Make Quality Healthcare</h1>
                        <p>Healthy life with us be patients, happy life enjoy. Be healthy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{
                        width:'900px',
                        height:'450px'
                    }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{
                        transform: 'translateY(-50%)',
                        bottom: 'initial',
                        top: '50%'
                    }}>
                        <h1 
                        style={{
                            color:'blueviolet'
                        }}>Committed to trusted healthcare</h1>
                        <p>Healthy life with us be patients, happy life enjoy. Be healthy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;