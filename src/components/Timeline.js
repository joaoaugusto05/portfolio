import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaSchool, FaPalette, FaBook, FaTools, FaFileImport } from 'react-icons/fa';


export const Timeline = () =>{
    return(
  <section className="timelineSec" id = "timelineSec">
 <VerticalTimeline>
    
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(255, 255, 255, 0.1)', 
                    color: '#fff',
                    borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(5px)'}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2019 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSchool />}
  >
    
    <h3 className="vertical-timeline-element-title">USP Student</h3>
    <h4 className="vertical-timeline-element-subtitle">São Carlos, BR</h4>
    <p>
      The greatest school of latin america!
    </p>

  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(255, 255, 255, 0.1)', 
                    color: '#fff',
                    borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(5px)'}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2019 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSchool />}
  >
    
    <h3 className="vertical-timeline-element-title">Webdesigner Freelancer</h3>
    <h4 className="vertical-timeline-element-subtitle">~</h4>
    <p>
      HTML, CSS, JS, React, UX/UI
    </p>

  </VerticalTimelineElement>

  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(255, 255, 255, 0.1)', 
                    color: '#fff',
                    borderRight: '1px solid rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(5px)'}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2020 - 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaPalette />}
  >
    
    <h3 className="vertical-timeline-element-title">Art Departament</h3>
    <h4 className="vertical-timeline-element-subtitle">SAEComp, USP</h4>
    <p>
      Member of the art group, creating flyers, videos, etc. Photoshop, Sony Vegas, Canvas.
    </p>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(255, 255, 255, 0.1)', 
                    color: '#fff',
                    borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(5px)'}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaFileImport />}
  >
    
    <h3 className="vertical-timeline-element-title">Data Analyst</h3>
    <h4 className="vertical-timeline-element-subtitle">FAPESP</h4>
    <p>
    Scientific Initiation aiming to understand the performance of groups with any type of disability in ENEM.
    </p>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(255, 255, 255, 0.1)', 
                    color: '#fff',
                    borderRight: '1px solid rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(5px)'}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaTools />}
  >
    
    <h3 className="vertical-timeline-element-title">Tech Director</h3>
    <h4 className="vertical-timeline-element-subtitle">SAEComp, USP</h4>
    <p>
      Team Leading, creation of websites, bots and scripts.
    </p>

  </VerticalTimelineElement>


  <VerticalTimelineElement
    contentStyle={{color: '#fff'}}
    className="vertical-timeline-element--work"
    date="2023 - present"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaBook /> }
  > 
    <div className="timelineJob">
    <h3>Data Engineer</h3>
    <h4>Mobly</h4>
    <p>
      Build, test, maintain and develop any improvements related to the emprise data
    </p>
    </div>
  </VerticalTimelineElement>
</VerticalTimeline>
</section>
    )
}
