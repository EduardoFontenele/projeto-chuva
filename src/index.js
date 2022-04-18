import './css/style.css'

const selectedLanguage = document.querySelector('.selected-language')
const languages = document.querySelectorAll('.language')
const languageDisplay = document.querySelector('.language-display')
const languageList = document.querySelector('.language-list')

for (let language of languages) {
    language.addEventListener('click', handleLanguageClick)

    function handleLanguageClick() {
        languageDisplay.innerHTML = language.innerHTML;
        languageList.classList.toggle('show')
        return
    }

}

function showLanguageList() {
    languageList.classList.toggle('show')
}

selectedLanguage.addEventListener('click', showLanguageList)