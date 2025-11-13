// Slider elements ko select karein
const redSlider = document.getElementById('red-slider');
const greenSlider = document.getElementById('green-slider');
const blueSlider = document.getElementById('blue-slider');

// Root element ko select karein (CSS variables set karne ke liye)
const root = document.documentElement;

function updateNavColor() {
    // Sliders se R, G, B values hasil karein
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    // Naya glow/icon color banayein (e.g., "rgb(0, 238, 255)")
    const newGlowColor = `rgb(${red}, ${green}, ${blue})`;

    // Naya background color banayein (glow color ka dark, tinted version)
    // Hum rang ko thora pheeka (desaturate) aur andhera (darken) kar rahe hain
    // Yeh formula (value * 0.2 + 40) ek acha dark-tinted grey banata hai
    const newBgColor = `rgb(
                ${Math.floor(red * 0.2 + 40)}, 
                ${Math.floor(green * 0.2 + 40)}, 
                ${Math.floor(blue * 0.2 + 40)}
            )`;

    // CSS variables ko update karein
    root.style.setProperty('--nav-glow', newGlowColor);
    root.style.setProperty('--icon-color', newGlowColor);
    root.style.setProperty('--nav-bg', newBgColor);
}

// Har slider par 'input' event listener add karein
// 'input' event slider move karte waqt foran fire hota hai
redSlider.addEventListener('input', updateNavColor);
greenSlider.addEventListener('input', updateNavColor);
blueSlider.addEventListener('input', updateNavColor);

// Page load par default colors set karein (initial values ke hisab se)
// Takay page load hote hi sliders aur nav menu match karein
updateNavColor();