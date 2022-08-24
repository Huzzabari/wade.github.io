const myImageOrange = document.querySelector('#orange');

myImageOrange.onclick = () => {
    const mySrc = myImageOrange.getAttribute('src');
    if (mySrc === '../images/orange.jpg') {
        myImageOrange.setAttribute('src', '../images/orange-inverse.jpg');
    } else {
        myImageOrange.setAttribute('src', '../images/orange.jpg');
    }
}
/* good shit below */
