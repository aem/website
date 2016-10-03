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
  new Map({left: '<a href="https://npmjs.com/package/docs-soap">npmjs.com/package/docs-soap</a>', right: '~2,000 downloads'})
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

const softwareData = new List([
  new Map({left: 'JetBrains IDEs', right: '5'}),
  new Map({left: 'JIRA', right: '5'}),
  new Map({left: 'macOS', right: '5'}),
  new Map({left: 'Git', right: '4'}),
  new Map({left: 'Jenkins CI', right: '4'}),
  new Map({left: 'Travis CI', right: '4'}),
  new Map({left: 'Windows', right: '3'}),
  new Map({left: 'Linux', right: '3'}),
  new Map({left: 'Bash/Terminal', right: '3'}),
]);

const hubspotHeader = new List([
  new Map({left: 'HubSpot', right: 'January 2016 – June 2016'}),
  new Map({left: 'Software Developer', right: 'Cambridge, MA'})
]);

const infinioHeader = new List([
  new Map({left: 'Inifnio Systems', right: 'January 2015 – December 2015'}),
  new Map({left: 'Software Developer', right: 'Cambridge, MA'})
]);

const usBankHeader = new List([
  new Map({left: 'U.S. Bank', right: 'June 2014 – December 2014'}),
  new Map({left: 'Enterprise Information Systems Developer', right: 'Minneapolis, MN; Boston, MA'})
]);

const northeasternHeader = new List([
  new Map({left: 'Northeastern University', right: 'September 2013 – Present'}),
  new Map({left: 'Video Producer', right: 'Boston, MA'})
]);

export default {
  docsSoapHeader,
  eaganEducation,
  hubspotHeader,
  infinioHeader,
  languagesData,
  northeasternEducation,
  northeasternHeader,
  softwareData,
  usBankHeader
};
