const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    
        document.querySelector('#tracks').innerHTML = "";
        console.log(`
            get tracks from spotify based on the search term
            "${term}" and load them into the #tracks section 
            of the DOM...`);
    
        let url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}&limit=5`;
        fetch(url)
        .then((response) => { 
            // takes a response stream and reads it to completion
            return response.json(); 
           }) 
        .then((data) => { 
            console.log(data);
            if (data.length > 0) {
            for (const track of data) {
                document.querySelector('#tracks').innerHTML += 
            `<button class="track-item preview" 
                data-preview-track="${track.preview_url}" onclick="handleTrackClick(event);">
                <img src="${track.album.image_url}">
                <i class="fas play-track fa-play" aria-hidden="true"></i>
            <div class="label">
                <h2>${track.name}</h2>
                <p>
                    ${track.artist.name}
                </p>
            </div>
            </button>`
            }
        } else {
            document.querySelector('#tracks').innerHTML += `<p>No Results Found</p>`   
        } 
        });
};

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
};


const getArtist = (term) => {
    document.querySelector('#artist').innerHTML = "";
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);

    let url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}&limit=1`;
    fetch(url)
    .then((response) => { 
        // takes a response stream and reads it to completion
        return response.json(); 
       }) 
    .then((data) => { 
        console.log(data);
        if (data.length > 0) {
        for (const artist of data) {
            document.querySelector('#artist').innerHTML += 
            `<section class="artist-card" id="${artist.id}">
            <div>
                <img src="${artist.image_url}">
                <h2>${artist.name}</h2>
                <div class="footer">
                    <a href="https://open.spotify.com/${artist.id}" target="_blank">
                    view on spotify
                    </a>
                </div>
            </div>
            </section>`
        }
    } else {
        document.querySelector('#artist').innerHTML += `<p>No Results Found</p>`   
    } 
    });
};
document.querySelector('#search').addEventListener('click', getArtist);

const handleTrackClick = (ev) => {
    const previewUrl = ev.currentTarget.getAttribute('data-preview-track');
    console.log(previewUrl);
}

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};