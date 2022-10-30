/* global declarations */
let totalImage = 19;

/* Image declaration and sourcing */
let level1Img = new Image();
level1Img.src = './img/level-1.png';
level1Img.id = 'level-1';

let backLeftImg = new Image();
backLeftImg.src = './img/side-bar.jpg';
backLeftImg.id = 'background-left';

let backRightImg = new Image();
backRightImg.src = './img/side-bar.jpg';
backRightImg.id = 'background-right';

let backBottomImg = new Image();
backBottomImg.src = './img/bottom-bar.jpg';
backBottomImg.id = 'background-bottom';

let playerSprite = new Image();
playerSprite.src = './img/darth-vader.png';
playerSprite.id = 'player-sprite';

let spike = new Image();
spike.src = './img/spikes.png';
spike.id = 'spikes';

let arrow = new Image();
arrow.src = './img/arrow.png';
arrow.id = 'arrow';

let ball1 = new Image();
ball1.src = './img/level-1-ball.png';
ball1.id = 'ball-1';

let torch = new Image();
torch.src = './img/torch.png';
torch.id = 'torch';

let level = new Image();
level.src = './img/level.png';
level.id = 'level';

let playerB = new Image();
playerB.src = './img/player.png';
playerB.id = 'player';

let emptyBox = new Image();
emptyBox.src = './img/empty-box.png';
emptyBox.id = 'empty-box';

let bouncePu = new Image();
bouncePu.src = './img/bounce-height.jpg';
bouncePu.id = 'PU-bounce';

let extraTimePu = new Image();
extraTimePu.src = './img/clock.png';
extraTimePu.id = 'PU-extra-time';

let coinPu = new Image();
coinPu.src = './img/coin.png';
coinPu.id = 'PU-coin';

let extraLifePu = new Image();
extraLifePu.src = './img/extra-life.png';
extraLifePu.id = 'PU-extra-life';

let razorBulletPu = new Image();
razorBulletPu.src = './img/razor-bullet.jpg';
razorBulletPu.id = 'PU-razor-bullet';

let spikeArrowPu = new Image();
spikeArrowPu.src = './img/spike-arrow.jpg';
spikeArrowPu.id = 'PU-spike-arrow';

let bullet = new Image();
bullet.src = './img/bullet.png';
bullet.id = 'PU-bullet';


const startButton = document.querySelector('.start-button');

const putHighScore = document.querySelector('.high-score');



class Preloader {
    constructor() {
        this.imageCount = 0;
        this.preLoader = document.querySelector('.pre-loader');

    }
    loadImg() {

        level1Img.onload = () => {
            this.imageCount += 1;
        }
        backLeftImg.onload = () => {
            this.imageCount += 1;
        }
        backRightImg.onload = () => {
            this.imageCount += 1;
        }
        backBottomImg.onload = () => {
            this.imageCount += 1;
        }
        playerSprite.onload = () => {
            this.imageCount += 1;
        }
        spike.onload = () => {
            this.imageCount += 1;
        }
        arrow.onload = () => {
            this.imageCount += 1;
        }
        ball1.onload = () => {
            this.imageCount += 1;
        }
        torch.onload = () => {
            this.imageCount += 1;
        }
        level.onload = () => {
            this.imageCount += 1;
        }
        playerB.onload = () => {
            this.imageCount += 1;
        }
        emptyBox.onload = () => {
            this.imageCount += 1;
        }
        bouncePu.onload = () => {
            this.imageCount += 1;
        }
        extraTimePu.onload = () => {
            this.imageCount += 1;
        }
        coinPu.onload = () => {
            this.imageCount += 1;
        }
        extraLifePu.onload = () => {
            this.imageCount += 1;
        }
        razorBulletPu.onload = () => {
            this.imageCount += 1;
        }
        spikeArrowPu.onload = () => {
            this.imageCount += 1;
        }
        bullet.onload = () => {
            this.imageCount += 1;
        }
        this.checkLoader();
    }

    checkLoader() {
        let checker = setInterval(() => {
            if (this.imageCount == totalImage) {

                startButton.addEventListener('click', () => {
                    this.menuPage();


                })
                clearInterval(checker);
                this.getHighScore();
            }

        }, 100);


    }
    removePreLoader() {
        this.preLoader.style.display = 'none';
    }

    getHighScore() {
        let getScore = localStorage.getItem("highScore");
        if (!getScore) {
            localStorage.setItem("highScore", "0");
        }
        putHighScore.innerHTML = 'HIGH SCORE : ' + getScore;
    }

    menuPage() {

        this.removePreLoader();
        var game = new Game();
        game.Play();
    }
}

var preloader = new Preloader();
preloader.loadImg();