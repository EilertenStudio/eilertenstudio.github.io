import {Parallax} from 'react-scroll-parallax';

import './HomePage.css'

export default function HomePage() {
    return (
        <Parallax style={{ background: 'blue' }} className="test">
            <h1>Hello!</h1>
        </Parallax>
    )
}
