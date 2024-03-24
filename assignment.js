const input = document.getElementById('btnPress')
const checkerBtn = () => {

let input = prompt('Enter any data of your chioce');
if ( typeof input === 'undefined' || input === '' ) {
    alert('please your data type is Undefined');
   

}
else if (Number(input)) {
    document.getElementById('outCome').innerHTML = 'the input is a Number';
    
}
else if (typeof input === 'string') {
    document.getElementById('outCome').innerHTML = 'the input is a String';
}
else {
    document.getElementById('outCome').innerHTML = 'the input is a other type of data';
}
};

input.addEventListener('click', checkerBtn);