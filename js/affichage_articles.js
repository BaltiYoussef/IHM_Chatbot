(function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', './../JSON/description.json');
    ourRequest.send();
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        var j = 0
        while (j < ourData.length) {
            document.getElementById("img" + j).setAttribute('xlink:href', ourData[j].image);
            document.getElementById("description" + j).innerHTML = ourData[j].description;
            document.getElementById("prix" + j).innerHTML = ourData[j].prix;
            j = j + 1
        }
    };

    Pub = window.open("roulette.html", "pub", "toolbar=no,menubar=no,scrollbars=no,status=yes,resizable=1,width=500, height=400, top=200, left=450");
}());