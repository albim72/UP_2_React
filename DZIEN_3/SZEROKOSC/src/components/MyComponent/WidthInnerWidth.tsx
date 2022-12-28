import { useEffect, useState } from 'react';


const WidthInnerWidth = (Component: any) => (props: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setInnerWidth(window.innerWidth)
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        window.addEventListener('resize',handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])
    return <Component {...props} innerWidth = {innerWidth}/>
}

export default WidthInnerWidth
