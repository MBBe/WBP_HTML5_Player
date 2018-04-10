var yourAudio = PrisonerPage_noFlash.getElementById('yourAudio'),
    ctrl = PrisonerPage_noFlash.getElementById('audioControl');

ctrl.onclick = function () {

    // Update the Button
    var pause = ctrl.innerHTML === 'pause!';
    ctrl.innerHTML = pause ? 'play!' : 'pause!';

    // Update the Audio
    var method = pause ? 'pause' : 'play';
    yourAudio[method]();

    // Prevent Default Action
    return false;
};