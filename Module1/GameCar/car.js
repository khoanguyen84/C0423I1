const Arrow_Left = 37;
const Arrow_Up = 38;
const Arrow_Right = 39;
const Arrow_Down = 40;

const A_Key = 65;
const W_Key = 87;
const D_Key = 68;
const S_Key = 83;

const step = 5;
document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case Arrow_Left:
        case A_Key: {
            moveToLeft();
            break;
        }
        case Arrow_Right:
        case D_Key: {
            let car = document.getElementById('car');
            car.src = 'images/right.png';
            car.style.width = '150px';
            car.style.height = '75px';
            if (parseInt(car.style.left) + parseInt(car.style.width) + step < window.innerWidth) {
                car.style.left = parseInt(car.style.left) + step + 'px';
            }
            break;
        }
        case Arrow_Up:
        case W_Key: {
            let car = document.getElementById('car');
            car.style.width = '75px';
            car.style.height = '150px';
            car.src = 'images/up.png';
            if (parseInt(car.style.top) - step > 0) {
                car.style.top = parseInt(car.style.top) - step + 'px';
            }
            break;
        }
        case Arrow_Down:
        case S_Key: {
            let car = document.getElementById('car');
            car.style.width = '75px';
            car.style.height = '150px';
            car.src = 'images/down.png';
            if (parseInt(car.style.top) + parseInt(car.style.height) + step < window.innerHeight) {
                car.style.top = parseInt(car.style.top) + step + 'px';
            }
            break;
        }
        default: {
            alert('Please press arrow keys')
        }
    }
})

function moveToLeft() {
    let car = document.getElementById('car');
    car.src = 'images/left.png';
    car.style.width = '150px';
    car.style.height = '75px';
    if (parseInt(car.style.left) - step > 0) {
        car.style.left = parseInt(car.style.left) - step + 'px';
    }
}