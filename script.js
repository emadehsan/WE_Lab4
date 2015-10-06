
window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

    if (key == 37) {
        alert('left');
    } else if (key == 38) {
       alert('up');
   } else if (key == 39) {
       alert('right');
   } else if (key == 40) {
       alert('down');
   }
}
