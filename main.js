
let text = "Onclick Text Animation";
let show = document.getElementById("show")
let i = 0;

function main (){
    document.body.innerText = text.slice(0,i)
    i++;
    if (i > text.length){
        i=0;
    }
    setInterval(main)
    return false
}



