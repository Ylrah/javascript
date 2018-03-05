

var reponse = prompt("Hey tu aime \u00e7a les patates ?")
if (reponse.startsWith("Y") || reponse.startsWith("y") || reponse.startsWith("O") || reponse.startsWith("o"))
{
    var patate = "";
    for (var i = 0; i < 7; i++)
    {
    patate = patate + "#";
    console.log(patate);
    }

} else if (reponse.startsWith("N") || reponse.startsWith("n"))
    {
        alert("Je vous sens tiraill\u00e9")
} else{

    alert("Dommage T_T")
}

