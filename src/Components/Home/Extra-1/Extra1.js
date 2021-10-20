import React from 'react';
import { Accordion } from 'react-bootstrap';
import img from '../../../image/Extra1/doctor-ufe-foccupation-pinterest-boy-cards-19.png'

const Extra1 = () => {
    return (
        <div className="mb-5 pb-5">
            <div className="row mb-2">
                <div class="col">
                    <img src={img} alt="" />
                </div>
                <div class="col pt-5 me-5">
                   <h1>Welcome to our MediCare Center.</h1>
                   <p>Here you get better services for your better health, A healthy life will you get. Be healthy Be happy
                   Here you get better services for your better health, A healthy life will you get. Be healthy Be happy.
                   Here you get better services for your better health, A healthy life will you get. Be healthy Be happy.
                   Here you get better services for your better health, A healthy life will you get. Be healthy Be happy.
                   Here you get better services for your better health, A healthy life will you get. Be healthy Be happy.
                   Here you get better services for your better health, A healthy life will you get. Be healthy Be happy..</p>
                </div>
            </div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Why Choose us?</Accordion.Header>
                    <Accordion.Body>
                    A medical procedure that involves testing a sample of blood, urine, or other substance from the body. Laboratory tests can help determine a diagnosis, plan treatment, check to see if treatment is working, or monitor the disease over time.General Surgery is a discipline of surgery having a central core of knowledge embracing anatomy, 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>About our service</Accordion.Header>
                    <Accordion.Body>
                    physiology, metabolism, immunology, nutrition, pathology, wound healing, shock and resuscitation, intensive care, and neoplasia, which are common to all surgical specialties. Mental health refers to cognitive, behavioral, and emotional well-being. if your mental or emotional state quickly gets worse, or you're worried about someone you know - help is available. You're not alone; talk to someone you 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>whats service can i get</Accordion.Header>
                    <Accordion.Body>
                    physiology, metabolism, immunology, nutrition, pathology, wound healing, shock and resuscitation, intensive care, and neoplasia, which are common to all surgical specialties. Mental health refers to cognitive, behavioral, and emotional
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Extra1;