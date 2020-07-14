let request = new XMLHttpRequest();

let arr = new Array();

request.onload = function () {
    let data = JSON.parse(this.response);
    printData(data);
}

request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
request.send();

function printData (data) {

    output = "";
    for(let i=0; i < 4; i++)
    {
        output += "<p style='margin: 5px';> ID:" + data[i].id + ". Title: " + data[i].title 
        + "</p> <hr style='border: 1px solid #1E2123;width: 100%;'>";
    }
    document.getElementById("items-table").innerHTML = output;

}