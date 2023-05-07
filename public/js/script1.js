const but = document.querySelectorAll("button");
but[2].addEventListener("click", disptext);
for (let i = 0; i < but.length - 1; i++) {
  but[i].classList.add("circular");
}
function disptext() {
  const usernames = document.getElementById("MessageName").value;
  document.getElementById("prompt").innerHTML =
    "Thank you for your message," + usernames + "!";
  document.querySelector("#buttons").innerHTML = "Submitted";
  document.querySelector("#Message2").innerHTML = "";
  usernames.innerHTML = "";
}
{
  remove = () => {
    document.getElementById("prompt").innerHTML = "";
    document.querySelector("#buttons").innerHTML = "Submit";
  };
}

function changemodedark() {
  const el1 = document.querySelector(".title");
  el1.style.color = "whitesmoke";
  const el2 = document.querySelector("body");
  el2.style.backgroundImage =
    "url(https://images.freecreatives.com/wp-content/uploads/2016/04/Website-Background-Black-background.jpg)";
  const el3 = document.querySelector(".Image");
  el3.style.border = "solid 5px rgb(255, 255, 255)";
  const el4 = document.querySelector(".Message2");
  el4.style.color = " whitesmoke";
  const el5 = document.querySelector("#buttons-2");
  el5.style.border = "solid 2px white";
  const el6 = document.querySelector(".moitreyatext");
  el6.style.color = "whitesmoke";
  const el7 = document.querySelector("#heading");
  el7.style.color = "whitesmoke";
  const el8 = document.querySelector("#Message");
  el8.style.color = "whitesmoke";
  el8.style.textShadow = "1px 1px 2px black";
  const el9 = document.querySelector(".Moitreyaimg");
  el9.style.borderColor = "whitesmoke";
  const el10 = document.querySelector("#heading2");
  el10.style.color = "whitesmoke";
  el10.style.webkitTextStrokeColor = "none";
  const el11 = document.querySelector(".marveltext");
  el11.style.color = "whitesmoke";
  const el13 = document.querySelector(".Message3");
  el13.style.color = "whitesmoke";
  el13.style.textShadow = "1px 1px 2px black";
  const el14 = document.querySelector(".Marvelbeatbox");
  el14.style.border = "solid 3px whitesmoke";
  const el16 = document.querySelector(".footer");
  el16.style.backgroundColor = "seashell";
  el16.style.color = "#242b3a";
}
function changemodelight() {
  const el1 = document.querySelector(".title");
  el1.style.color = "#1e7fe7";
  const el2 = document.querySelector("body");
  el2.style.backgroundImage =
    "url(https://imgs.search.brave.com/l0ixk8510o01PVwf6p_vemhQ1Xrtl8ylBOmUdnkZ32k/rs:fit:550:250:1/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWduYm9sdHMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDEyLzEyL05vaXN5/LUdyaWQtU2VhbWxl/c3MtUGF0dGVybi1G/b3ItV2Vic2l0ZS1C/YWNrZ3JvdW5kLmpw/Zw)";
  const el3 = document.querySelector(".Image");
  el3.style.border = "solid 5px black";
  const el4 = document.querySelector(".Message2");
  el4.style.color = " #000000";
  const el5 = document.querySelector("#buttons-2");
  el5.style.border = "solid 2px rgb(0, 0, 0)";
  const el6 = document.querySelector(".moitreyatext");
  el6.style.color = "#172C5D";
  const el7 = document.querySelector("#heading");
  el7.style.color = "#1e7fe7";
  const el8 = document.querySelector("#Message");
  el8.style.color = "black";
  el8.style.textShadow = "none";
  const el9 = document.querySelector(".Moitreyaimg");
  el9.style.borderColor = "black";
  const el10 = document.querySelector("#heading2");
  el10.style.color = "#1e7fe7";
  const el11 = document.querySelector(".marveltext");
  el11.style.color = "#172C5D";
  const el13 = document.querySelector(".Message3");
  el13.style.color = "black";
  el13.style.textShadow = "none";
  const el14 = document.querySelector(".Marvelbeatbox");
  el14.style.border = "solid 3px black";
  const el16 = document.querySelector(".footer");
  el16.style.backgroundColor = "#242b3a";
  el16.style.color = "white";
}
function titleanim() {
  const container2 = document.querySelector(".contain");
  container2.style.animation = "none";
}
function titleanim1() {
  const tit1 = document.querySelector(".topheading");
  const container2 = document.querySelector(".contain");
  container2.style.animation = "none";
  container2.style.animation = "rotate-hor-center 1s linear 1 both";
  if (tit1.innerHTML === "Moitreya") {
    tit1.innerHTML = "MarvelBeatbox";
  } else if (tit1.innerHTML === "MarvelBeatbox") {
    tit1.innerHTML = "Moitreya";
  }
}
setInterval(titleanim, 1000);
setInterval(titleanim1, 2000);
const head = (document.querySelector(".title").style.fontStyle = "normal");
const cont = (document.querySelector(".contbutt").style.bottom = "35px");
const title = document.querySelector(".title");
title.style.marginBottom = "35px";
const szch = document.querySelector("#heading");
const szch2 = document.querySelector("#heading2");
szch.style.fontSize = szch2.style.fontSize;
szch2.style.position = "relative";
szch2.style.top = "1rem";
szch2.style.left = "1rem";
szch2.style.fontStyle = "normal";
szch.style.fontStyle = "normal";
const container1 = document.querySelector(".contain");
container1.style.display = "flex";
container1.style.justifyContent = "center";
container1.style.position = "relative";
container1.style.bottom = "3.1rem";
container1.style.background =
  "url(https://imgs.search.brave.com/JLoaFEemk7fhJ8j9ma7dFT4kd_MXbZw9t5D6-j7CSV4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDMzNDAx/OTAuanBn)";
