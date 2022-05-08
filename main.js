var canvas = document.getElementById("myCanvas") ;
var last_position_of_x;
var last_position_of_y;
var ctx = canvas.getContext("2d");

var mouseEvent = "empty";

canvas.addEventListener("mouseDown",My_mouse_down);

function My_mouse_down(e) {
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove",mouse_move);
function mouse_move(e) {
    mouseEvent = "mousemove";
    var current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY-canvas.offsetTop;


    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = "Red" ;
        ctx.lineWidth= 3 ;
    
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke()   }
    

    last_position_of_x = current_position_of_mouse_x ;
    last_position_of_y = current_position_of_mouse_y ;
}