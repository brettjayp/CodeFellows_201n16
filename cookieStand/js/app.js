'use strict';

// function and elements to alert user that a page is not finished when clicking a link
document.getElementById('cutter').addEventListener('click', clickNoLink);
document.getElementById('fish').addEventListener('click', clickNoLink);
document.getElementById('shirt').addEventListener('click', clickNoLink);
document.getElementById('frosted').addEventListener('click', clickNoLink);
function clickNoLink(){
    alert('Sorry, that page is still under construction.');
}

// end of line, do not proceed
