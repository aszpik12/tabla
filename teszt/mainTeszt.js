QUnit.module("tábla kiírása tesztelése", function () {
  QUnit.test("tábla kiírása feltöltéssel", function (assert) {
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
    assert.equal(
      tabla(list),
      "<table><tr><td> nev </td><td> tul1 </td><td> tul2 </td></tr><tr><td> Wifi </td><td> nőstény </td><td> kevert </td></tr><tr><td> melák </td><td> hím </td><td> kevert </td></tr></table>"
    );
  });
  QUnit.test("A tabla függvény létezik-e?", function (assert) {
    assert.ok(tabla, "létezik a tabla függvény!");
  });
  QUnit.test("sorok száma megegyezik a hárommal?", function (assert) {
    assert.equal(
          document.querySelectorAll("body,td").length, list.length
      );
  });
  });