let currentPin = "";
const correctPin = "2042";

function addPin(num) {
    // Reset status button if user starts typing again
    if (currentPin.length === 4) {
        currentPin = "";
        hideStatusBtn();
    }

    if (currentPin.length < 4) {
        currentPin += num;
        updateDots();
    }

    if (currentPin.length === 4) {
        validatePin();
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.className = i < currentPin.length ? 'dot filled' : 'dot';
    });
}

function validatePin() {
    const btn = document.getElementById('status-btn');
    btn.classList.remove('hidden');

    if (currentPin === correctPin) {
        btn.innerText = "NEXT";
        btn.className = "status-btn next";
    } else {
        btn.innerText = "INVALID PIN";
        btn.className = "status-btn invalid";
        // Clear pin after a short delay so they can try again
        setTimeout(() => {
            currentPin = "";
            updateDots();
            hideStatusBtn();
        }, 1500);
    }
}

function hideStatusBtn() {
    const btn = document.getElementById('status-btn');
    btn.classList.add('hidden');
}

function handleStatusClick() {
    const btn = document.getElementById('status-btn');
    // Only allow clicking if the button says "NEXT"
    if (btn.innerText === "NEXT") {
        nextStep(2);
    }
}

function nextStep(stepNumber) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${stepNumber}`).classList.add('active');
}

// Logic for the rest of the pages (Cake, etc.)
function blowCake() {
    const cake = document.getElementById('cake-img');
    const wishText = document.getElementById('wish-text');
    const blowBtn = document.getElementById('blow-btn');

    // Change GIF as requested
    cake.src = "cake-lit-blown.gif";

    // Hide the blow button to clean up the screen
    if (blowBtn) {
        blowBtn.style.display = 'none';
    }

    // Update the text and apply animated class
    if (wishText) {
        wishText.innerHTML = "<span class='type-line1'>Happy Birthday<br>my love</span>";
        wishText.className = "animated-bday-text multiline-typewriter";
        
        // --- FESTIVE MODE ACTIVATION ---
        document.body.classList.add('festive-mode'); // Turns on glowing gradient background
        
        // Trigger the magical party burst using Canvas Confetti!
        // We use requestAnimationFrame to pump out confetti from both corners continuously!
        if (typeof confetti === 'function') {
            const duration = 4000; // 4 seconds of party bursts
            const end = Date.now() + duration;
            
            (function frame() {
                // Launch from left edge
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#ffeb3b', '#ff9ff3', '#48dbfb', '#ffffff'],
                    zIndex: 100
                });
                // Launch from right edge
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#ffeb3b', '#ff9ff3', '#48dbfb', '#ffffff'],
                    zIndex: 100
                });
                
                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }
    }

    // Freeze the GIF from looping after 1 blow iteration
    // We wait approx 800ms for the animated GIF to visually blow out the flame,
    // and then we instantly swap the source to a permanent static image!
    setTimeout(() => {
        cake.src = "cake-blown-static.gif";
    }, 800);
}

function openGift(element) {
    // Add the vibrating animation class to the clicked gift
    element.classList.add('vibrating');

    // Wait for 800ms to let the user see the vibration before turning the page
    setTimeout(() => {
        // Remove it in case they come back to this page
        element.classList.remove('vibrating');
        nextStep(6);
    }, 800);
}