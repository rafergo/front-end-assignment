import { Text, TextStyle, Container } from 'pixi.js';

export class WinView 
{
    #app;
    #container;
    #text;
    #style;

    constructor(app) 
    {
        this.#app = app;
        this.#container = new Container();
        this.#app.stage.addChild(this.#container);

        this.#style = new TextStyle({
            fontFamily: 'Arial',
            fontSize: 32,
            fill: '#000000',
            align: 'left',
            wordWrap: true,
            wordWrapWidth: this.#app.screen.width * 0.9,
        });

        this.#text = new Text({ text: '', style: this.#style });
        this.#text.anchor.set(0.5, 1); 
        this.#container.addChild(this.#text);

        this.resize();
    }

    show(winData) 
    {
        let output = `Total wins: ${winData.total}\n`;
        for (const line of winData.lines) 
        {
            output += `- payline ${line.lineId}, ${line.symbol} x${line.count}, ${line.payout}\n`;
        }

        this.#text.text = output.trim();
        this.resize();
    }

    resize(modifier = 0.15) 
    {
        const { width, height } = this.#app.renderer.screen;
        const textHeight = height * modifier;

        // Correct positioning
        this.#text.x = width / 2;
        this.#text.y = height;

        // Update wrap width correctly
        this.#text.style.wordWrapWidth = width * 0.9;

        // Scale to fit height
        const scaleFactor = Math.min(1, textHeight / this.#text.height);
        this.#text.scale.set(scaleFactor);
    }

    clear() 
    {
        this.#text.text = '';
    }
}