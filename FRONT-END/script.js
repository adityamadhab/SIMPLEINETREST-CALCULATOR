async function calculateInterest() {
    const principle = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;

    const response = await fetch('http://localhost:3000/simpleinterest?principle=' + principle + '&rate=' + rate + '&time=' + time);
    const interest = await response.json();

    document.getElementById('result').innerHTML = "Simple Interest is "+interest['Interest'];

}

//debounced function (used with oninput in input tag)
let timeout;
function debouncedcalculateInterest() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        calculateInterest();
    },100);
}