// React
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        document.querySelector('.page').scrollTo(0, 0)
    }, [location]);

    return (<>{props.children} </>)
};

ScrollToTop.propTypes = {
    children: React.Children
}

export default ScrollToTop;