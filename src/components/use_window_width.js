import * as React from 'react'

const useWindowWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
  
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  });

  return width
}

export default useWindowWidth