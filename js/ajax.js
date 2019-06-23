var placeholder = document.getElementById('placeholder');
function loadSomeData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(
        function (response) { return response.json() }
    ).then(function (json) {
        placeholder.innerHTML = JSON.stringify(json);
    });
}