/*  FILE INFORMATION
    ---------------------
    Author: America Murray
    Date created: 12/21/2021
    Name: scripts.js

    Description: Javascript scripts.

*/

// CONSTANTS
const newWindowLinks = document.querySelectorAll("a[target='_blank']");  // Gets all links that open in new windows
const newWinIcon = 
    '<svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" viewBox="0 0 24 20" fill="currentColor" aria-hidden="true">' +
    '<path d="M0 0h24v24H0z" fill="none"/>' +
    '<path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />' +
    '</svg>'


// FUNCTIONS
function appendIcon(element, icon = newWinIcon) {
    element.innerHTML += icon;
}

// EXECUTION
[].forEach.call(newWindowLinks, function(link) { appendIcon(link, newWinIcon) });


// TESTING
// console.log(newWindowLinks);
// console.log(newWinIcon);