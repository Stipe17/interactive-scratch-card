const canvas = document.getElementById('scratch-canvas');
const ctx = canvas.getContext('2d');

const image = new Image();
image.src = 'slika2.jpg';

image.onload = function() {
    // Postavljamo veličinu platna da se podudara sa veličinom slike
    canvas.width = image.width;
    canvas.height = image.height;

    // Crtamo sliku na celo platno
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};

canvas.addEventListener('mousedown', startScratching);
canvas.addEventListener('mousemove', scratch);
canvas.addEventListener('mouseup', stopScratching);
canvas.addEventListener('mouseleave', stopScratching);

let scratching = false;

function startScratching(e) {
    scratching = true;
    scratch(e);
}

function stopScratching() {
    scratching = false;
}

function scratch(e) {
    if (!scratching) return;

    // Precizne koordinate miša u odnosu na platno
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, true);
    ctx.fill();
}
