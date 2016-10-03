import { hubspotHeader, infinioHeader, northeasternHeader, usBankHeader } from '../../Constants';
import React from 'react';
import SectionHeader from './SectionHeader';

export default () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <SectionHeader rowData={hubspotHeader} />
      <p>
        Developed, tested, and deployed a rich text editor for publishing blog posts to HubSpot’s blogging platform using DraftJS and ReactJS • Developed a JavaScript Selenium testing library to easily create automated user interface testing on HubSpot’s stack • Interacted with customers to ensure any issues were handled in a timely manner
      </p>
      <SectionHeader rowData={infinioHeader} />
      <p>
        Redesigned the Infinio Installer to enhance ease of use and efficiency for end users • Contributed to the Infinio product as a full-stack engineer using BackboneJS, Java Spring 4, and Tomcat • Triaged and responded to customer issues in a timely manner
      </p>
      <SectionHeader rowData={usBankHeader} />
      <p>
        Designed and developed tools to monitor internal mainframe and server activity • Presented project to U.S. Bank’s Chief Information Officer who allocated $30,000 to continue the project • Was hired on to the team part-time after the conclusion of the internship
      </p>
      <SectionHeader rowData={northeasternHeader} />
      <p>
        Operate professional video and audio equipment to produce live television broadcasts • Produce and direct live broadcasts, including the 2015 Hobey Baker awards on NHL Network and several games on the American Sports Network, Comcast SportsNet, and the New England Sports Network
      </p>
    </div>
  );
};
