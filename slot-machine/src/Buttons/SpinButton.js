import { Sprite, Assets } from 'pixi.js';

/**
 * The SpinButton is a button whith a onclick callback to SlotMachine.Spin()
 */
export class SpinButton 
{
    #sprite;
    #app;
    #onClick;

    /**
     * 
     * @param {callback} onClick 
     * @param {PIXI.Application} app 
     */
    constructor(onClick, app) 
    {
        this.#app = app;
        
        const textureKey = 'spin';
        this.#sprite = new Sprite(Assets.get(textureKey));
        this.#sprite.anchor.set(0.5, 1);
        this.#sprite.eventMode = 'static';
        this.#sprite.cursor = 'pointer';
        this.#onClick = onClick;
        this.#sprite.on('pointerdown', this.#onClick);
        this.#app.stage.addChild(this.#sprite);
    }

    /**
     * ResizeView is called every-time the screen sizes. 
     * @param {*} screenRatio is the dedicated screen-height ratio for this view.
     */
    resizeView(screenRatio = 0.15)
    {
        const { width, height } = this.#app.renderer.screen;
        const size = Math.min(width, height) * screenRatio;
        this.#setSize(size);
        //positioned bototm-center.        
        const position = {x: width/2, y: height-size};
        this.#setPosition(position.x, position.y);
    }

    #setPosition(x, y) 
    {
        this.#sprite.position.set(x, y);
    }

    #setSize(size) 
    {
        this.#sprite.width = size;
        this.#sprite.height = size;
    }
}
