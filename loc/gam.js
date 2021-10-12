function redraw() {
    var cc = c.getContext("2d");
    c.width = c.clientWidth;
    c.height = c.clientHeight;
    cc.scale(c.width, c.height);

    // Draw a circle filling the canvas.
    cc.beginPath();
    cc.arc(0.5, 0.5, .5, 0, 2*Math.PI);
    cc.fill();
}

// update on any window size change.
window.addEventListener("resize", redraw);

// first draw
redraw();
