import React from 'react';
import { Carousel } from 'react-bootstrap';

const Testimonial = () => {
    return (
        <div className="m-5 mb-5 pb-5 ">

<Carousel className="m-5 mb-5 pb-5 ">
                <Carousel.Item>
                    <img style={{
                        width:'100px',
                        height:'200px'
                    }}
                        className="w-25"
                        src="https://us.123rf.com/450wm/rido/rido2002/rido200200099/141040315-happy-smiling-african-doctor-looking-at-camera-in-medical-office-portrait-of-black-man-doctor-workin.jpg?ver=6"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{
                        transform: 'translateY(-50%)',
                        bottom: 'initial',
                        top: '50%'
                    }}>
                        <h1  style={{
                            color:'blueviolet'
                        }}>Mr. Btute</h1>
                       <p><h5 style={{
                            color:'black',
                            marginLeft:'50px'
                        }} className="ps-5 m-1">Healthy life with us be patients, happy life enjoy. Be healthy.Best quality service in this hospital. Healty life. Better helpful doctors And everthing.</h5></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{
                        width:'100px',
                        height:'200px'
                    }}
                        className="w-25"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGH2vrZZXFwmJqr-2Np0STlmW1wPBQEq8uCucwUjJ0mVpMpn_Cdo3cdoxrmQ-LlHRANos&usqp=CAU"
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{
                        transform: 'translateY(-50%)',
                        bottom: 'initial',
                        top: '50%'
                    }}>
                        <p><h5 style={{
                            color:'black',
                            marginLeft:'50px'
                        }} className="ps-5 m-1">Healthy life with us be patients, happy life enjoy. Be healthy.Best quality service in this hospital. Healty life. Better helpful doctors And everthing.</h5></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{
                        width:'100px',
                        height:'200px'
                    }}
                        className=" w-25"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlj3AS3gczyyMRlmoRH84lfCgo2MhY7n3uQ&usqp=CAU"
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
                        }}>Mrs. wings</h1>
                        <p><h5 style={{
                            color:'black',
                            marginLeft:'50px'
                        }} className="ps-5 m-1">Healthy life with us be patients, happy life enjoy. Be healthy.Best quality service in this hospital. Healty life. Better helpful doctors And everthing.</h5></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Testimonial;