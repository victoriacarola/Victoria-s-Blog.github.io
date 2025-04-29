document.addEventListener('DOMContentLoaded', () => {
    const plantSelect = document.getElementById('plantSelect');
    const settingsBtn = document.getElementById('settingsBtn');
    const menuBtn = document.getElementById('menuBtn');
    const cameraBtn = document.getElementById('cameraBtn');
    const wateringBtn = document.getElementById('wateringBtn');
    const plantImage = document.getElementById('plantImage');

    // Object to map plant selection values to image file names
    const plantImages = {
        default: 'plant_default.png', // You'll need a default plant image
        monstera: 'monstera.png',     // Replace with your Monstera image
        snakeplant: 'snakeplant.png', // Replace with your Snake Plant image
        peace_lily: 'peace_lily.png'  // Replace with your Peace Lily image
    };

    plantSelect.addEventListener('change', (event) => {
        const selectedPlant = event.target.value;
        plantImage.src = plantImages[selectedPlant] || plantImages['default'];
        // Here, you would also likely store the selected plant type
        console.log(`Selected plant: ${selectedPlant}`);
    });

    settingsBtn.addEventListener('click', () => {
        alert('Settings will open here.');
    });

    menuBtn.addEventListener('click', () => {
        alert('Menu will open here.');
    });

    cameraBtn.addEventListener('click', () => {
        alert('Camera functionality will be implemented here.');
    });

    wateringBtn.addEventListener('click', () => {
        // Trigger watering animation and update plant mood
        waterPlantAnimation();
        updatePlantMood('happy');
        // Log watering action (you'll need to implement this)
        console.log('Plant watered!');
    });

    // Initial plant setup (set to default on load)
    plantImage.src = plantImages['default'];
});

// Function to trigger watering animation (basic example using CSS class)
function waterPlantAnimation() {
    const plantView = document.getElementById('plantView');
    plantView.classList.add('watering-animation');
    setTimeout(() => {
        plantView.classList.remove('watering-animation');
    }, 1000); // Remove the class after 1 second
}

// Function to update plant mood (basic example by changing image source)
function updatePlantMood(mood) {
    const plantImage = document.getElementById('plantImage');
    const currentPlant = document.getElementById('plantSelect').value;
    if (currentPlant !== 'default') {
        plantImage.src = `${currentPlant}_${mood}.png`; // e.g., monstera_happy.png
        // You'll need to have images for different moods
    } else {
        alert('Please select a plant first.');
    }
}