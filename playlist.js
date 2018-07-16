var albumArtDiv = document.getElementById('albums');
var trackBin = document.getElementById('trkBin')
var binList = [];
var submit = document.getElementById('submit');
var clearTracks = document.getElementById('clearTracks');


window.addEventListener('load', e => {
  axios.get('https://lit-fortress-6467.herokuapp.com/object')
  .then(response => {
    var results = response.data.results;

    for(let i = 0; i < results.length; i++) {
      var albums = results[i].cover_art;
      var IDs = results[i].id;
      albumArtDiv.innerHTML += ` <div id=${IDs}> <img id=${IDs} src=images/${albums}> </div>`;
    }

    results.forEach(item => {
      var album = document.getElementById(`${item.id}`)
      album.addEventListener('click', e => {
        trackBin.innerHTML += `<p> ${item.artist}: ${item.title} </p>`;
        binList.push(`${item.artist}: ${item.title}`);
      });
    });

    clearTracks.addEventListener('click', e => {
      trkBin.innerHTML = '';
      binList = [];
        })

  })
})


submit.addEventListener('click', e => {
  axios.post('https://lit-fortress-6467.herokuapp.com/post', binList)
  .then(res => {
    console.log(res);
    setTimeout(function(){ alert("Submitted tracks!"); }, 300);
  })
})
