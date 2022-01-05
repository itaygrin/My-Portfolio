import './Home.css'
import Typewriter from 'typewriter-effect'
import { useEffect } from 'react'
const Home = () => {

    const typeWriterEffect = () => {
        return (
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('')
                        .callFunction(() => {
                            // console.log('String typed out!');
                        })
                        .pauseFor(2500)
                        .deleteAll()
                        .callFunction(() => {
                            // console.log('All strings were deleted');
                        })
                        .start();
                }}
                options={{
                    strings: ['A Computer Science Student \n @Reichman_University.', 'An enthusiastic Developer.', 'A Creator.',],
                    autoStart: true,
                    loop: true,

                }}
            />
        );
    }

    return (
        <div className="home">
            {/* <video autoPlay muted loop id='myVideo'>
                <source src='http://10.0.0.19:8080/Type.mp4' type='video/mp4'/>
            </video> */}
            <div className="landing">
                <div className='landing-wrapper'>
                    <div className="landing-left">
                        <h1>Hi there!
                            👋<br />I'm Itay.</h1>
                        <h2>{typeWriterEffect()}</h2><br />
                        <p>
                            Passionate about programming and new technology<br />
                            Here's a glimpse of what I do, hope you'd like my stuff.</p>
                        <ul>
                            <li><p>Back-End</p></li>
                            <li><p>C.S Courses</p></li>
                            <li><p>Way too much math</p></li>
                            <li><p>Learning new things</p></li>
                        </ul>
                    </div>
                    <div className="landing-right">
                        <img src="./images/Face_image.png" alt="Itay Grinberg's magnificent face" width={"300px"}></img>
                    </div>
                </div>
                <img src='./images/Scroll.png' alt='scroll down' className='scroll'></img>
            </div>

            <div className="languages">
                <h2>Languages</h2>
                <div className="programs">
                    <img src="./images/Java.png" alt="Java" />
                    <img src="./images/Javascript.png" alt="Javascript" />
                    <img src="./images/C.png" alt="C" />
                    <img src="./images/CSharp.png" alt="C#" />
                    <img src="./images/Python.png" alt="Python" />
                </div>
            </div>

        </div>
    );
}

export default Home;