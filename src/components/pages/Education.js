import './Education.css'

const Education = () => {
    return (
        <div className='education'>
            <div className="education-text">
                <div className='education-wrapper'>
                    <div className="education-left">
                        <h1>Education</h1>
                        <h5><span className='year'>2020-Present:</span> B.Sc. in Computer Science<span className='blue'>Reichman University</span></h5>
                        <p>
                            2nd year C.S student, minoring in Cogintive Psychology.<br/>
                            Studying theoratical mathematics, data structures, algorithms and the fundamentals of modern programming.
                        </p>
                        <h5><span className='year'>2020:</span> <span className='blue'>Psychometric Exam</span></h5>
                        <p>
                            <ul>
                                <li>
                                    General Score: 718.
                                </li>
                                <li>
                                    Quantitative Score: 730.
                                </li>
                            </ul>
                        </p>
                        <h5><span className='year'>2019:</span> Fullstack Dev Course in Java<span className='blue'>John Bryce </span></h5>
                        <p>
                        Graduated with honors, with an average of 95, from a Java-Fullstack development course. I learned the principals
                        of OOP programming, got familiarized with Back-End and Front-End technologies.<br/>
                        Passed Oracle’s Java SE 8 Associate exam and got a Java programmer certification.
                        </p>
                        <h5><span className='year'>2013-2016:</span> High School <span className="blue">Ahad Ha'am High School</span></h5>
                        <p>
                        Graduated 12 years. Majored in Physics and Computer Science. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;