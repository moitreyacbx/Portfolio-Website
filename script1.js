const gridback = document.querySelectorAll(".ceritem-container");
gridback[0].classList.add("coolbackground");
const but = document.querySelectorAll("button");
but[2].addEventListener("click", disptext);
for(let i=0; i<but.length-1; i++)
{
    but[i].classList.add("circular"); 
}
function disptext(){
    const usernames = document.getElementById("MessageName").value;
    document.getElementById("prompt").innerHTML = "Thank you for your message," + usernames + "!";
    document.querySelector("#buttons").innerHTML = "Submitted";
}
function changemodedark(){
    const el2 = document.querySelector("body");
    el2.style.backgroundImage = "url(https://images.freecreatives.com/wp-content/uploads/2016/04/Website-Background-Black-background.jpg)";
    const el3 = document.querySelector(".Image");
    el3.style.border =  "solid 5px rgb(255, 255, 255)";
    const el4 = document.querySelector(".Message2");
    el4.style.color = " whitesmoke";
    const el5 = document.querySelector("#buttons-2");
    el5.style.border = "solid 2px white";
    const el6 = document.querySelector(".moitreyatext");
    el6.style.color="whitesmoke";
    const el7 = document.querySelector("#heading");
    el7.style.color="whitesmoke";
    const el8 = document.querySelector("#Message");
    el8.style.color="whitesmoke";
    el8.style.textShadow="1px 1px 2px black";
    const el9 = document.querySelector(".Moitreyaimg");
    el9.style.borderColor = "whitesmoke";
    const el10 = document.querySelector("#heading2");
    el10.style.color="whitesmoke";
    const el11 = document.querySelector(".marveltext");
    el11.style.color="whitesmoke";
    const el12 = document.querySelector(".topheading");
    el12.style.background = "linear-gradient(90deg, #ffffff 0%, #4e4e48 100%)";
    el12.style.color = "black";
    const el13 = document.querySelector(".Message3");
    el13.style.color="whitesmoke";
    el13.style.textShadow="1px 1px 2px black";
    const el14 = document.querySelector(".Marvelbeatbox");
    el14.style.border = "solid 3px whitesmoke";
    const el15 = document.querySelector(".ceritem-container");
    el15.style.backgroundColor = "white";
}
function changemodelight(){
    const el2 = document.querySelector("body");
    el2.style.backgroundImage = "url(https://imgs.search.brave.com/l0ixk8510o01PVwf6p_vemhQ1Xrtl8ylBOmUdnkZ32k/rs:fit:550:250:1/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWduYm9sdHMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDEyLzEyL05vaXN5/LUdyaWQtU2VhbWxl/c3MtUGF0dGVybi1G/b3ItV2Vic2l0ZS1C/YWNrZ3JvdW5kLmpw/Zw)";
    const el3 = document.querySelector(".Image");
    el3.style.border =  "solid 5px black";
    const el4 = document.querySelector(".Message2");
    el4.style.color = " #000000";
    const el5 = document.querySelector("#buttons-2");
    el5.style.border = "solid 2px rgb(0, 0, 0)";
    const el6 = document.querySelector(".moitreyatext");
    el6.style.color="#172C5D";
    const el7 = document.querySelector("#heading");
    el7.style.color="black";
    const el8 = document.querySelector("#Message");
    el8.style.color="black";
    el8.style.textShadow="none";
    const el9 = document.querySelector(".Moitreyaimg");
    el9.style.borderColor = "black";
    const el10 = document.querySelector("#heading2");
    el10.style.color="black";
    const el11 = document.querySelector(".marveltext");
    el11.style.color="#172C5D";
    const el12 = document.querySelector(".topheading");
    el12.style.background = "-webkit-linear-gradient(to right, #666262, #000000)";
    el12.style.background = " linear-gradient(to right, #646060, #000000)";
    el12.style.color = "whitesmoke";
    const el13 = document.querySelector(".Message3");
    el13.style.color="black";
    el13.style.textShadow="none";    
    const el14 = document.querySelector(".Marvelbeatbox");
    el14.style.border = "solid 3px black";
    const el15 = document.querySelector(".ceritem-container");
    el15.style.backgroundColor = "rgb(37, 35, 35)";
}
const szch = querySelector("#heading");
const szch2 = querySelector("#heading2");
szch.style.fontSize = szch2.style.fontSize;
const nudge = document.querySelector(".img6");
nudge.style.padding="2px 0px 0px 0px";
const nudge1 = document.querySelector(".ceritem-container");
nudge1.style.padding="10px 5px 7px 5px";
let headin= document.body.children;
headin[1].style.position = "relative";
headin[1].style.bottom = "2rem";
headin[1].style.textShadow = "2px 2px 2px 2px";
