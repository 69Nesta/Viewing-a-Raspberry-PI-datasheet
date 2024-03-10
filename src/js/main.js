import { composent, getParents } from "./lib";

document.onmouseover = function (e) {
    const data = composent[getParents(e.target).filter(element => composent[element])[0]]

    document.getElementById('component_title').innerText = data ? data.title : '';
    document.getElementById('component_content').innerText = data ? data.content : '';
    document.getElementById('cursor').style.display = data ? 'flex' : 'none';
}

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function (e) {
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 110%), 0)`
});