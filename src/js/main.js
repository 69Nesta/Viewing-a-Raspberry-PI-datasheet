import { contry } from "./lib";

document.onmouseover = function (e) {
    // document.getElementById('cursor').style.display = contry[e.target.id] ? 'flex' : 'none';
    // document.getElementById('contry_name').innerText = contry[e.target.id] ? contry[e.target.id] : ''
    // document.getElementById('contry_flag').src = contry[e.target.id] ? `https://purecatamphetamine.github.io/country-flag-icons/3x2/${e.target.id}.svg` : ''

}


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function (e) {
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 110%), 0)`
});

// window.onresize = (e) => {
//     resiseSVG(e.target.innerHeight, e.target.innerWidth)
// }
// window.onload = (e) => {
//     resiseSVG(window.innerHeight, window.innerWidth)
// }


// const resiseSVG = (h, w) => {
//     if (w * .684 < h) {
//         document.querySelector('.container svg').setAttribute("width", w)
//         document.querySelector('.container svg').setAttribute("height", w * .684)
//     } else {
//         document.querySelector('.container svg').setAttribute("width", h/.684)
//         document.querySelector('.container svg').setAttribute("height", h)
//     }
//  }