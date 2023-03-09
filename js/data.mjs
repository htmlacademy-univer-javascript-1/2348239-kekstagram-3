import {getRandom, photoDescription} from './functions.mjs';

export const data = [];
let i = 1;
for (i = 1; i < 26; i++) {
  data.push({id: i, url: `photos/${i}.jpg`, description: photoDescription(), likes: getRandom(15, 200), comments: getRandom(0, 200)});
}
