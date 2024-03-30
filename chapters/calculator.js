function display(val) {
    document.getElementById('result2').value += val;
}

function solve1() {
    let x = document.getElementById('result2').value;
    let y = eval(x);
    document.getElementById('result1').value =y;
        document.getElementById('result2').value = ''; 
}


function clearScreen1() {
    document.getElementById('result1').value =''
}

function clearScreen() {
    document.getElementById('result2').value =''
} 

