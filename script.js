
var art1 = document.getElementById('art1');
var art2 = document.getElementById('art2');
var art3 = document.getElementById('art3')

window.addEventListener('load', e => {
  axios.get('https://lit-fortress-6467.herokuapp.com/object')
  .then(res => {
    for (let i = 0; i < Math.ceil(Math.random() * 6); i++) {
      art1.setAttribute('src', `images/${res.data.results[i].cover_art}`)
    }
  })
})

window.addEventListener('load', e => {
  axios.get('https://lit-fortress-6467.herokuapp.com/object')
  .then(res => {
    for (let i = 0; i < Math.ceil(Math.random() * 6); i++) {
      art2.setAttribute('src', `images/${res.data.results[i].cover_art}`)
    }
  })
})
window.addEventListener('load', e => {
  axios.get('https://lit-fortress-6467.herokuapp.com/object')
  .then(res => {
    for (let i = 0; i < Math.ceil(Math.random() * 6); i++) {
      art3.setAttribute('src', `images/${res.data.results[i].cover_art}`)
    }
  })
})
