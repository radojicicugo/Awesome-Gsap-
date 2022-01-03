const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(
 hero,
 1,
{ height: "0%" }, 
{ height: "80%", easy: Power2.easyInOut })
.from(
hero, 
1.2, 
{width: '0%'}, 
{width: "80%", easy: Power2.easyInOut })
.fromTo(
 slider,
 1.2,
 {x: '-100%'}, {x: '0%', easy: Power2.easyInOut}   
)
.fromTo(
 logo, 2, {opacity: 0, x: 30}, {opacity: 1, x:9}, "-=1.5"
)
.fromTo(
  hamburger, 2, {opacity: 0, x: 30}, {opacity: 1, x:9}, "-=1.5"
   )
 .fromTo(
  headline, 1.5, {opacity: 0, x: 80}, {opacity: 1, y: 1}, "-=1.5"
     )  