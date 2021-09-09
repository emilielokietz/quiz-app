const homeButton = getElement('.home__button')
const bookmarksButton = getElement('.bookmarks__button')
const createButton = getElement('.create__button')
const profileButton = getElement('.profile__button')

const mainSiteHome = getElement('#main__home')
const mainSiteBookmarks = getElement('#main__bookmarks')
const mainSiteCreate = getElement('#main__create')
const mainSiteProfile = getElement('#main__profile')

const headerSiteHome = getElement('#header__home')
const headerSiteBookmarks = getElement('#header__bookmarks')
const headerSiteCreate = getElement('#header__create')
const headerSiteProfile = getElement('#header__profile')

const contentForCard = [
  {
    question: 'Which European nation was said to invent hot dogs?',
    answer: 'Germany',
    isBookmarked: false,
    showAnswer: false,
    tags: ['food', 'history', 'culture'],
  },
  {
    question: 'About how many taste buds does the average human tongue have?',
    answer: '10.000',
    isBookmarked: false,
    showAnswer: false,
    tags: ['history', 'social'],
  },
  {
    question: 'Which American state is the largest (by area)?',
    answer: 'Alaska',
    isBookmarked: false,
    showAnswer: false,
    tags: ['history', 'social'],
  },
  {
    question: 'You can sneeze in your sleep. True or False? ',
    answer: 'False',
    isBookmarked: true,
    showAnswer: false,
    tags: ['history', 'social'],
  },
  {
    question: 'What is the smallest planet in our solar system?? ',
    answer: 'Mercury',
    isBookmarked: false,
    showAnswer: false,
    tags: ['history', 'social'],
  },
  {
    question:
      'Which country in the world is believed to have the most miles of motorway? ',
    answer: 'China',
    isBookmarked: false,
    showAnswer: false,
    tags: ['history', 'social'],
  },
  {
    question:
      'How many permanent members are there on the UN security council? ',
    answer:
      'Five: China, France, Russian Federation, United Kingdom, United States',
    isBookmarked: true,
    showAnswer: false,
    tags: ['history', 'social'],
  },
]

// Start ----------------------------------------------------------------------------------

window.addEventListener('load', () => {
  renderHomeSite()
})

// ------------- Function RenderCard -------------------------------------------------------

function renderCard(array, targetElement) {
  array.forEach(cardData => {
    const cardSection = document.createElement('section')
    cardSection.classList.add('card')
    targetElement.appendChild(cardSection)

    const cardBookmark = document.createElement('button')
    cardBookmark.classList.add('card__bookmark')
    cardSection.appendChild(cardBookmark)

    const cardBookmark2 = document.createElement('button')
    cardBookmark2.classList.add('card__bookmark')
    cardBookmark2.classList.add('card__bookmark--hover')
    cardBookmark2.id = 'smallbookmark1'
    cardSection.appendChild(cardBookmark2)

    const cardQuestion = document.createElement('h2')
    cardQuestion.classList.add('card__question')
    cardQuestion.textContent = cardData.question
    cardSection.appendChild(cardQuestion)

    const cardButton = document.createElement('button')
    cardButton.classList.add('card__show__button')
    cardButton.classList.add('button__style')
    cardButton.textContent = 'Show Answer'
    cardSection.appendChild(cardButton)

    const cardAnswer = document.createElement('p')
    cardAnswer.classList.add('card__answer')
    cardAnswer.classList.add('card__answer--hidden')
    cardAnswer.textContent = cardData.answer
    cardSection.appendChild(cardAnswer)

    const cardTags = document.createElement('ul')
    cardTags.classList.add('tags')
    cardSection.appendChild(cardTags)

    cardData.tags.forEach(tag => {
      const tagItem = document.createElement('li')
      tagItem.classList.add('tags__item')
      tagItem.textContent = tag
      cardTags.appendChild(tagItem)
    })
  })
}

// function getData() {
//   return contentForCArd
// }

// -------------------- NAV Buttons ---------------------------------------------------------------

function hideAll() {
  const mainArray = document.querySelectorAll('.main')

  mainArray.forEach((arrayEl, index) => {
    arrayEl.classList.add('hidden')
  })

  const headerArray = document.querySelectorAll('.header')
  headerArray.forEach((arrayEl, index) => {
    arrayEl.classList.add('hidden')
  })
}

function renderHomeSite() {
  mainSiteHome.innerHTML = ''
  // addQuestion('Hier kommt die Frage', 'Das ist die Antwort', [
  //   'tag1',
  //   'tag2',
  //   'tag3',
  //   'tag4',
  // ])
  renderCard(contentForCard, mainSiteHome)
  bookmarkToggle()
  answerToggle()
}

function renderBookmarkSite() {
  const newArray = contentForCard.filter(bookmark => bookmark.isBookmarked)
  mainSiteBookmarks.innerHTML = ''
  renderCard(contentForCard, mainSiteBookmarks)
  renderCard(newArray, mainSiteBookmarks)
  bookmarkToggle()
  answerToggle()
}

function buttonAddEventListener(name) {
  getElement(`.${name}__button`).addEventListener('click', () => {
    hideAll()
    getElement(`#main__${name}`).classList.remove('hidden')
    getElement(`#header__${name}`).classList.remove('hidden')

    if (name == 'home') {
      renderHomeSite()
    } else if (name == 'bookmarks') {
      renderBookmarkSite()
    }
  })
}

function getElement(htmlClass) {
  const a = document.querySelector(htmlClass)
  return a
}

buttonAddEventListener(`home`)
buttonAddEventListener(`create`)
buttonAddEventListener(`bookmarks`)
buttonAddEventListener(`profile`)

// -------------- bookmark change color --------------------------------------------------------

function bookmarkToggle() {
  const singleBookmark = document.querySelectorAll('.card__bookmark--hover')

  singleBookmark.forEach((elementNow, index) => {
    elementNow.addEventListener('click', () => {
      if (elementNow.classList.contains('card__bookmark--clicked')) {
        elementNow.classList.remove('card__bookmark--clicked')
        contentForCard[index].isBookmarked = false
      } else {
        elementNow.classList.add('card__bookmark--clicked')
        contentForCard[index].isBookmarked = true
      }
    })
  })
}

// --------------- Show Answer Button ------------------------------------------------------------

function answerToggle() {
  const showAnswer = document.querySelectorAll('.card__show__button')
  const textAnswer = document.querySelectorAll('.card__answer')

  showAnswer.forEach((buttonNow, indexButton) => {
    buttonNow.addEventListener('click', () => {
      if (textAnswer[indexButton].classList.contains('card__answer--hidden')) {
        textAnswer[indexButton].classList.remove('card__answer--hidden')
        buttonNow.textContent = 'Hide Answer'
      } else {
        textAnswer[indexButton].classList.add('card__answer--hidden')
        buttonNow.textContent = 'Show Answer'
      }
    })
  })
}
// -------------- Submit Buuton on Create Page ------------------------------------------------------

const questionInput = document.querySelector('#ownquestion')
const answerInput = document.querySelector('#ownanswer')
const labelInput = document.querySelector('#owntags')
const submitButton = document.querySelector('#submit__button')

submitButton.addEventListener('click', () => {
  const userQuestion = document.querySelector('#ownquestion')
  let que = userQuestion.ariaValueText
  console.log(que)
  addQuestion()
  questionInput.value = ''
  answerInput.value = ''
  labelInput.value = ''
})

function addQuestion(question, answer, tags) {
  contentForCard.push({
    question: question,
    answer: answer,
    tags: tags,
    isBookmarked: false,
    showAnswer: false,
  })
}
