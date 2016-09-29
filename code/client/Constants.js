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

export default {
  eaganEducation,
  northeasternEducation
};
