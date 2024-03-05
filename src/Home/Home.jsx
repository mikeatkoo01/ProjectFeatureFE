import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamPhoto from './TeamPhoto.png';
import Login from './Login';

function Home() {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(!isLoggedIn);
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h1>About Us: L²</h1>
                    <p>
                        Welcome to L², where the convergence of passion for software engineering and an appreciation for the extraordinary has given birth to a unique online shopping experience.
                    </p>
                    <p>
                        Our story begins with Lucy and Liam, two driven individuals who embarked on a transformative journey through a software reskilling cohort at Lloyds Banking Group. Under the guidance of the esteemed trainer, <i>Jordan Harrison</i>, a renowned software engineer, they honed their skills and absorbed the intricacies of coding.
                    </p>
                    <p>
                        Lucy and Liam's original aspiration was to become software engineers for Lloyds Banking Group. However, destiny had a different path in mind. Undeterred by the twists of fate, they joined forces and ventured into the world of entrepreneurship, carving out a space for themselves in the vast digital landscape.
                    </p>
                    <p>
                        Our journey took an unexpected turn when Lucy and Liam, drawing inspiration from a legacy project at Lloyds, decided to weave their coding expertise into an online shopping platform. Thus, L² was born, a haven for those seeking exotic goods and, for the more adventurous, some intriguing and questionable occult artifacts.
                    </p>
                    <p>
                        The success of L² has been nothing short of phenomenal, growing rapidly from its modest beginnings. What sets us apart is not just the diversity of our offerings but the dedication and passion that Lucy and Liam infuse into every line of code. Our online shop is a testament to their unwavering commitment to deliver a seamless and enjoyable shopping experience.
                    </p>
                    <p>
                        At L², we believe in pushing boundaries, embracing the extraordinary, and challenging the status quo. Our team may be small, but our ambitions are grand. We invite you to explore our digital emporium, where innovation meets curiosity, and discover treasures that transcend the ordinary.
                    </p>
                    <p>
                        Thank <b>you</b> for being a part of our journey. Your adventure begins here at L².
                    </p>
                    <h2>Company Updates: Attendance to the Easter Weekend team excursion has become <u>mandatory</u>. Disciplinary action may be taken against non-attendees.</h2>
                    <p>
                        We would like to remind everyone, including our esteemed CEO Lucy Yates, that it is against UK employee law to engage in any activity that inflicts physical harm or discomfort on staff members, even as a means of addressing efficiency concerns.
                    </p>
                </div>
            ) : (
                <div>
                    <h1><b>REMINDER </b>to stay vigilant when logging in: </h1>
                    <ul>
                        <li>Secure Your Surroundings: Be cautious of your environment and ensure privacy when logging in. Avoid public spaces for sensitive logins.</li>
                        <li>Check for Suspicious Activity: Before entering credentials, verify the authenticity of the website or platform. Report any unusual prompts or requests.</li>
                        <li>Protect Your Passwords: Avoid sharing passwords and update them regularly. Strong, unique passwords are your first line of defense.</li>
                        <li>Report Anomalies Promptly: If you notice anything unusual during the login process or suspect unauthorized access, report it immediately to our IT team.</li>
                    </ul>
                    <img src={TeamPhoto} style={{height:300, width:300}}/> 
                    <Login onLogin={handleLogin} />
                </div>
            )}
            <br />
        </div>
    );
}

export default Home;
