function main() {
  function header() {
    let header = (document.getElementById("header").innerHTML = `<header
    style="background-color: grey; height: 60px; margin-bottom: 10px"
    ><h2 style="color: white; padding: 12px; text-align: center" >HEADER</h2></header>`);
    console.log(header);
  }

  function left() {
    let left = (document.getElementById("left").innerHTML = `<div
    style="
    background-color: grey;
    height: 550px;
    width: 200px;
    margin-right: 5px;
    float: left;
    margin-bottom: 10px;
    "
    ><p style="color: white; padding: 12px; text-align: center">LEFT BAR</p></div>`);
    console.log(left);
  }

  function middle() {
    let middle = (document.getElementById("middle").innerHTML = `<div
    style="
    background-color: rgb(201, 187, 187);
    margin: 0px 10px;
    width: 920px;
    height: 550px;
    "></div>`);
    console.log(middle);
  }

  function right() {
    let right = (document.getElementById("right").innerHTML = `<div
    style="
    background-color: grey;
    height: 550px;
    width: 200px;
    margin-left: 5px;
    float: right;
    margin-bottom: 10px;
    "><p style="color: white; padding: 12px; text-align: center">RIGHT BAR</p></div>`);
    console.log(right);
  }
  header();
  left();
  middle();
  right();
}
