import { Assets, Text } from 'pixi.js';

/**
 * PreloaderScreen loads assets in memory. While loading, 
 * While loading, the screen displays the load progressiong.
 */
export class PreloaderScreen 
{
    #app;
    #loadingText;
    #onResize;

    /**
     * 
     * @param {PIXI.Application} app 
     */
    constructor(app) 
    {
        this.#app = app;

        this.#loadingText = new Text(
        {
            text: 'Loading: 0%',
            style: 
            {
                fontFamily: 'Arial',
                fontSize: 32,
                fill: 0xffffff,
                align: 'center'
            }
        });

        this.#loadingText.anchor.set(0.5);
        this.#app.stage.addChild(this.#loadingText);
        this.#resizeText();
        this.#onResize = () => this.#resizeText(); 
        window.addEventListener('resize', this.#onResize);
    }

    /**
     * Loads assets in memory async.
     * @param {Array<{key:string,url:string}>} assets 
     */
    async load(assets) 
    {
        const total = assets.length;
        let loaded = 0;

        for (let i = 0; i < total; i++) 
        {
            const asset = assets[i];
            Assets.add({ alias: asset.name, src: asset.url });
            await Assets.load(asset.name);
            loaded++;

            const percent = Math.floor((loaded / total) * 100);
            this.#updateProgress(percent);
          }

        this.#updateProgress(100);
        this.#app.stage.removeChild(this.#loadingText);
        window.removeEventListener('resize', this.#onResize);
    }

    #resizeText() 
    {
        const { width, height } = this.#app.renderer;
        this.#loadingText.position.set(width / 2, height / 2);
    }

    #updateProgress(percent)
    {
        this.#loadingText.text = `Loading: ${percent}%`;
    }
}
