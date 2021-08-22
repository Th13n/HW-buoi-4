let a = c = Number(prompt("Hãy nhập a"));
let b = d = Number(prompt("Hãy nhập b"));

while (c !== d) {
  if (c > d) {
    c -= d;
  } else {
    d -= c;
  }
}
d = (a * b) / c;
alert(
  "Ước chung lớn nhất của " +
    String(a) +
    " và " +
    String(b) +
    " là " +
    String(c)
);
alert('Còn bội chung nhỏ nhất là '+String(d))