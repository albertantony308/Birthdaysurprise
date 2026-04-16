# Birthday Surprise Website 🎂

A beautifully animated, interactive web experience built to deliver a stunning digital birthday surprise! This project uses a step-by-step cinematic sequence including a lock screen, virtual gifts, typewriter texts, and engaging interactive elements (like virtually blowing out a candle).

## 🚀 Key Features

* **Interactive Pin Lock:** A modern, frosted-glass numerical keypad.
* **Cinematic Sequencing:** Multi-screen progression revealing a narrative.
* **Custom Custom Animations:** Bouncing polaroid pictures, vibrating gift boxes, and seamless UI transitions.
* **Festive Mode & Confetti:** A celebration sequence seamlessly powered by `canvas-confetti` and shifting CSS gradients.
* **Responsive Layout:** Perfectly aligned and functional entirely on mobile or desktop devices.

## 🔐 Log In / Passcode

The default pin required to unlock the birthday sequence is: **`2042`**

## 🎨 How to Personalize for Someone Else

You can easily adapt and remix this template for anyone by swapping out the assets and text.

1. **Change the Password:** 
   Open `script.js` and change the value on line 2: `const correctPin = "2042";` to your desired 4-digit code.
2. **Modify the Typewriter Text:** 
   The main "Happy Birthday" text is injected via Javascript. Open `script.js` and find the `blowCake()` function to change the text or spacing.
3. **Modify the General Text:** 
   Open `index.html` and simply edit the text sitting inside the `<p>` tags (e.g. "What's the passcode?", "How dare you?", etc.).
4. **Swap the Images & Media:**
   Replace the media files directly in your folder with your own files (ensure you keep the same filenames), or just update the `src=""` attributes located inside `index.html`:
   * `teddy.gif` - Introductory bear
   * `gift-box.gif` - Interactive gift boxes
   * `cake-lit.gif` - The interactive lit candle sequence
   * `cake-blown-static.png` (or `.gif` / `.jpg`) - The static, unlit candle frame shown after blowing it out.
   * `last-memories.jpg` - The picture featured in the final polaroid frame.

## 🛠️ Technology Stack

* **HTML5 & CSS3** (Vanilla)
* **JavaScript** (Vanilla ECMAScript)
* **canvas-confetti** (via jsDelivr CDN)

--- 
*Built automatically using HTML/CSS/JS.*
