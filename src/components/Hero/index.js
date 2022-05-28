import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {Context as ProductsContext} from '../../context/productsContext'
import kitchen from '../../assets/img/kitchen.jpg';
import badroom from '../../assets/img/badroom.jpg';
import kidsroom from '../../assets/img/kidsroom.jpg';
import bathroom from '../../assets/img/bathroom.jpg';
import livingroom from '../../assets/img/livingroom.jpg';
import dinningroom from '../../assets/img/dinningroom.jpg';

const Hero = () => {
    const {state: {categories}} = useContext(ProductsContext)

    return (
        <>
            <section className="hero">
                {/*{categories.map((category, index) => {*/}
                {/*    return (*/}
                {/*        <figure key={category.id} className={`hero__figure-item hero__figure-item--${index + 1}`}>*/}
                {/*            <Link to={`/${category.name.toLowerCase()}`}>*/}
                {/*                <img src={category.image} alt={category.name} className="hero__figure-img"/>*/}
                {/*                <figcaption className='hero__figure-img-cap'>*/}
                {/*                    {category.name}*/}
                {/*                </figcaption>*/}
                {/*            </Link>*/}
                {/*        </figure>*/}
                {/*    )*/}
                {/*})}*/}
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