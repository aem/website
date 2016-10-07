export default (string) => {
  return string
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\\/g, '\\\\')
    .replace(/&/g, '&amp;');
}
