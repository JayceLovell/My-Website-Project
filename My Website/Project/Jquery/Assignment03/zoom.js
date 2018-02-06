/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   createEventListener();
}

/* close window */
function closeWin() {
   window.close();
}

/* create event listener for close button */
function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    var FavouriteDiv = document.getElementsByTagName("h5")[0];

   if (closeWindowDiv.addEventListener) {
     closeWindowDiv.addEventListener("click", closeWin, false); 
   } else if (closeWindowDiv.attachEvent)  {
     closeWindowDiv.attachEvent("onclick", closeWin);
   }
   if (FavouriteDiv.addEventListener) {
       FavouriteDiv.addEventListener("click", favourite, false);
   } else if (FavouriteDiv.attachEvent) {
       FavouriteDiv.attachEvent("onclick", favorite);
   }
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;

function favourite() {
    var x = document.createElement("img");
    var w = window.opener.count;

    if (w == 6) {
        alert("You have reach max favorites please remove all favorites!");
    }
    else {
        x.setAttribute("src", figFilename);
    	x.setAttribute("width", "185");
        x.setAttribute("id", "img"+w);
        x.setAttribute("alt", "favortie");
        var y = window.opener.document.getElementById("fav" + w);
        y.appendChild(x);
    }
    window.close();
}