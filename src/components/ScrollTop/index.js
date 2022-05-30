import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ScrollTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }, [location.pathname, location]);

    return null;
};

export default ScrollTop;