//select DOM Items
// const afoText = document.querySelector(".aforisma");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
// project btn
const projBtn1 = document.querySelector(".btn-light");
const projImg1 = document.querySelector(".imgP1");


// const projBtn2 = document.querySelector(".btn-light 2");
// const projBtn3 = document.querySelector(".btn-light 3");
// const projBtn4 = document.querySelector(".btn-light 4");
// Set Initial state of Menu
let showMenu = false;
let zoomImg = false;

menuBtn.addEventListener("click", toggleMenu);
projBtn1.addEventListener("click", expandImg);

function expandImg() {
  if (!zoomImg) {
    projImg1.classList.add("zoomImg");
    zoomImg = true;
  }
  else {
    projImg1.classList.remove("zoomImg");
    zoomImg = false;
  }
}


function toggleMenu() {
  if (!showMenu) {
    randAforism();
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}

// AFORISMI
var a = "Lo scopo del lavoro è quello di guadagnarsi il tempo libero. <br> -Aristotele";
var b = "Ritrovarsi insieme è un inizio, <br> restare insieme è un progresso, <br> ma riuscire a lavorare insieme è un successo. <br> - Henry Ford";
var c = "Hai raggiunto il successo nel tuo campo quando non sai <br> se quello che stai facendo è lavoro o gioco. <br> - Warren Beatty";
var d = "Siate affamati! Siate folli! <br> - Steve Jobs";
var e = "Il mondo è nelle mani di coloro che hanno il coraggio di sognare <br> e di correre il rischio di vivere i propri sogni. <br> - Paulo Coelho";
var f = "Se oggi vado a letto non avendo fatto <br> niente di nuovo rispetto a ieri, <br> allora oggi è stato sprecato. <br> - Bill Gates";
var g = "C'è un solo tipo di successo: <br> quello di fare della propria vita <br> ciò che si desidera. <br> - Henry David Thoreau";
var h = "Le difficoltà rafforzano la mente, <br> come la fatica rafforza il corpo. <br> - Lucio Anneo Seneca";
const aforismi = [a, b, c, d, e, f, g, h];

// aforisma random
function randAforism() {
  let textNow = document.getElementById("aforisma").innerHTML;
  console.log(textNow);
  var par = aforismi[Math.floor(Math.random()*aforismi.length)];
  if (par != textNow) {
    // console.log("diversi");
    // write in <p>
    return document.getElementById("aforisma").innerHTML = par;
  } else {
    // console.log("uguali");
    var par = aforismi[Math.floor(Math.random()*aforismi.length)];
    return document.getElementById("aforisma").innerHTML = par;
  }
}





var colors = {
  primaryColor: "black",
  secondaryColor: "#08d816"
};

// chart js
var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "horizontalBar",

  // The data for our dataset
  data: {
    labels: [
      "HTML",
      "CSS",
      "Javascript",
      "JQuery",
      "MySQL",
      "Php",
      "Laravel",
      "VueJs"
    ],
    datasets: [
      {
        label: "Conoscenza",
        backgroundColor: colors.secondaryColor,
        borderColor: "green",
        borderWidth: 1,
        data: [91, 88, 85, 76, 72, 85, 71, 84]
      }
    ]
  },

  // Configuration options go here
  options: {
    legend: {
      display: false,
      labels: {
        // This more specific font property overrides the global property

        fontColor: "white"
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            // beginAtZero: true,
            fontColor: "white"
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "white"
          }
        }
      ]
    }
  }
});
