var intervalID = window.setInterval(updateScreen, 200);
var c = document.getElementById("console");

var txt = [
  "HIII LOVEEE: XX0022. bobi://000.222.2345",
  "HAPPY ANNIVERSARY: X ___ UR DA BEST",
  "RETRY: I MISS YOUUUU",
  ":> /VALORANT/TA/UNYA/",
  "================================================",
  "/ another year for us / scanning...",
  "11.30.22.XX",
  "11.30.23.XX",
  "11.30.24.XX",
  "...",
  "...",
  "MOZ + YUSH",
  "...all our memories.... found...",
  "I LOVEEEE YOUUUUU BOBI",
  "SCAN: __ 11.30.2022",
  "SCAN: __ 11.30.2023",
  "SCAN: __ 11.30.2024"
]

var docfrag = document.createDocumentFragment();

function updateScreen() {
  //Shuffle the "txt" array
  txt.push(txt.shift());
  //Rebuild document fragment
  txt.forEach(function(e) {
    var p = document.createElement("p");
    p.textContent = e;
    docfrag.appendChild(p);
  });
  //Clear DOM body
  while (c.firstChild) {
    c.removeChild(c.firstChild);
  }
  c.appendChild(docfrag);
}