import capitalize from './capitalize';

const capitalizeSentence = (string: string) =>
  string.split(' ').map(capitalize).join(' ');

export default capitalizeSentence;
