/* eslint-disable no-console */
import { existsSync, readFileSync, renameSync, writeFileSync } from 'fs';
import crypto from 'node:crypto';

import { values } from '../src/utils';

const random = () => crypto.randomBytes(16).toString('hex');

enum ImageStatus {
  Archived,
  Public,
  Private,
}

enum ImageType {
  Illustration = 'illustration',
  Handicraft = 'handicraft',
  GreetingCard = 'greeting card',
}

interface Image {
  alt: string | null;
  colors: string[];
  date: Date;
  description: string | null;
  id: string;
  materials: string[];
  name: string;
  path: string;
  slug: string;
  state: ImageStatus;
  tags: string[];
  technics: string[];
  title: string;
  type: ImageType;
}

interface ImageSet {
  [key: string]: Image;
}

const { cwd } = process;
const root = cwd();

const path = `${root}/public/images/portfolio/greeting-cards`;

if (!existsSync(path)) {
  console.error(
    '\x1b[31m%s\x1b[0m',
    'Result: "failed" \n' + `Error Msg: path ${path} does not esist \n`
  );
  process.exit(1);
}

const ddd = readFileSync(`${root}/data/images2.json`, 'utf8');
const parseDDD = JSON.parse(ddd) as ImageSet;

const newImageData: ImageSet = {};

values(parseDDD).forEach(oldData => {
  const id = random();
  const { name: file, tags, date, type } = oldData;

  const [name, ext] = file.split('.');
  //TODO trims _- from borders
  const cleanedName = (
    name.includes('ewa_fret_') ? name.replace('ewa_fret_', '') : name
  )
    .replace('ilustracja', '')
    .replace('ilustracje', '')
    .replace('rekodzielo', '')
    .replace('rekodziela', '')
    .replace('kartka', '')
    .replace('kartki', '')
    .replace(/[0-9]/, '')
    .replace('_', '-');

  const t = cleanedName.startsWith('-')
    ? cleanedName.replace(cleanedName[0], '')
    : cleanedName;

  const slug = `${/[a-zA-Z]/.test(t) ? `${t}-` : ''}${tags[0]
    .normalize('NFKD')
    .split(' ')
    .join('-')}`;

  const newFileName = `${slug}-${id}.${ext}`;

  if (existsSync(`${path}/${file}`)) {
    renameSync(`${path}/${file}`, `${path}/${newFileName}`);

    newImageData[id] = {
      alt: null,
      colors: [],
      date,
      description: null,
      id,
      materials: [],
      name: newFileName,
      path: `/images/portfolio/${newFileName}`,
      slug: '',
      state: 1,
      tags,
      technics: [],
      title: newFileName.split('-').join(' '),
      type,
    };
  }
});

writeFileSync(
  `${root}/data/images3.json`,
  JSON.stringify(newImageData),
  'utf8'
);
