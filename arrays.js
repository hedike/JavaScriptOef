// let students = [];
// let teacher = new Array();

let students = [    "Steven",
                    "Jennifer",
                    "Hugh",
                    "Charlie",
                    "Loulou",
                    "Delia",
                    "Elliott"   ];

students[5] = "Della";

//document.getElementById("output").innerHTML = students[5];

console.log(students.length);

let loopcounter = 0;
while(loopcounter < students.length){
    document.getElementById("output").innerHTML += students[loopcounter] + "<br/>";
    loopcounter++;
}

let grades = [75,88,94,100,67,79,85,81,79];
let total = 0;
for(let x=0; x<grades.length; x++){
    total = total + grades[x];
}
document.getElementById("output").innerHTML += Math.round(total/grades.length);