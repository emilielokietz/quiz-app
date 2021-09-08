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

// NAV Buttons

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

function buttonAddEventListener(name) {
  getElement(`.${name}__button`).addEventListener('click', () => {
    hideAll()
    getElement(`#main__${name}`).classList.remove('hidden')
    getElement(`#header__${name}`).classList.remove('hidden')
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

// homeButton.addEventListener('click', () => {
//   mainSiteHome.classList.remove('hidden')
//   headerSiteHome.classList.remove('hidden')
// })

// bookmarksButton.addEventListener('click', () => {
//   mainSiteBookmarks.classList.remove('hidden')
//   headerSiteBookmarks.classList.remove('hidden')
// })

// createButton.addEventListener('click', () => {
//   mainSiteCreate.classList.remove('hidden')
//   headerSiteCreate.classList.remove('hidden')
// })

// profileButton.addEventListener('click', () => {
//   mainSiteProfile.classList.remove('hidden')
//   headerSiteProfile.classList.remove('hidden')
// })

// Bookmark

// const singleBookmarkButton = document.querySelector('#smallbookmark1')

// singleBookmarkButton.addEventListener('click', () => {
//   if (singleBookmarkButton.classList.contains('card__bookmark--clicked')) {
//     singleBookmarkButton.classList.remove('card__bookmark--clicked')
//   } else {
//     singleBookmarkButton.classList.add('card__bookmark--clicked')
//   }
// })

const singleBookmark = document.querySelectorAll('.card__bookmark--hover')

singleBookmark.forEach((elementNow, index) => {
  elementNow.addEventListener('click', () => {
    if (elementNow.classList.contains('card__bookmark--clicked')) {
      elementNow.classList.remove('card__bookmark--clicked')
    } else {
      elementNow.classList.add('card__bookmark--clicked')
    }
  })
})

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

const questionInput = document.querySelector('#ownquestion')
const answerInput = document.querySelector('#ownanswer')
const labelInput = document.querySelector('#owntags')
const submitButton = document.querySelector('#submit__button')

submitButton.addEventListener('click', () => {
  questionInput.value = ''
  answerInput.value = ''
  labelInput.value = ''
})

{
  /* <section class="card">
        <button class="card__bookmark"></button>
        <button class="card__bookmark card__bookmark--hover" id="smallbookmark1"></button>
        <h2 class="card__question">Question</h2>

        <button class="card__show__button button__style">Schow Answer</button>

        <p class="card__answer card__answer--hidden">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem cum temporibus incidunt ab autem, blanditiis quod sunt
          modi tenetur totam sit necessitatibus sint nemo nulla velit dicta amet
          doloremque! Amet.
        </p>
        <ul class="tags">
          <li class="tags__item">#Tag1</li>
          <li class="tags__item">#Tag2</li>
          <li class="tags__item">#Tag3</li>
        </ul>
    </section> */
}

const cardSection = document.createElement('section')
cardSection.classList.add('card')
document.main.appendChild(cardSection)

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
cardQuestion.textContent = 'Question'
cardSection.appendChild(cardQuestion)

{
  /* <button class="card__show__button button__style">Schow Answer</button> */
}

const cardButton = document.createElement('button')
cardButton.classList.add('card__show__button')
cardButton.classList.add('button__style')
cardButton.textContent = 'Show Answer'
cardSection.appendChild(cardButton)

{
  /* <p class="card__answer card__answer--hidden">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem cum temporibus incidunt ab autem, blanditiis quod sunt
          modi tenetur totam sit necessitatibus sint nemo nulla velit dicta amet
          doloremque! Amet.
        </p> */
}

const cardAnswer = document.createElement('p')
cardAnswer.classList.add('card__answer')
cardAnswer.classList.add('card__answer--hidden')
cardAnswer.textContent =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Exercitationem cum temporibus incidunt ab autem, blanditiis quod sunt modi tenetur totam sit necessitatibus sint nemo nulla velit dicta amet doloremque! Amet.'
cardSection.appendChild(cardAnswer)
