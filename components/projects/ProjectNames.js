import React from 'react';
import styled from 'styled-components';
import { textColorBlack } from 'styles';
import ProjectName from './ProjectName';
import getProjectSlug from '../../utils/getProjectSlug';

const ProjectNamesWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 25%;
  flex-shrink: 0;
  padding-right: 30px;

  a {
    cursor: pointer;
    color: ${textColorBlack};
    text-decoration: none;
  }
`;

class ProjectNames extends React.PureComponent {
  handleProjectClick(slug, evt) {
    this.props.handleProjectClick(slug, evt);
    evt.preventDefault();
  }

  render() {
    return (
      <ProjectNamesWrapper>
        {this.props.projects.map(proj => (
          <a
            key={proj.name}
            onClick={this.handleProjectClick.bind(this, getProjectSlug(proj))}
          >
            <ProjectName
              name={proj.name}
              description={getProjectSlug(proj)}
              languages={proj.languages}
              tech={proj.tech}
              selected={this.props.selected === getProjectSlug(proj)}
            />
          </a>
        ))}
      </ProjectNamesWrapper>
    );
  }
}

export default ProjectNames;
