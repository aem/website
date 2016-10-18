import { List, Map } from 'immutable';

const northeasternEducation = new List([
  new Map({left: 'Northeastern University', right: 'September 2013 – Present'}),
  new Map({left: 'College of Computer and Information Science', right: 'Boston, MA'}),
  new Map({left: 'Candidate for Bachelor of Science in Computer Science and Business Administration, 2018', right: ''})
]);

const eaganEducation = new List([
  new Map({left: 'Eagan High School', right: 'June 2013'}),
  new Map({left: '', right: 'Eagan, MN'})
]);

const docsSoapHeader = new List([
  new Map({left: 'docs-soap', right: '2016'}),
  new Map({left: '<a href="https://npmjs.com/package/docs-soap">npmjs.com/package/docs-soap</a>', right: '~3,000 downloads'})
]);

const languagesData = new List([
  new Map({left: 'JavaScript', right: 5}),
  new Map({left: 'ReactJS • BackboneJS • Handlebars • jQuery • NodeJS'}),
  new Map({left: 'HTML', right: 5}),
  new Map({left: 'CSS', right: 4}),
  new Map({left: 'Java', right: 4}),
  new Map({left: 'R', right: 3}),
  new Map({left: 'Python', right: 3}),
  new Map({left: 'Ruby', right: 3}),
  new Map({left: 'SQL', right: 3}),
  new Map({left: 'Obective-C', right: 2}),
  new Map({left: 'C', right: 2}),
]);

const softwareData = new List([
  new Map({left: 'JetBrains IDEs', right: 5}),
  new Map({left: 'JIRA', right: 5}),
  new Map({left: 'macOS', right: 5}),
  new Map({left: 'Git', right: 4}),
  new Map({left: 'Jenkins CI', right: 4}),
  new Map({left: 'Travis CI', right: 4}),
  new Map({left: 'Windows', right: 3}),
  new Map({left: 'Linux', right: 3}),
  new Map({left: 'Bash/Terminal', right: 3}),
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

const tiles = new Map({
  aboutMe: "Hi! I'm Adam! I grew up in Minnesota and have since moved to Boston for school. I now study Computer Science and Business Administration at Northeastern University. Check out some of the other tiles to learn a little more about me!",
  developer: "I've got roughly 8 years of development experience (I taught myself C at the age of 13!) and my experience has led me to be a web developer with full-stack skills, but specializing in front-end development. I've published several open-source libraries and all of my development work is showcased on this website and my GitHub account.",
  video: "As a part-time job, I work for Northeastern University's athletics department. All of the school's home athletic events are streamed online in HD, and occasionally appearing on cable or network television. I work primarily as a Producer, Director, Technical Director, and, as needed, instant replay operator and graphics producer. That's me in the picture, filming a pregame interview.",
  fraternity: "Pictured at our founding location (Washington Square Arch, NYC), I am a brother of Alpha Epsilon Pi. In the past I've served as our publicity chair and coordinated our annual philanthropy boat cruise which raises more than $25,000 for charity. I am currently serving as the Interfraternity Council president on campus, with focuses on educating about and reducing hazing and sexual assault on campus.",
  biking: "About two years ago I took up biking, initially as a way to commute to work, and eventually I continued to bike in my free time. Since then I've biked more than 1,000 miles across the city of Boston and its outlying suburbs. Beginning next year I plan to enter races in the Boston area with a stretch goal of being ready to partake in the Pan-Mass Challenge next summer. In the photo I'm participating in Boston's Bike to Work day, biking through Boston with other Boston commuters."
});


export default {
  docsSoapHeader,
  eaganEducation,
  hubspotHeader,
  infinioHeader,
  languagesData,
  northeasternEducation,
  northeasternHeader,
  softwareData,
  tiles,
  usBankHeader
};
