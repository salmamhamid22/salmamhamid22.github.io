import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Education History</h1>
        <VerticalTimeline>
          {/* Education Timeline */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2020 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Engineering Degree (AI & Big Data)</h3>
            <h4 className="vertical-timeline-element-subtitle">Université Polytechnique d'Agadir (Universiapolis), Morocco</h4>
            <p>
              Completed a 5-year engineering program, with:
              <ul>
                <li>First 2 years: Preparatory Classes (covering all engineering fields)</li>
                <li>Next 2 years: Computer Science specialization</li>
                <li>Last year: AI & Big Data specialization</li>
              </ul>
            </p>
          </VerticalTimelineElement>

          {/* Internship Timeline */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 (4 months)"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern - Barid Bank</h3>
            <h4 className="vertical-timeline-element-subtitle">Rabat, Morocco</h4>
            <p>
              Worked on AI-based applications, assisting with data analysis, optimization, and developing solutions for financial systems.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 (2 months)"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern - Office Régional de Mise en Valeur Agricole Souss Massa (ORMVA)</h3>
            <h4 className="vertical-timeline-element-subtitle">Agadir, Morocco</h4>
            <p>
              Worked on developing a recruitment management system for human resources, improving the efficiency of recruitment processes.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 (6 weeks)"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intern - SSAM Partners</h3>
            <h4 className="vertical-timeline-element-subtitle">Agadir, Morocco</h4>
            <p>
              Assisted with AI and data analysis projects, focusing on machine learning and process optimization.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
