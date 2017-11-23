import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { fromJS, Record } from 'immutable';
import Router from 'next/router';
import DocsSoap from '../components/projects/DocsSoap';
import EverydaySpeech from '../components/projects/EverydaySpeech';
import PersonalWebsite from '../components/projects/PersonalWebsite';
import RouteLite from '../components/projects/RouteLite';
import Unsize from '../components/projects/Unsize';
import KeyboundComponent from '../components/projects/KeyboundComponent';
import ProjectNames from '../components/projects/ProjectNames';
import getProjectSlug from '../utils/getProjectSlug';

const ProjectListingWrapper = styled.article`display: flex;`;

const Project = Record({ name: '', languages: '', tech: '', component: null });

const projects = fromJS([
  new Project({
    name: 'Unsize',
    languages: 'JavaScript, HTML, CSS',
    tech: 'webpack, React, Next.js, SCSS, Immutable.js',
    component: Unsize
  }),
  new Project({
    name: 'Everyday Speech',
    languages: 'PHP, JavaScript, HTML, CSS',
    tech: 'Wordpress, Gulp, jQuery, Bootstrap',
    component: EverydaySpeech
  }),
  new Project({
    name: 'route-lite',
    languages: 'JavaScript',
    tech: 'React, webpack, npm',
    component: RouteLite
  }),
  new Project({
    name: 'docs-soap',
    languages: 'JavaScript',
    tech: 'webpack, npm, TravisCI, CodeCov.io',
    component: DocsSoap
  }),
  new Project({
    name: 'keybound-component',
    languages: 'JavaScript',
    tech:
      'React.js, Node.js, NPM, Babel, ESLint, Gulp, Codecov, Mocha, TravisCI',
    component: KeyboundComponent
  }),
  new Project({
    name: 'Personal Website',
    languages: 'JavaScript, HTML, CSS',
    tech:
      'React, Next.js, Node.js, webpack, npm, styled-components, SCSS, Bootstrap, AWS',
    component: PersonalWebsite
  })
]);

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.url.query.p || getProjectSlug(projects.first())
    };
  }

  handleProjectClick = slug => {
    Router.push({
      pathname: '/projects',
      query: { p: slug }
    });
    this.setState(() => {
      return {
        selected: slug
      };
    });
  };

  render() {
    const Project = projects.find(
      proj => getProjectSlug(proj) === this.state.selected
    ).component || <h1>hi!</h1>;
    return (
      <Layout title="Projects | Adam Markon">
        <ProjectListingWrapper>
          <ProjectNames
            projects={projects}
            selected={this.state.selected}
            handleProjectClick={this.handleProjectClick}
          />
          <Project />
        </ProjectListingWrapper>
      </Layout>
    );
  }
}
