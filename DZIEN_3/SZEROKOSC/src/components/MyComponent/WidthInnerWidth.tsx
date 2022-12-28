import { useEffect, useState } from 'react';


const WidthInnerWidth = (Component: any) => (props: any) => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setInnerWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize',handleResize)
        
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])
    return <Component {...props} innerWidth = {innerWidth}/>
}

export default WidthInnerWidth
