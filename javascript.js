const homeButton = document.querySelector('.index__button')
const bookmarksButton = document.querySelector('.bookmarks__button')
const createButton = document.querySelector('.ownquestion__button')
const profileButton = document.querySelector('.profile__button')

const mainSiteHome = document.querySelector('.main__site__home')
const mainSiteBookmarks = document.querySelector('.main__site__bookmarks')
const mainSiteCreate = document.querySelector('.main__site__create')
const mainSiteProfile = document.querySelector('.main__site__profile')

const headerSiteHome = document.querySelector('.header__site__home')
const headerSiteBookmarks = document.querySelector('.header__site__bookmarks')
const headerSiteCreate = document.querySelector('.header__site__create')
const headerSiteProfile = document.querySelector('.header__site__profile')

homeButton.addEventListener('click', () => {
  mainSiteHome.classList.remove('site--hidden')
  mainSiteBookmarks.classList.add('site--hidden')
  mainSiteCreate.classList.add('site--hidden')
  mainSiteProfile.classList.add('site--hidden')

  headerSiteHome.classList.remove('site--hidden')
  headerSiteBookmarks.classList.add('site--hidden')
  headerSiteCreate.classList.add('site--hidden')
  headerSiteProfile.classList.add('site--hidden')
})

bookmarksButton.addEventListener('click', () => {
  mainSiteHome.classList.add('site--hidden')
  mainSiteBookmarks.classList.remove('site--hidden')
  mainSiteCreate.classList.add('site--hidden')
  mainSiteProfile.classList.add('site--hidden')

  headerSiteHome.classList.add('site--hidden')
  headerSiteBookmarks.classList.remove('site--hidden')
  headerSiteCreate.classList.add('site--hidden')
  headerSiteProfile.classList.add('site--hidden')
})

createButton.addEventListener('click', () => {
  mainSiteHome.classList.add('site--hidden')
  mainSiteBookmarks.classList.add('site--hidden')
  mainSiteCreate.classList.remove('site--hidden')
  mainSiteProfile.classList.add('site--hidden')

  headerSiteHome.classList.add('site--hidden')
  headerSiteBookmarks.classList.add('site--hidden')
  headerSiteCreate.classList.remove('site--hidden')
  headerSiteProfile.classList.add('site--hidden')
})

profileButton.addEventListener('click', () => {
  mainSiteHome.classList.add('site--hidden')
  mainSiteBookmarks.classList.add('site--hidden')
  mainSiteCreate.classList.add('site--hidden')
  mainSiteProfile.classList.remove('site--hidden')

  headerSiteHome.classList.add('site--hidden')
  headerSiteBookmarks.classList.add('site--hidden')
  headerSiteCreate.classList.add('site--hidden')
  headerSiteProfile.classList.remove('site--hidden')
})
