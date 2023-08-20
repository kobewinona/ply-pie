'use client'

import {useEffect, useState} from 'react';


const Responsive = ({element: Component, breakpoint, ...props}) => {
  const [isMobile, setIsMobile] = useState(false);
  
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
    isMobile ? <Component isMobile={true} {...props} /> : <Component isMobile={false} {...props} />
  );
};

export default Responsive;