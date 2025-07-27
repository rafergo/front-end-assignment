import * as PIXI from 'pixi.js';
import { GameController } from './GameController.js';

console.log('[INFO] PixiJS Version:', PIXI.VERSION);

(async function main() {
  try {
    const app = new PIXI.Application();
    await app.init({
      resizeTo: window,
      backgroundColor: 0x787878,
      backgroundAlpha: 1
    });

    document.body.appendChild(app.canvas);

    const controller = new GameController(app);
    await controller.start();
  } 
  catch (err) 
  {
    console.error('[FATAL] Failed to initialize:', err);
  }
})();
