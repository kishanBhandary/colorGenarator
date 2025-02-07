function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

function resetGradient() {
    document.body.style.background = '';
}
function rgbCode() {
    const gradient = window.getComputedStyle(document.body).backgroundImage;
    const colors = gradient.match(/rgb\(\d+, \d+, \d+\)/g);
    if (colors) {
        const output = document.createElement('p');
        if (!document.querySelector('p')) {
            output.textContent = `Gradient colors are: ${colors.join(' and ')}`;
            document.body.appendChild(output);
        } else {
            document.querySelector('p').textContent = `Gradient colors are: ${colors.join(' and ')}`;
        }
    } else {
        alert('No gradient set.');
    }
    
}
