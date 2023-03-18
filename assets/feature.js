import datas from './speakerdocs.js';

const data = datas;

const featuredSpeaker = document.getElementById('dynamicPage');

const div = document.createElement('div');
div.className = 'title-container';
const title = document.createElement('h3');
title.className = 'title-text';
title.textContent = 'Featured Speakers';
div.append(title);
const div2 = document.createElement('div');
div2.className = 'dynamic-content-container';

for (let i = 0; i < data.length; i += 1) {
  const image = document.createElement('img');
  image.setAttribute('src', `${data[i].image[0]}`);
  image.setAttribute('alt', `professor-${i}`);

  const image2 = document.createElement('img');
  image2.setAttribute('src', `${data[i].image[1]}`);
  image2.setAttribute('alt', `professor-${i}`);
  image2.className = 'transparent-image';

  const nameOfProfessor = document.createElement('h4');
  nameOfProfessor.className = 'name-of-professor';
  nameOfProfessor.textContent = data[i].name;

  const para1 = document.createElement('p');
  para1.className = 'red-text';
  para1.textContent = data[i].para1;

  const para2 = document.createElement('p');
  para2.className = 'black-text';
  para2.textContent = data[i].para2;

  const div4 = document.createElement('div');
  div4.className = 'name-and-description-container';

  const div3 = document.createElement('div');
  div3.className = 'image-and-description-container';

  div4.append(nameOfProfessor, para1, para2);
  div3.append(image, image2, div4);
  div2.append(div3);
}
featuredSpeaker.append(div, div2);
