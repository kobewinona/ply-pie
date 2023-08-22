'use client'

import {useEffect, useState} from 'react';


const Responsive = ({element: Component, breakpoint, ...props}) => {
  const [isMobile, setIsMobile] = useState(null);
  
  const handleResize = () => {
    if (window.innerWidth < breakpoint) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }
  
  useEffect(() => {
    setIsMobile(window.innerWidth <= breakpoint);
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <Component isMobile={isMobile} {...props} />
  );
};

export default Responsive;