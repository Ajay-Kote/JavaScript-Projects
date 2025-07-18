/// song play kar ne ka main logic 
// but chatgpt ka maadad lena pada idar 
let curr_song = null;
const btns= document.querySelectorAll('.play-btn');
btns.forEach(btn => {
    btn.addEventListener('click', function() {
        const id = this.dataset.musicId;
        const song = document.getElementById(id);
        const img = this.dataset.img;
        const title = this.dataset.title;
        const artist = this.dataset.artist;

        document.querySelector('.music-img').src = img;
        document.querySelector('.song-title').textContent = title;
        document.querySelector('.song-artist').textContent = artist;

        if(!song){
            alert('Song not found we will add soon');
            return;
        }
        const allsongs = document.querySelectorAll('audio');
        allsongs.forEach(s => { // s matlab ek song
            if(s !==song){
                s.pause();
                s.currentTime = 0; 
            }
        });
        if(song.paused){
            song.play();
            curr_song = song; 
            document.getElementById('card-btn').textContent = '⏸';
            document.getElementById('main-play-btn').textContent = '⏸';
        }else{
            song.pause();
            document.getElementById('card-btn').textContent = '▶';
            document.getElementById('main-play-btn').textContent = '▶';
        }
        
    });
});

const mainPlayBtn = document.getElementById('main-play-btn');

mainPlayBtn.addEventListener('click',function(){
    if(curr_song && curr_song.paused){
        curr_song.play();
        mainPlayBtn.textContent = '⏸';
    }else if(curr_song){
        curr_song.pause();
        mainPlayBtn.textContent = '▶';
    }
});




// scroll left right button ka logic ha kabi kabi kam nahi kartha but teek hai yaar
const left = document.querySelector('.scrool-left');
const right = document.querySelector('.scrool-right');
const contain = document.querySelector('.card-container');


left.addEventListener('click',function(){
    contain.scrollBy({
        left: -200,
        behavior:'smooth'
    });
});
right.addEventListener('click',function(){
    contain.scrollBy({
        left: 200,
        behavior:'smooth'
    });
});