let arr = [];
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  Show() {
    return "(" + this.x + "," + this.y + ")";
  }
  Equals(p) {
    if (p.x == this.x && p.y == this.y) {
      return true;
    } else {
      return false;
    }
  }
}
function IfExists(arr, x, y) {
  for (let i in arr) {
    if (arr[i].x == x && arr[i].y == y) {
      return true;
    }
  }
  return false;
}
function PointExists(arr, point) {
  for (let i in arr) {
    if (arr[i].Equals(point)) {
      return true;
    }
  }
  return false;
}

function CalcLength(arr) {
  let len = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    len += Math.sqrt(
      Math.pow(arr[i].x - arr[i + 1].x, 2) +
        Math.pow(arr[i].y - arr[i + 1].y, 2)
    );
  }
  return len;
}

function init() {
  arr.push(new Point(1, 1));
  arr.push(new Point(2, 3));
  arr.push(new Point(4, 5));
  arr.push(new Point(6, 7));
  let p = document.createElement("p");
  for (let i in arr) {
    p.innerHTML +=
      "Point: " + (parseInt(i) + 1) + " , Location: " + arr[i].Show() + "<br>";
  }
  p.innerHTML += "Length: " + CalcLength(arr).toFixed(3);
  document.querySelector(".container").append(p);
  let pCheck = document.createElement("p");
  pCheck.innerHTML =
    "By X,Y only :<br>" +
    "(1,2) - " +
    IfExists(arr, 1, 2) +
    "<br>" +
    "(1,1) - " +
    IfExists(arr, 1, 1) +
    "<br><br>" +
    "By Point :<br>" +
    "(4,5) - " +
    PointExists(arr, new Point(4, 5)) +
    "<br>" +
    "(1,3) - " +
    PointExists(arr, new Point(1, 3));
  document.querySelector(".funcCheck").append(pCheck);
}
