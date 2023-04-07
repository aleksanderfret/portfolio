/* eslint-disable no-console */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import crypto from 'node:crypto';

const random = () => crypto.randomBytes(32).toString('hex');

enum ImageStatus {
  Public,
  Private,
}

enum ImageType {
  Illustration = 'illustration',
  Handicraft = 'handicraft',
  GreetingCard = 'greeting card',
}

interface Image {
  id: string;
  date: Date;
  name: string;
  path: string;
  description?: string;
  title: string;
  alt?: string;
  tags: string[];
  state: ImageStatus;
  type: ImageType;
}

interface ImageSet {
  [key: string]: Image;
}

const cliArguments = process.argv.slice(2);
const [directory] = cliArguments;

const { cwd } = process;
const root = cwd();

const path = `${root}/public/images/portfolio/${directory}/`;

if (!existsSync(path)) {
  console.error(
    '\x1b[31m%s\x1b[0m',
    'Result: "failed" \n' + `Error Msg: path ${path} does not esist \n`
  );
  process.exit(1);
}

const imgs = readdirSync(path).reduce((acc, file) => {
  const [name] = file.split('.');

  const id = random();

  acc[id] = {
    id,
    date: new Date(),
    name: file,
    path: `/images/portfolio/${directory}/${file}`,
    title: name,
    tags: ['kartka', 'kartka okolicznościowa'],
    state: ImageStatus.Private,
    type: ImageType.GreetingCard,
  };

  return acc;
}, {} as ImageSet);

if (existsSync(`${root}/data/images.json`)) {
  const dataFile = readFileSync(`${root}/data/images.json`, 'utf8');
  const data = JSON.parse(dataFile);
  writeFileSync(
    `${root}/data/images.json`,
    JSON.stringify({ ...data, ...imgs }),
    'utf8'
  );
} else {
  writeFileSync(`${root}/data/images.json`, JSON.stringify(imgs), 'utf8');
}
