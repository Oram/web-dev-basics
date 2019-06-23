function changeHeadingColor() {
    var h1 = document.querySelector('h1');
    h1.style.color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
}