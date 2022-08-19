const container = document.querySelector('.wrapper')
const thanksContainer = document.querySelector('.hidden')
const submit = document.querySelector('.btn-submit')
const ratingNote = document.querySelector('#rating-note')
const ratesBtn = document.querySelectorAll('.btn')

ratesBtn.forEach((rateBtn) => {
    rateBtn.addEventListener('click', () => {
        ratingNote.innerHTML = rateBtn.innerHTML
        if(rateBtn !== '') {
            submit.addEventListener('click', () => {
            thanksContainer.classList.remove('hidden')
            thanksContainer.style.display = 'block'
            container.style.display = 'none'
            })
        }
    })
})