const tomato = document.getElementById('draggable-tomato');
let isDragging = false;

if (tomato) {
    // Posição central inicial
    tomato.style.left = '50%';
    tomato.style.top = '50%';

    tomato.addEventListener('mousedown', () => {
        isDragging = true;
        tomato.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            tomato.style.left = e.clientX + 'px';
            tomato.style.top = e.clientY + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        tomato.style.cursor = 'grab';
    });
}