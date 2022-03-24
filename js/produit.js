(function() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', './../../JSON/commentaires.json');
    ourRequest.send();
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        var alea = getRandomInt(ourData.length)
        document.getElementById("com1").innerHTML = ourData[alea].com
        document.getElementById("auth1").innerHTML = ourData[alea].authors
        var alea2 = alea
        if (alea == 0)
            alea2 = alea + 1
        else if (alea == ourData.length)
            alea2 = alea - 1
        else
            alea2 = alea - 1
        document.getElementById("com2").innerHTML = ourData[alea2].com
        document.getElementById("auth2").innerHTML = ourData[alea2].authors
    };
}());