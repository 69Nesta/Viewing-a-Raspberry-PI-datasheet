import { getParents } from "./lib";

document.onmouseover = function (e) {
    const data = window.data[getParents(e.target).filter(element => window.data[element])[0]]

    document.getElementById('component_title').innerText = data ? data.title : '';
    document.getElementById('component_content').innerText = data ? data.content : '';
    document.getElementById('cursor').style.display = data ? 'flex' : 'none';
}

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function (e) {
    const box = document.getElementById('cursor')
    const bowWidth = box.clientWidth
    const bowHeight = box.clientHeight

    let finalTranslateX = e.clientX
    if ((e.clientX + 325) >= window.innerWidth)
        finalTranslateX = window.innerWidth - 350
    else if ((e.clientX - bowWidth / 2) < 1)
        finalTranslateX = (bowWidth / 2) + 10

    let finalTranslateY = e.clientY
    if ((finalTranslateY - bowHeight - 30)<1)
        finalTranslateY = 250

    cursor.style.transform = `translate3d(calc(${finalTranslateX}px - 50%), calc(${finalTranslateY}px - 110%), 0)`
});