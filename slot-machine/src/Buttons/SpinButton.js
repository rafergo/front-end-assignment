import { Sprite, Assets } from 'pixi.js';

export class SpinButton 
{
    #sprite;
    #app;
    #onClick;

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

    enable() 
    {
        this.#sprite.eventMode = 'static';
        this.#sprite.alpha = 1;
    }

    disable() 
    {
        this.#sprite.eventMode = 'none';
        this.#sprite.alpha = 0.5;
    }

    resizeView(modifier = 0.15)
    {
        const { width, height } = this.#app.renderer.screen;
        const size = Math.min(width, height) * modifier;
        this.#setSize(size);
        //positioned bototm-left.        
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
