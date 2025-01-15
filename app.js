const productp = document.querySelectorAll('.productp')
const buttons = document.querySelectorAll('.fl-buttons');
const counterElement = document.getElementById('counter');
const plusBtn = document.querySelectorAll('.plus-btn')
let count = 0;
const all = document.getElementById('all')
const sec = document.getElementById('hidden-sec')
const hide = document.getElementById('hide')
const buttonBox = document.getElementById('buttonBox')
const buttonBox1 = document.getElementById('buttonBox1')
buttons.forEach(button => {
    button.addEventListener('click', () => {

        buttons.forEach(btn => btn.classList.remove('title-button-active'));
        button.classList.add('title-button-active');
    });
});

plusBtn.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        counterElement.textContent = count;
        if (count == 15) {
            alert("boymisiz bratim?)")


        }
        if (count == 20) {
            alert("bu sizga optom bozor mas")
        }
    });
});

all.addEventListener('click', () => {
    sec.classList.add('not-hidden')
    sec.classList.remove('hidden')
    buttonBox1.classList.add('display-none')
    buttonBox1.classList.remove('display-block')
    buttonBox.classList.remove('display-none')
    buttonBox.classList.add('display-block')
});
hide.addEventListener('click', () => {
    sec.classList.remove('not-hidden')
    sec.classList.add('hidden')
    buttonBox.classList.remove('display-block')
    buttonBox.classList.add('display-none')
    buttonBox1.classList.add('display-block')
});

