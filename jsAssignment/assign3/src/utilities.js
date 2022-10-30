function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
        leftPressed = false;
        KEYS[e.key] = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
        rightPressed = false;
        KEYS[e.key] = true;
    } else if (e.key == " " || e.key == "Space") {
        spacePressed = true;
        KEYS[e.key] = true;
    }
}

function keyUpHandler(e) {
    delete KEYS[e.key];
    if (e.key == ' ') {
        spacePressed = false;
    } else if (e.key == 'ArrowRight') {

        rightPressed = false;
    } else if (e.key == 'ArrowLeft') {

        leftPressed = false;
    }
}