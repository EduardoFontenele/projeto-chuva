import './css/style.css'

const selectedLanguage = document.querySelector('.selected-language')
const languages = document.querySelectorAll('.language')
const languageDisplay = document.querySelector('.language-display')
const languageList = document.querySelector('.language-list')

// Sessão de criação da seleção de linguagens

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

const showMoreBtn = document.querySelector('#showMore')

function showMoreDetails() {
    const abstractContent = document.querySelector('.abstract-content')
    abstractContent.classList.toggle('showMore')
    showMoreBtn.innerHTML = ''
    return
}

showMoreBtn.addEventListener('click', showMoreDetails)

// Classe que valida o tópico de discussão
class CreateTopic {
    constructor() {
        this.topicForm = document.querySelector('.topicForm')
        this.comments = document.querySelector('.comments')
        this.event()
    }

    event() {
        this.topicForm.addEventListener('submit', (e) => {
            e.preventDefault()

            const errorDivs = document.querySelectorAll('.error-div')
            for (let div of errorDivs) {
                div.remove()
            }

            const fieldsAreValid = this.fieldsAreValid()

            if (fieldsAreValid) {
                this.createComment()
            }
        })
    }

    createComment() {
        const subject = document.querySelector('.assunto')
        const message = document.querySelector('.messagem')
        const author = document.querySelector('.autor')
        
        const h4 = document.createElement('h4')
        const h5 = document.createElement('h5')
        const p = document.createElement('p')
        const likes = document.createElement('p')
        const replies = document.createElement('p')
        const optionsBtn = new Image(16, 16)
        optionsBtn.src = '../public/images/dots.png'
        optionsBtn.classList.add('options')
        const likesBtn = new Image(30, 20)
        likesBtn.classList.add('like')
        likesBtn.src = '../public/images/heart-icon.png'
        const commentDiv = document.createElement('div')
        const optionsDiv = document.createElement('div')

        if (!author.value) {
            h5.innerHTML = 'Anônimo'
        } else {
            h5.innerHTML = author.value
        }

        h4.innerHTML = subject.value
        p.innerHTML = message.value
        commentDiv.classList.add('comment-div')
        commentDiv.appendChild(h4)
        commentDiv.appendChild(h5)
        commentDiv.appendChild(p)
        commentDiv.appendChild(optionsDiv)
        optionsDiv.classList.add('comment-options')
        optionsDiv.appendChild(optionsBtn)
        optionsDiv.appendChild(likesBtn)
        optionsDiv.appendChild(likes)
        optionsDiv.appendChild(replies)

        this.comments.appendChild(commentDiv)

        const shareIdeas = document.querySelector('.share-ideas')
        const createNewTopic = document.querySelector('.create-new-topic')

        shareIdeas.classList.add('hidden')
        createNewTopic.classList.remove('hidden')
        subject.value = ''
        message.value = ''
        author.value = ''
        likes.innerHTML = 'likes'
        replies.innerHTML = 'respostas'

        const createTopicDiv = document.querySelector('.create-topic')
        createTopicDiv.classList.add('hidden')
    }


    fieldsAreValid() {
        let valid = true
        const fields = document.querySelectorAll('[data-validate]')
        for (let field of fields) {
            const fieldLabel = field.previousElementSibling.innerHTML
            if (!field.value) {
                this.createError(field, `O campo ${fieldLabel} não pode ficar vazio`)
                valid = false
            } else {
                field.style.border = '1px solid #ececec'
            }
        }
        return valid
    }

    createError(field, message) {
        const errorDiv = document.createElement('div')
        errorDiv.innerHTML = message
        errorDiv.classList.add('error-div')

        field.style.border = '1px solid red'
        field.insertAdjacentElement('afterend', errorDiv)
    }
}

const createTopic = new CreateTopic()

const createTopicBtn = document.querySelector('#createTopicBtn')

function showTopicForm() {
    const createTopicDiv = document.querySelector('.create-topic')
    createTopicDiv.classList.remove('hidden')
}

createTopicBtn.addEventListener('click', showTopicForm)

const createNewTopicBtn = document.querySelector('#createNewTopicBtn')
createNewTopicBtn.addEventListener('click', showTopicForm)


window.addEventListener('load', () => {
    const nav = document.querySelector('nav')
    const burgerBtn = document.querySelector('.burguer-icon')
    const cover = document.querySelector('.cover-up')

    burgerBtn.addEventListener('click', () => {
        nav.classList.add('show')
        cover.classList.toggle('hidden')

        cover.addEventListener('click', () => {
            nav.classList.remove('show')
            cover.classList.add('hidden')
        })
    })
})