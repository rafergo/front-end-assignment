import { Assets, Text } from 'pixi.js';

export class PreloaderScreen 
{
    #app;
    #loadingText;
    #onResize;

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
