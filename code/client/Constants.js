import { List, Map } from 'immutable';

const northeasternEducation = new List([
  new Map({left: 'Northeastern University', right: 'September 2013 – Present'}),
  new Map({left: 'College of Computer and Information Science', right: 'Boston, MA'}),
  new Map({left: 'Canddidate for Bachelor of Science in Computer Science and Business Administration, 2018', right: ''})
]);

const eaganEducation = new List([
  new Map({left: 'Eagan High School', right: 'June 2013'}),
  new Map({left: '', right: 'Eagan, MN'})
]);

const docsSoapHeader = new List([
  new Map({left: 'docs-soap', right: '2016'}),
  new Map({left: 'npmjs.com/package/docs-soap', right: '~2,000 downloads'})
]);

const languagesData = new List([
  new Map({left: 'JavaScript', right: '5'}),
  new Map({left: 'ReactJS • BackboneJS • Handlebars • jQuery • NodeJS'}),
  new Map({left: 'HTML', right: '5'}),
  new Map({left: 'CSS', right: '4'}),
  new Map({left: 'Java', right: '4'}),
  new Map({left: 'Python', right: '3'}),
  new Map({left: 'Ruby', right: '3'}),
  new Map({left: 'SQL', right: '3'}),
  new Map({left: 'Obective-C', right: '2'}),
  new Map({left: 'C', right: '2'}),
]);

export default {
  docsSoapHeader,
  eaganEducation,
  languagesData,
  northeasternEducation
};
