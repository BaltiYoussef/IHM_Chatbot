(function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', './articles/description.json');
    ourRequest.send();
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        var j = 0
        while (j < ourData.length) {
            document.getElementById("description" + j).innerHTML = ourData[j].description;
            document.getElementById("name" + j).innerHTML = ourData[j].name;
            document.getElementById("prix" + j).innerHTML = ourData[j].prix;




            j++;

        }
    };
}());