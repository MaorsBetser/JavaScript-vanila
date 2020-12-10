document.addEventListener('DOMContentLoaded', function(){
    function printToScreen(){
        let text = document.getElementById('inputText').value;
        // document.querySelector('h1').innerHTML = 
        console.log(text.split("").reverse().join(""));
    } 
    document.querySelector('button').onclick = printToScreen;
});
