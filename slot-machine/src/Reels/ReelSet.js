import { ReelSetView } from "./ReelSetView";

/** ReelSets contains the symbols in reels. IT can spin them and provide symbol IDs in a 2d array format.  */
export class ReelSet 
{
    symbols;

    #bands;
    #cols;
    #rows;
    #view;

    /**
     * 
     * @param {PIXI.Application} app 
     * @param {Array<Band>} bands 
     * @param {number} rows 
     */
    constructor(app, bands = [], rows = 3) 
    {        
        this.#bands = bands;
        this.#cols = bands.length;
        this.#rows = rows;

        this.#view = new ReelSetView(app, this.#cols, this.#rows);

        this.symbols = [];
        for(let x = 0; x < this.#cols; x++)
        {
            this.symbols.push([]);
        }

        this.#updateSymbols();
        this.#view.update(this.symbols);
    }

    /** Spin all bands.  */
    spin() 
    {
        for(let i = 0; i < this.#cols; i++)
        {
            this.#bands[i].spin();
        }
        
        this.#updateSymbols();
        this.#view.update(this.symbols);
    }

    /**
     * ResizeView is called every-time the screen sizes. 
     * @param {*} screenRatio is the dedicated screen-height ratio for this view.
     */
    resizeView()
    {
        this.#view.resize();    
    }

    /** Re turns the SymbolID at index-relative-to-position. 0 returns symbolIDs[position].  */
    #updateSymbols()
    {
        for(let x = 0; x < this.#cols; x++)
        {
            for(let y = 0; y < this.#rows; y++)
            {
                this.symbols[x][y] = this.#bands[x].getValue(y);
            }
        }
    }
}