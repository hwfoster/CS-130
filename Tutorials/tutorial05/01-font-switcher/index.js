variable = 1
const makeBigger = () => {
   //alert('make bigger!');
   variable += 1
   document.querySelector("h1").style.fontSize= variable + "em";
   document.querySelector(".content").style.fontSize = variable + "em";
};

const makeSmaller = () => {
   //alert('make smaller!');
   variable -= 1
   document.querySelector("h1").style.fontSize = variable + "em";
   document.querySelector(".content").style.fontSize = variable + "em";
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

