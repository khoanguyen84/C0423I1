const win_1 = "http://127.0.0.1:5500/images/1.1.jpghttp://127.0.0.1:5500/images/2.1.jpghttp://127.0.0.1:5500/images/3.1.jpghttp://127.0.0.1:5500/images/4.1.jpghttp://127.0.0.1:5500/images/5.1.jpg"
const win_2 = "http://127.0.0.1:5500/images/1.2.jpghttp://127.0.0.1:5500/images/2.2.jpghttp://127.0.0.1:5500/images/3.2.jpghttp://127.0.0.1:5500/images/4.2.jpghttp://127.0.0.1:5500/images/5.2.jpg"
const win_3 = "http://127.0.0.1:5500/images/1.3.jpghttp://127.0.0.1:5500/images/2.3.jpghttp://127.0.0.1:5500/images/3.3.jpghttp://127.0.0.1:5500/images/4.3.jpghttp://127.0.0.1:5500/images/5.3.jpg"
function changeImage(row) {
    let image_path;
    let rnd;
    let image_name;
    do {
        rnd = Math.ceil(Math.random() * 3)
        image_name = `${row}.${rnd}.jpg`;
        image_path = `images/${image_name}`;
    }
    while (document.getElementById(`image_${row}`).src == `http://127.0.0.1:5500/${image_path}`)
    document.getElementById(`image_${row}`).src = image_path;
    let checkWin = document.getElementById('image_1').src +
                    document.getElementById('image_2').src +
                    document.getElementById('image_3').src +
                    document.getElementById('image_4').src +
                    document.getElementById('image_5').src 
                    
    if(checkWin == win_1 || checkWin == win_2 || checkWin == win_3 ){
        document.getElementById('image_1').classList.add('done');
        document.getElementById('image_2').classList.add('done');
        document.getElementById('image_3').classList.add('done');
        document.getElementById('image_4').classList.add('done');
        document.getElementById('image_5').classList.add('done');
    }
    else {
        document.getElementById('image_1').classList.remove('done');
        document.getElementById('image_2').classList.remove('done');
        document.getElementById('image_3').classList.remove('done');
        document.getElementById('image_4').classList.remove('done');
        document.getElementById('image_5').classList.remove('done');
    }
}

// const win_1 = "1.12.13.14.15.1"
// const win_2 = "1.22.23.24.25.2"
// const win_3 = "1.32.33.34.35.3"
// function changeImage(row) {
//     let image_path;
//     let rnd;
//     let image_name;
//     do {
//         rnd = Math.ceil(Math.random() * 3)
//         image_name = `${row}.${rnd}.jpg`;
//         image_path = `images/${image_name}`;
//         document.getElementById(`image_${row}`).setAttribute(`data-${row}`, `${row}.${rnd}`)
//     }
//     while (document.getElementById(`image_${row}`).src == `http://127.0.0.1:5500/${image_path}`)
//     document.getElementById(`image_${row}`).src = image_path;
//     let checkWin = document.getElementById('image_1').getAttribute('data-1') +
//                     document.getElementById('image_2').getAttribute('data-2') +
//                     document.getElementById('image_3').getAttribute('data-3') +
//                     document.getElementById('image_4').getAttribute('data-4') +
//                     document.getElementById('image_5').getAttribute('data-5') 
//     console.log(checkWin);         
//     if(checkWin == win_1 || checkWin == win_2 || checkWin == win_3 ){
//         document.getElementById('image_1').classList.add('done');
//         document.getElementById('image_2').classList.add('done');
//         document.getElementById('image_3').classList.add('done');
//         document.getElementById('image_4').classList.add('done');
//         document.getElementById('image_5').classList.add('done');
//     }
//     else {
//         document.getElementById('image_1').classList.remove('done');
//         document.getElementById('image_2').classList.remove('done');
//         document.getElementById('image_3').classList.remove('done');
//         document.getElementById('image_4').classList.remove('done');
//         document.getElementById('image_5').classList.remove('done');
//     }
// }