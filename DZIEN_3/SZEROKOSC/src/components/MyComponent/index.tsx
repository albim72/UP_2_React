import {FC} from 'react'
import WidthInnerWidth from "./WidthInnerWidth";

type Props = {
    innerWidth: number
}

const MyComponent: FC<Props> = ({innerWidth}) => <div>szrokość okna przeglądarki: {innerWidth}</div>

export default WidthInnerWidth(MyComponent)
