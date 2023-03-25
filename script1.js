let heading= document.body.children;
heading[1].innerHTML = "Welcome to Moitreya's Portfolio Website";
function disptext(){
    const usernames = document.getElementById("MessageName").value;
    document.getElementById("prompt").innerHTML = "Thank you for your message," + usernames + "!";
    document.querySelector("button#buttons.update").innerHTML = "Submitted";
}
function changemodedark(){
    const el= document.querySelector("link");
    el.href = "style2.css";
}
function changemodelight(){
    const el= document.querySelector("link");
    el.href = "style.css";
}
