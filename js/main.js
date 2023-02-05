const result = document.querySelector('#outputscreen');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((elem) => {
    elem.onclick = () => {
        if (elem.id === 'clear') {
            result.value = '';
        }
        else if (elem.id === 'del') {
            let string = result.value.toString();
            result.value = string.slice(0, -1);
        }
        else if (elem.id !== '' && elem.id !== '=' && elem.id !== 'scr') {
            result.value += elem.id;
        }
        else if (elem.id === 'scr') {
            let scr = Math.sqrt(result.value)
            console.log(scr)
            result.value = scr;
        }
        else if (elem.id === '=') {
            let equal = eval(result.value);
            result.value = equal;
        }
    }
})