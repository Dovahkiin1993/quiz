const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#save-score-btn')
const finalSore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores =JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 4

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () =>{
    saveScoreBtn = username.value
})

savehighScore = e =>{
    e.preventDefault()

    const score = {
        score:mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

}

highScores.splice(4)

localStorage.setItem('highScores', JSON.stringify(highScores))
window.location.assign('end.html')
