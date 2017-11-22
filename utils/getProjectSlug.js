export default project => {
  return project.name.replace(' ', '-').toLowerCase();
};
