
const button = document.getElementById('loader-button');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');

two.style.display = 'none';
three.style.display = 'none';

button.onclick = function() {

    button.style.width = '9vw';
    button.innerHTML = `continue`;
    one.style.display = 'none';
    two.style.display = 'block';
    two.style.opacity = '1';

    button.onclick = function() {
        button.innerHTML = `:/`;
        button.style.width = '10vw';
        two.style.display = 'none';
        three.style.display = 'block';
    }

};