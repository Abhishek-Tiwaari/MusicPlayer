function playPause(audioTag, controlIcon) {
    let song = document.getElementById(audioTag);
    let ctrlIcon = document.getElementById(controlIcon);
    let progressBar = document.querySelector(`#${audioTag} + input[type="range"]`);
  
    if (song.paused || song.ended) {
      song.play();
      ctrlIcon.classList.remove('fa-play');
      ctrlIcon.classList.add('fa-pause');
    } else {
      song.pause();
      ctrlIcon.classList.remove('fa-pause');
      ctrlIcon.classList.add('fa-play');
    }
  
    song.addEventListener('timeupdate', () => {
      let currentTime = song.currentTime;
      let duration = song.duration;
      progressBar.value = (currentTime / duration) * 100;
    });
  
    progressBar.addEventListener('mousedown', () => {
      song.pause();
    });
  
    progressBar.addEventListener('mouseup', () => {
      let duration = song.duration;
      song.currentTime = (progressBar.value / 100) * duration;
      song.play();
    });
  }
  
  function playPrevious(audioTag, controlIcon) {
    let song = document.getElementById(audioTag);
    let ctrlIcon = document.getElementById(controlIcon);
    let progressBar = document.querySelector(`#${audioTag} + input[type="range"]`);
  
    let index = Array.from(document.querySelectorAll('.music-player')).indexOf(document.getElementById(audioTag).parentNode);
    if (index > 0) {
      let previousSong = document.querySelectorAll('.music-player')[index - 1].querySelectorAll('.controls div')[1];
      let previousAudio = document.querySelectorAll('.music-player')[index - 1].querySelector('audio');
      let previousProgressBar = document.querySelector(`#song${index}:not(#${audioTag}) + input[type="range"]`);
  
      song.currentTime = 0;
      song.pause();
      ctrlIcon.classList.remove('fa-pause');
      ctrlIcon.classList.add('fa-play');
      progressBar.value = 0;
  
      previousAudio.currentTime = 0;
      previousAudio.play();
      previousSong.querySelector('i').classList.remove('fa-play');
      previousSong.querySelector('i').classList.add('fa-pause');
      previousProgressBar.value = 0;
    }
  }
  
  function playNext(audioTag, controlIcon) {
    let song = document.getElementById(audioTag);
    let ctrlIcon = document.getElementById(controlIcon);
    let progressBar = document.querySelector(`#${audioTag} + input[type="range"]`);
  
    let index = Array.from(document.querySelectorAll('.music-player')).indexOf(document.getElementById(audioTag).parentNode);
    if (index < document.querySelectorAll('.music-player').length - 1) {
      let nextSong = document.querySelectorAll('.music-player')[index + 1].querySelectorAll('.controls div')[1];
      let nextAudio = document.querySelectorAll('.music-player')[index + 1].querySelector('audio');
      let nextProgressBar = document.querySelector(`#song${index + 2}:not(#${audioTag}) + input[type="range"]`);
  
      song.currentTime = 0;
      song.pause();
      ctrlIcon.classList.remove('fa-pause');
      ctrlIcon.classList.add('fa-play');
      progressBar.value = 0;
  
      nextAudio.currentTime = 0;
      nextAudio.play();
      nextSong.querySelector('i').classList.remove('fa-play');
      nextSong.querySelector('i').classList.add('fa-pause');
      nextProgressBar.value = 0;
    }
  }
  