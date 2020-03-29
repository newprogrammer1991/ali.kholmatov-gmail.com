
const str = {
  "text": "\"Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes. But I warn\nyou, if you don't tell me that this means war, if you still try to defend the infamies and horrors\nperpetrated by that Antichrist--I really believe he is Antichrist--I will have nothing more to do with\nyou and you are no longer my friend, no longer my 'faithful slave,' as you call yourself! But how\ndo you do? I see I have frightened you--sit down and tell me all the news.\"\nIt was in July, 1805, and the speaker was the well-known Anna Pavlovna Scherer, maid of\nhonor and favorite of the Empress Marya Fedorovna. With these words she greeted Prince\nVasili Kuragin, a man of high rank and importance, who was the first to arrive at her reception.\nAnna Pavlovna had had a cough for some days. She was, as she said, suffering from la grippe;\ngrippe being then a new word in St. Petersburg, used only by the elite.\nAll her invitations without exception, written in French, and delivered by a scarlet-liveried\nfootman that morning, ran as follows:\n\"If you have nothing better to do, Count [or Prince], and if the prospect of spending an evening\nwith a poor invalid is not too terrible, I shall be very charmed to see you tonight between 7 and\n10--Annette Scherer.\"\n\"Heavens! what a virulent attack!\" replied the prince, not in the least disconcerted by this\nreception. He had just entered, wearing an embroidered court uniform, knee breeches, and\nshoes, and had stars on his breast and a serene expression on his flat face. He spoke in that\nrefined French in which our grandfathers not only spoke but thought, and with the gentle,\npatronizing intonation natural to a man of importance who had grown old in society and at court.\nHe went up to Anna Pavlovna, kissed her hand, presenting to her his bald, scented, and shining\nhead, and complacently seated himself on the sofa.\n\"First of all, dear friend, tell me how you are. Set your friend's mind at rest,\" said he without\naltering his tone, beneath the politeness and affected sympathy of which indifference and even\nirony could be discerned.\n\"Can one be well while suffering morally? Can one be calm in times like these if one has any\nfeeling?\" said Anna Pavlovna. \"You are staying the whole evening, I hope?\"\n\"And the fete at the English ambassador's? Today is Wednesday. I must put in an appearance\nthere,\" said the prince. \"My daughter is coming for me to take me there.\"\n\"I thought today's fete had been canceled. I confess all these festivities and fireworks are\nbecoming wearisome.\"\n\n\"If they had known that you wished it, the entertainment would have been put off,\" said the\nprince, who, like a wound-up clock, by force of habit said things he did not even wish to be\nbelieved.\n\"Don't tease! Well, and what has been decided about Novosiltsev's dispatch? You know\neverything.\"\n\"What can one say about it?\" replied the prince in a cold, listless tone. \"What has been decided?\nThey have decided that Buonaparte has burnt his boats, and I believe that we are ready to burn\nours.\"\nPrince Vasili always spoke languidly, like an actor repeating a stale part. Anna Pavlovna\nScherer on the contrary, despite her forty years, overflowed with animation and impulsiveness.\nTo be an enthusiast had become her social vocation and, sometimes even when she did not\nfeel like it, she became enthusiastic in order not to disappoint the expectations of those who\nknew her. The subdued smile which, though it did not suit her faded features, always played\nround her lips expressed, as in a spoiled child, a continual consciousness of her charming\ndefect, which she neither wished, nor could, nor considered it necessary, to correct.\nIn the midst of a conversation on political matters Anna Pavlovna burst out:\n\"Oh, don't speak to me of Austria. Perhaps I don't understand things, but Austria never has\nwished, and does not wish, for war. She is betraying us! Russia alone must save Europe. Our\ngracious sovereign recognizes his high vocation and will be true to it. That is the one thing I\nhave faith in! Our good and wonderful sovereign has to perform the noblest role on earth, and\nhe is so virtuous and noble that God will not forsake him. He will fulfill his vocation and crush the\nhydra of revolution, which has become more terrible than ever in the person of this murderer\nand villain! We alone must avenge the blood of the just one.... Whom, I ask you, can we rely\non?... England with her commercial spirit will not and cannot understand the Emperor\nAlexander's loftiness of soul. She has refused to evacuate Malta. She wanted to find, and still\nseeks, some secret motive in our actions. What answer did Novosiltsev get? None. The English\nhave not understood and cannot understand the self-abnegation of our Emperor who wants\nnothing for himself, but only desires the good of mankind. And what have they promised?\nNothing! And what little they have promised they will not perform! Prussia has always declared\nthat Buonaparte is invincible, and that all Europe is powerless before him.... And I don't believe\na word that Hardenburg says, or Haugwitz either. This famous Prussian neutrality is just a trap. I\nhave faith only in God and the lofty destiny of our adored monarch. He will save Europe!\"",
  "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
const form = document.querySelector('.search-bar__form');
const cards = document.querySelector('.cards');
const lengthInput = form.querySelector('#length');
const limitInput = form.querySelector('#limit');
const btn = form.querySelector('#sub');
[lengthInput, limitInput].forEach((elem) => elem.addEventListener('input', checkValidation));


function checkValidation() {
  if (lengthInput.checkValidity() && limitInput.checkValidity()) {
    btn.disabled = false;
  }
  else { btn.disabled = true }
}

let length, limit, progress = 0;
const funcMapper = (title, index) => new Promise(resolve => {
  setTimeout(() => {
    resolve();
    progress++;
    update(index);
  }, Math.round(Math.random() * 9000) + 1000);
  render(title, index);
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  handleSubmit();
})

function disableForm() {
  form.classList.toggle('search-bar__form--disabled');
}

function generateArray() {
  const min = 10;
  const max = 200;
  const arr = [];
  for (let i = 0; i < length; i++) {
    const randomValue = random(min, max);
    const value = str.title.slice(0, randomValue);
    arr.push(value);
  }
  return arr;
}
const handleSubmit = () => {
  length = lengthInput.value;
  limit = limitInput.value;
  disableForm();
  clearCards();
  const arr = generateArray();
  queue(arr, funcMapper, limit).then((res) => disableForm());
}

function clearCards() {
  cards.innerHTML = '';
  progress = 0;
}
function queue(arr, funcMapper, limit) {
  restArr = arr.slice(limit);
  let index = limit;
  let inProgress = arr.length;
  return new Promise((resolve, reject) => {
    function doIt() {
      inProgress--;
      if (inProgress) {
        const item = restArr.shift();
        if (item) {
          const p = funcMapper(item, index++);
          p.then(res => doIt(res))
        }
      }
      else {
        console.log('resolve')
        resolve(true);
      }
    }
    for (let i = 0; i < limit; i++) {
      funcMapper(arr[i], i).then(_ => doIt());
    }
  })
}






function random(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function render(title, index) {
  const cardsItems = document.querySelector('.cards__items');
  const progress = `<p id="progress" class="progress">Progress: 0 of ${length}</p>`;
  const item = `<div id=${index} class="cards__item">
  <h5 class="cards__title">
     ${index}. ${title}
  </h5>
  </div>`
  if (cardsItems) {
    cardsItems.insertAdjacentHTML('beforeend', item);
  } else {
    cards.insertAdjacentHTML('beforeend', `
   ${progress}
  <div class="cards__items">
    ${item}
  </div>`)
  }

}


function update(id) {
  const elem = document.getElementById(id);
  const elemProgress = document.getElementById('progress');
  const sentence = splitText(id);
  elemProgress.innerText = `Progress: ${progress} of ${length}`
  elem.insertAdjacentHTML('beforeend', `
  <p class="cards__desc">${sentence}</p>
  `)
}


function splitText(index) {
  const result = str.text.match(/[^\.!\?]+[\.!\?]+/g);
  return result[index]

}


