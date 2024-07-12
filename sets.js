let bands = new Set();
bands.add("Bowie");
bands.add("The Beatles");
bands.add("Blondie");
bands.add("Fischer-Z");
bands.add("Doobie Brothers");

bands.delete("Bowie");

console.log(bands);

if(bands .has("Blondie")){
    console.log("Blondie is included")
}

if(bands.has("Van Halen")){
    console.log("Van Halen is included")
} else {
    console.log("No Van Halen, sorry")
}

for(const band of bands){
    console.log(band);
}

// MAPS

let team = new Map(
    [
        ["keeper", "Casteels"],
        ["verdediger", "Vertonghen"],
        ["midden", "De Bruyne"],
        ["voor", "Lukaku"]
    ]
)

document.getElementById("output").innerHTML = team.get("voor");