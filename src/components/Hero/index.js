import React from "react";
import {Link} from 'react-router-dom';
import kitchen from '../../assets/img/kitchen.jpg';
import badroom from '../../assets/img/badroom.jpg';
import kidsroom from '../../assets/img/kidsroom.jpg';
import bathroom from '../../assets/img/bathroom.jpg';
import livingroom from '../../assets/img/livingroom.jpg';
import dinningroom from '../../assets/img/dinningroom.jpg';

const Hero = () => {

    return (
        <>
            <section className="hero">
                <figure className='hero__figure-item hero__figure-item--1'>
                    <Link to='/kitchen'>
                    <img src={kitchen} alt="" className="hero__figure-img"/>
                    <figcaption className='hero__figure-img-cap'>
                        Kitchen
                    </figcaption>
                    </Link>
                </figure>
                <figure className='hero__figure-item hero__figure-item--2'>
                    <Link to='/badroom'>
                    <img src={badroom} alt="" className="hero__figure-img"/>
                    <figcaption className='hero__figure-img-cap'>
                        Badroom
                    </figcaption>
                    </Link>
                </figure>
                <figure className='hero__figure-item hero__figure-item--3'>
                    <Link to='/kidsroom'>
                    <img src={kidsroom} alt="" className="hero__figure-img"/>
                    <figcaption className='hero__figure-img-cap'>
                        Kids Room
                    </figcaption>
                    </Link>
                </figure>
                <figure className='hero__figure-item hero__figure-item--4'>
                    <Link to='/bathroom'>
                    <img src={bathroom} alt="" className="hero__figure-img"/>
                    <figcaption className='hero__figure-img-cap'>
                        Bathroom
                    </figcaption>
                    </Link>
                </figure>
                <figure className='hero__figure-item hero__figure-item--5'>
                    <Link to='/livingroom'>
                    <img src={livingroom} alt="" className="hero__figure-img"/>
                    <figcaption className='hero__figure-img-cap'>
                        Living Room
                    </figcaption>
                    </Link>
                </figure>
                <figure className='hero__figure-item hero__figure-item--6'>
                    <Link to='/dinningroom'>
                    <img src={dinningroom} alt="" className="hero__figure-img"/>
                    <figcaption className='hero__figure-img-cap'>
                        Dinning Room
                    </figcaption>
                    </Link>
                </figure>
            </section>
        </>
    );
}

export default Hero;