import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faDatabase, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React.js",
    "Python",
    "JavaScript",
    "HTML5",
    "Spring Boot",
    "Flask",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "PyTorch",
    "Machine Learning",
    "Deep Learning",
    "Kafka",
    "Hadoop",
    "Arduino"
];

const labelsSecond = [
    "Git",
    "Docker",
    "AWS",
    "Linux",
    "Snowflake",
    "Pandas",
];

const labelsThird = [
    "OpenAI",
    "LangChain"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                
                {/* AI & Big Data Engineer */}
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>AI & Big Data Engineer</h3>
                    <p>I design and build AI-powered solutions that leverage Machine Learning, Deep Learning, and Big Data technologies to extract insights and drive intelligent decision-making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Big Data & Scalable Systems */}
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Big Data & Scalable Systems</h3>
                    <p>With expertise in distributed systems and cloud computing, I design scalable data pipelines and infrastructure for high-performance AI applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Generative AI & LLMs */}
                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>Generative AI & LLMs</h3>
                    <p>I develop and integrate cutting-edge Generative AI models, leveraging LLMs like OpenAI and LangChain to create intelligent, automated solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;
