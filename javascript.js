const homeButton = getElement('.home__button')
const bookmarksButton = getElement('.bookmarks__button')
const createButton = getElement('.create__button')
const profileButton = getElement('.profile__button')

const mainSiteHome = getElement('.main__site__home')
const mainSiteBookmarks = getElement('.main__site__bookmarks')
const mainSiteCreate = getElement('.main__site__create')
const mainSiteProfile = getElement('.main__site__profile')

const headerSiteHome = getElement('.header__site__home')
const headerSiteBookmarks = getElement('.header__site__bookmarks')
const headerSiteCreate = getElement('.header__site__create')
const headerSiteProfile = getElement('.header__site__profile')

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
    getElement(`.main__site__${name}`).classList.remove('hidden')
    getElement(`.header__site__${name}`).classList.remove('hidden')
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
