const buttons = [
    document.querySelector("#left"),
    document.querySelector("#right"),
];

let right = new Button();
right.elm = document.querySelector("#right");
right.curelm = document.querySelector("#rightcur");
right.highelm = document.querySelector("#high");
right.avgelm = document.querySelector("#avg");
right.elm.addEventListener("contextmenu",(e)=>{e.preventDefault();right.click();});

let left = new Button();
left.elm = document.querySelector("#left");
left.curelm = document.querySelector("#leftcur");
left.highelm = document.querySelector("#high");
left.avgelm = document.querySelector("#avg");
left.elm.addEventListener("click",(e)=>{e.preventDefault();left.click();});