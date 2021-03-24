// fetch the 150 Pokemon

$(document).ready(function () {
    $("#btn").click(function () {
        getData()
    });
})
function getData() {
    var randInt = getRndInteger(1, 151)
    getRanPoke(randInt)
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRanPoke(id) {
    $.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function (data) {
        console.log(data.name);
        // This will show up on browser.
        console.log(data);
        // This will be shown only on the console.
        var htmlstr = ""
        htmlstr += `<h4>${data.name}</h4>`
        $("#showPoke").append(htmlstr)
    });
}



