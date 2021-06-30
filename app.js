const textarea = document.getElementById('textarea');
const tagsEl = document.querySelector('.tags');

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelector();
  }
});

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.innerHTML = '';

  tags.forEach((tag) => {
    const tagE = document.createElement('span');
    tagE.classList.add('tag');
    tagE.innerHTML = tag;
    tagsEl.appendChild(tagE);
  });
}

function randomSelector() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = randomTagSelector();
    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    const selectedTag = randomTagSelector();

    highlightTag(selectedTag);
  }, times * 100);
}

function randomTagSelector() {
  const allTags = document.querySelectorAll('.tag');
  return allTags[Math.floor(Math.random() * allTags.length)];
}

function highlightTag(tag) {
  tag.classList.add('selected');
}

function unHighlightTag(tag) {
  tag.classList.remove('selected');
}
