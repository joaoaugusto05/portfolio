import React from "react";
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/chibiMe.png';
import { useEffect, useState } from "react"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 1500;
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Coder","Data Engineer", "Web Designer"];
;
    useEffect(() =>{
        let ticker =setInterval(() =>{
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length +1);
        setText(updatedText);

        if(isDeleting){
            setDelta(200);
        }
        if(!isDeleting && updatedText === fullText){
            setDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                <Col xs = {12} md = {6} xl = {7}>
                    <span className="tagline">
                        Welcome to my portfolio!
                    </span>

                    <h1>{`Hi I'm just a curious `}<br/><span className="wrap">{text}</span><span id="pointer">|</span></h1>
                    <p> Lorem impsum est francheses et je ne sais pas quille faire</p>
                    <button onClick={() => console.log('Conect')}>Let's connect <ArrowRightCircle size = {25}/></button>
                </Col>
                <Col xs = {12} md = {6} xl = {5}>
                    <img src={headerImg} alt="Header img"/>
                </Col>
                </Row>
            </Container>

        </section>
    )
}