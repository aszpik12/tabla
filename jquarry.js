const list = [
  {
    nev: "nev",
    tul1: "tul1",
    tul2: "tul2",
  },
  {
    nev: "Wifi",
    tul1: "nőstény",
    tul2: "kevert",
  },
  {
    nev: "melák",
    tul1: "hím",
    tul2: "kevert",
  },
];

$(function () {
  const BODY = $("body");
  BODY.html(tabla());
});

function tabla() {
  let txt = "<table>";
  for (let i = 0; i < list.length; i++) {
    txt += "<tr>";
    for (const j in list[i]) {
      txt += `<td> ${list[i][j]} </td>`;
    }
    txt += "</tr>";
  }
  txt += "</table>";
console.log(txt)
  return txt
}
