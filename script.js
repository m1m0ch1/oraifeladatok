function kiir(eredmeny) {
    document.getElementById("eredmeny").innerHTML += eredmeny + "<br>";
}

function tombKiir (tomb) {
    tomb.forEach(element => {
        document.getElementById("eredmeny").innerHTML += element + "<br>"
    });
}




var szoveg = "maci dalol a mezőn és nézi az eget";
var szamsor = "3:15:30:45:60"

function csinald() {
    kiir(szoveg.length)
    kiir(szoveg.substring(5))
    kiir(szoveg.substring(-5,15))
    kiir(szoveg.replace("Maci", "Macika"))
    kiir(szoveg.concat(["buborék", "ajhkdjha"]))
    kiir(szoveg.charAt(8))
    kiir(szoveg.split(" "))
    tombKiir(szoveg.split(" "))
    kiir(szoveg.toLowerCase())
    kiir(szoveg.toUpperCase())
    kiir(szoveg.trim())

    //1
    var szoveg = "Bankban jártam és bankosítottma a bankár bankszámláját.";
    Kiir(szoveg.replace("b", "B" && "c", "C"))
    

    //2
    szamli = szamsor.split()
    osszegzes = 0
    szamli.forEach(d => {
        osszegzes += d
    })

    
}
















