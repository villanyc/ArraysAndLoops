let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];

for(let i = 0; i < color.length; i++){
if (i < o.length-1){
console.log(i+1+o[i+1]+' choice is '+color[i]);
}
else if(i >= o.length-1){
console.log(i+1+o[0]+' choice is '+color[i]);
}

}