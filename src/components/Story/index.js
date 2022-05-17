import React, {useEffect, useState} from "react";
import clsx from "clsx";
import interieur from '../../assets/img/interieur.jpg';

const Story = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [animation, setAnimation] = useState(false);
    let headingClas = clsx({headingAnimation: animation})
    let textClas = clsx({textAnimation: animation})
    let imageClas = clsx({imageAnimation: animation})

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    useEffect(() => {
        if(scrollPosition > 470) {
            setAnimation(true)
        }
    }, [scrollPosition])
    console.log(scrollPosition)

    return (
        <>
            <section className="story">
                <div className="story__img-box">
                    <img src={interieur} alt="" className={`story__img-box-img ${imageClas}`}/>
                </div>
                <div className="story__text-box">
                    <h1 className={`story__text-box-heading ${headingClas}`}>Labas vakaras</h1>
                    <p className={`story__text-box-text ${textClas}`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, assumenda cumque doloribus
                        earum inventore ipsam minima neque possimus, quae quia velit voluptatem, voluptatibus!
                        Deleniti itaque magni non officiis repellat ut?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, assumenda cumque doloribus
                        earum inventore ipsam minima neque possimus, quae quia velit voluptatem, voluptatibus!
                        Deleniti itaque magni non officiis repellat ut?
                    </p>
                </div>
            </section>
        </>
    );
}

export default Story;