container1.style.borderRadius = "50px";
container1.style.height = "8rem";
container1.style.border = "3px double whitesmoke";
const tit = document.querySelector(".topheading");
tit.innerHTML = "Moitreya";
tit.style.fontStyle = "normal";
tit.style.letterSpacing = "10px";
tit.style.fontWeight = "900";
const footer = document.querySelector(".footer");
const name1 = document.createElement("p");
name1.innerHTML = "Moitreya Chattopadhyay";
footer.appendChild(name1);
footer.style.display = "flex";
footer.innerHTML =
  "Copyright &copy - 2023 All Rights Reserved <br>Moitreya Chattopadhyay,Student of JU";
footer.style.fontStyle = "bold";
footer.style.fontSize = "20px";
footer.style.fontFamily = "Arial-Black";
footer.style.backgroundColor = "#242b3a";
footer.style.color = "white";
footer.style.justifyContent = "center";
footer.style.marginTop = "10px";
footer.style.padding = "5px";
footer.style.borderRadius = "5px";
const level = document.querySelector(".level");
level.style.display = "flex";
level.classList.add("topheading");
level.style.justifyContent = "center";
level.innerHTML = "Skill Level :<br>  Hover to Display";
level.style.fontSize = "26px";
level.style.top = "18px";
level.style.backgroundColor = "whitesmoke";
leveladvanced = () => {
  level.innerHTML = "Skill Level :<br> Advanced";
};
levelbasic = () => {
  level.innerHTML = "Skill Level :<br> Beginner";
};
levelintermediate = () => {
  level.innerHTML = "Skill Level :<br> Intermediate";
};
hovering = () => {
  level.innerHTML = "Skill Level :<br> Hover to Display";
};
const ref = document.querySelector(".disp");
ref.style.display = "flex";
ref.classList.add("topheading");
ref.style.justifyContent = "center";
ref.style.fontSize = "26px";
ref.innerHTML = "Click to display";
ref.style.top = "15px";
ref.style.textSpacing = "100px";
(() => {
  //If you want to add more images, add the link name and URL image URL in the array list below.
  const images_list = [
    {
      url: "./../images/Screenshot (1).png",
      alt: "",
      name: "Resume",
      link: "./../html/cert1.html",
    },
    {
      url: "./../images/Moitreya Chattopadhyay _page-0001.jpg",
      alt: "",
      name: "Microsoft Learn",
      link: "./../html/cert2.html",
    },
    {
      url: "./../images/Screenshot (7).png",
      alt: "",
      name: "Mimo Web",
      link: "./../html/cert7.html",
    },
    {
      url: "./../images/WhatsApp Image 2023-03-24 at 19.34.32.jpg",
      alt: "",
      name: "Physics Seminar",
      link: "./../html/cert4.html",
    },
    {
      url: "./../images/1681133872320.jpeg",
      alt: "",
      name: "Mimo SQL",
      link: "./../html/cert6.html",
    },
    {
      url: "./../images/Screenshot (4).png",
      alt: "",
      name: "Internshala Python",
      link: "./../html/cert3.html",
    },
    {
      url: "./../images/Screenshot (5).png",
      alt: "",
      name: "Open Weaver Web",
      link: "./../html/cert5.html",
    },
    {
      url: "./../images/67 (1).png",
      alt: "",
      name: "Javascript Career Ninja",
      link: "./../html/cert8.html",
    },
  ];

  let slider_id = document.querySelector("#hcg-slider-1");
  let dots_div = "";
  let images_div = "";
  for (let i = 0; i < images_list.length; i++) {
    let href =
      images_list[i].link == "" ? "" : ' href="' + images_list[i].link + '"';
    images_div +=
      "<a" +
      href +
      ' class="hcg-slides animated"' +
      (i === 0 ? ' style="display:flex"' : "") +
      ">" +
      '<img src="' +
      images_list[i].url +
      '" alt="' +
      images_list[i].name +
      '">' +
      '<span class="hcg-slide-text">' +
      images_list[i].name +
      "</span>" +
      "</a>";
    dots_div +=
      '<a href="#" class="hcg-slide-dot' +
      (i === 0 ? " dot-active" : "") +
      '" data-id="' +
      i +
      '"></a>';
  }
  slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
  slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;

  let slide_index = 0;

  const images = slider_id.querySelectorAll(".hcg-slides");
  const dots = slider_id.querySelectorAll(".hcg-slide-dot");
  const showSlides = () => {
    if (slide_index > images.length - 1) {
      slide_index = 0;
    }
    if (slide_index < 0) {
      slide_index = images.length - 1;
    }
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
      dots[i].classList.remove("dot-active");
      if (i == slide_index) {
        images[i].style.display = "flex";
        dots[i].classList.add("dot-active");
      }
    }
  };

  const dot_click = (event) => {
    event.preventDefault();
    slide_index = event.target.dataset.id;
    showSlides();
  };

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", dot_click, false);
  }
  setInterval(() => {
    slide_index++;
    showSlides();
  }, 3000);
})();
/*End*/
