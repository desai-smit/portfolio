$(document).on('click' , 'ul li', function(){
  $(this).addClass("active").siblings().removeClass("active")
})

function openMenu(){
  document.getElementById('navigation').style.left = "0%";
}

function closeMenu(){
  document.getElementById('navigation').style.left = "-80%";
}

var a = document.getElementById('photo1');
var b = document.getElementById('photo2');
var c = document.getElementById('photo3');
var d = document.getElementById('photo4');
var e = document.getElementById('photo5');
var f = document.getElementById('photo6');
var g = document.getElementById('photo7');
var h = document.getElementById('photo8');
var i = document.getElementById('photo9');

function ALL(){
  a.style.display = 'block';
  b.style.display = 'block';
  c.style.display = 'block';
  d.style.display = 'block';
  e.style.display = 'block';
  f.style.display = 'block';
  g.style.display = 'block';
  h.style.display = 'block';
  i.style.display = 'block';
}

function APP(){
  a.style.display = 'block';
  b.style.display = 'block';
  c.style.display = 'block';
  d.style.display = 'none';
  e.style.display = 'none';
  f.style.display = 'none';
  g.style.display = 'none';
  h.style.display = 'none';
  i.style.display = 'none';
}

function cARd(){
  a.style.display = 'none';
  b.style.display = 'none';
  c.style.display = 'none';
  d.style.display = 'block';
  e.style.display = 'block';
  f.style.display = 'block';
  g.style.display = 'none';
  h.style.display = 'none';
  i.style.display = 'none';
}

function WEBBB(){
  a.style.display = 'none';
  b.style.display = 'none';
  c.style.display = 'none';
  d.style.display = 'none';
  e.style.display = 'none';
  f.style.display = 'none';
  g.style.display = 'block';
  h.style.display = 'block';
  i.style.display = 'block';
}