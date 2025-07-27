import { PreloaderScreen as PreloaderScreen } from './PreloaderScreen.js';
import { SlotMachine as SlotMachine } from './SlotMachine.js';

export class GameController 
{
    #app;
    #slotMachine;
    #preloader;

    constructor(app) 
    {
        this.#app = app;
        this.#slotMachine = null;
        this.#preloader = new PreloaderScreen(app);
    }

    async start() 
    {        
        const assets = 
        [
            { name: 'spin', url: 'assets/spin_button.png' },
            { name: 'hv1',  url: 'assets/hv1_symbol.png' },
            { name: 'hv2',  url: 'assets/hv2_symbol.png' },
            { name: 'hv3',  url: 'assets/hv3_symbol.png' },
            { name: 'hv4',  url: 'assets/hv4_symbol.png' },
            { name: 'lv1',  url: 'assets/lv1_symbol.png' },
            { name: 'lv2',  url: 'assets/lv2_symbol.png' },
            { name: 'lv3',  url: 'assets/lv3_symbol.png' },
            { name: 'lv4',  url: 'assets/lv4_symbol.png' }
        ];

        await this.#preloader.load(assets);
        this.#slotMachine = new SlotMachine(this.#app);
        console.log('[INFO] Assets loaded.');
    }
}
