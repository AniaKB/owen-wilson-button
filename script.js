
function playSound (file) {
    var path = 'owen-wilson-audio-files/';
    var fullPath = path + file + '.mp3';

    var sound = new Audio(fullPath);
    sound.addEventListener('canplaythrough', function () {
        sound.play();
    });
}

var index = 1;
function playNextSound () {
    playSound('Wow' + index);
    index = index + 1;
    if (index > 9) {
        index = 1;
    }
}
