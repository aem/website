import React from 'react';
import styled from 'styled-components';
import { textColorGrayLight, transitionAllMed, textColorPrimary } from 'styles';

const StyledProjectName = styled.div`
  height: 100%;
  transition: ${transitionAllMed};

  h3:not(.selected) {
    color: ${textColorGrayLight};

    &:hover {
      color: ${textColorPrimary};
    }
  }

  .selected {
    margin-top: 15px;
    margin-bottom: 5px;
  }

  div {
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }

  .selected ~ div {
    transition: height 0.3s ease-in-out;
    height: 50px;
    p {
      font-size: 13px;
      margin: 0;
      padding: 0;
    }
  }
`;

const ProjectName = ({ name, languages, tech, selected }) => {
  return (
    <StyledProjectName>
      <h3 className={selected ? 'selected' : ''}>{name}</h3>
      <div>
        <p>
          <strong>Languages:</strong> {languages}
        </p>
        <p>
          <strong>Tech Used:</strong> {tech}
        </p>
      </div>
    </StyledProjectName>
  );
};

export default ProjectName;
