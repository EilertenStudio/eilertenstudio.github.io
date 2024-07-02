import './HomePage.css'
import {IParallax, Parallax, ParallaxLayer} from "@react-spring/parallax";
import {useRef} from "react";

interface PageProps {
    offset: number
    onChange: () => void
}

const Page = ({offset, onChange}: PageProps) =>
    <>
        <ParallaxLayer offset={offset} onClick={onChange}>
            ciao mondo!
            {offset}
        </ParallaxLayer>
    </>

export default function HomePage() {
    const parallax = useRef<IParallax>(null)
    const user = useRef<{
        scrollValue: number,
        parallaxPage: number
    }>({
        scrollValue: 0,
        parallaxPage: 0
    })

    const toNextPage = () => {
        if (parallax.current) {
            parallax.current.scrollTo(++user.current.parallaxPage)
        }
    }

    const toPreviousPage = () => {
        if (parallax.current) {
            parallax.current.scrollTo(--user.current.parallaxPage)
        }
    }

    return (
        <Parallax className={"parallax-container"}
                  pages={2}
                  ref={parallax}
                  onScrollCapture={(it) => {
                      // console.log(it.currentTarget.scrollTop)
                      // console.log(user.current.scrollValue)
                      // console.log(user.current.parallaxPage)
                      //
                      // if(it.currentTarget.scrollTop > user.current.scrollValue) {
                      //     toNextPage()
                      // }
                      // else {
                      //     toPreviousPage()
                      // }
                      //
                      // user.current.scrollValue = it.currentTarget.scrollTop;
                      // if(user.current.parallaxPage < 0) {
                      //     user.current.parallaxPage = 0
                      // }
                  }}
        >
            <Page offset={0} onChange={() => toNextPage(1)}/>
            <Page offset={1} onChange={() => toNextPage(2)}/>
            <Page offset={2} onChange={() => toNextPage(0)}/>
        </Parallax>
        // <Parallax pages={4}>
        //     <ParallaxLayer
        //         offset={1}
        //         speed={1}
        //         factor={2}
        //         style={{
        //             backgroundImage: 'url("https://i.pinimg.com/originals/8e/61/9d/8e619de434334b37fa0ce4503c140e93.jpg")',
        //             backgroundSize: 'cover'
        //         }}
        //         onProgress={(it) => {
        //             console.log(it);
        //         }}
        //     />
        //     <ParallaxLayer
        //         offset={2}
        //         speed={1}
        //         factor={4}
        //         style={{
        //             backgroundImage: 'url("https://stabilityai-stable-diffusion-3-medium.hf.space/file=/tmp/gradio/4f8fd250d151e94c8207c91904f9c6997f81bb52/image.webp")',
        //             backgroundSize: 'cover'
        //         }}
        //     />
        //     <ParallaxLayer
        //         offset={0.2}
        //         speed={0.05}
        //     >
        //         Ciao
        //     </ParallaxLayer>
        //     <ParallaxLayer
        //         offset={3.2}
        //         speed={0.05}
        //     >
        //         Mondo
        //     </ParallaxLayer>
        // </Parallax>

        // {/*// <Parallax className="landscape">*/}
        //     {/*<h1>Hello!</h1>*/}
        //     {/*<div>test</div>*/}
        //     {/*<svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">*/}
        //     {/*/!*        /!*Background*!/*!/*/}
        //     {/*    <rect width="100%" height="100%" fill="black"/>*/}
        //
        //     {/*/!*        /!*Planet body*!/*!/*/}
        //     {/*    <circle cx="100" cy="100" r="50" fill="blue"/>*/}
        //
        //     {/*/!*        /!*Rings around the planet*!/*!/*/}
        //     {/*    <ellipse cx="100" cy="100" rx="80" ry="30" fill="none" stroke="grey" stroke-width="2"/>*/}
        //     {/*    <ellipse cx="100" cy="100" rx="90" ry="40" fill="none" stroke="lightblue" stroke-width="2"/>*/}
        //     {/*    <ellipse cx="100" cy="100" rx="100" ry="50" fill="none" stroke="white" stroke-width="2"/>*/}
        //
        //     {/*/!*        /!*Additional decorative elements, stars, etc.*!/*!/*/}
        //     {/*    <circle cx="30" cy="30" r="2" fill="white"/>*/}
        //     {/*    <circle cx="170" cy="40" r="1" fill="white"/>*/}
        //     {/*    <circle cx="50" cy="150" r="1.5" fill="white"/>*/}
        //     {/*    <circle cx="140" cy="120" r="1" fill="white"/>*/}
        //     {/*    <ol />*/}
        //     {/*</svg>*/}
        //     {/*<img src={"https://i.pinimg.com/originals/8e/61/9d/8e619de434334b37fa0ce4503c140e93.jpg"} />*/}
        //     {/*<img src={"https://stabilityai-stable-diffusion-3-medium.hf.space/file=/tmp/gradio/e598e86930748ceb8fc4a0be4195a75fe88c72fa/image.webp"} />*/}
        //     {/*<img src={"https://stabilityai-stable-diffusion-3-medium.hf.space/file=/tmp/gradio/4f8fd250d151e94c8207c91904f9c6997f81bb52/image.webp"} />*/}
        // {/*</Parallax>*/}
    )
}

// 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
