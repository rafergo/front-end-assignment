# Slot Machine Game – Pixi.js
This project is a simple 5x3 slot machine simulation built using :
- **JavaScript (ES6)**, 
- **Vite**,
- **Pixi.js**. 

## Setup
- 1. **Install**  
    Node.js must be installed.  
    in "slot-machine" folder, run the bash command: npm install
- 2. **Start the dev server**
    in "slot-machine" folder, run the bash command: npm run dev
- 3. **Open in your browser**
    Visit: http://localhost:5173/

## Compatibilities
Tested and works on the following browsers:
- Google Chrome, 
- Opera,
- Microsoft Edge,
- Firefox. 

## Limitations
While the project was built with scalability in mind,
it assumes the followings:
- The assset sprites must be in public/asssets
- The assets exists with the right name as is.
- The reels follows these rules :
    There are 5 reels, 
    Reels have 3 symbols,
    Bands have 3+ symbols.

## Features
-  Preloader screen with percentage loading text
-  5x3 reel grid using `PIXI.Sprite`
-  Spin button using 'spin_button.png'
-  Payline detection and payout calculation
-  Responsive layout: content resizes dynamically with the window
-  Dynamic win text display, formatted and scaled below the reels

## Game Loop
1. Click the **spin button**.
2. Random positions are generated for the reels. 
3. The game displays the resulting symbols. 
4. Then evaluates payouts using a paytable and paylines.

## Project Structure
    ├── Buttons/
    │ └── SpinButton.js 
    ├── Reels/
    │ ├── Band.js 
    │ ├── ReelSet.js 
    │ └── ReelSetView.js 
    ├── Win/
    │ ├── Payline.js 
    │ ├── PayTable.js 
    │ ├── WinCalculator.js 
    │ └── WinView.js 
    ├── SlotMachine.js 
    └── main.js 
