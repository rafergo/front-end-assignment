/** ReelSets contains the symbols in reels. IT can spin them and provide symbol IDs in a 2d array format.  */
export class ReelSet 
{
    symbols;

    #bands;
    #length;
    #height;

    constructor(bands = [], height = 3) 
    {
        this.#bands = bands;
        this.#length = bands.length;
        this.#height = height;

        this.symbols = [];
        for(let x = 0; x < this.#length; x++)
        {
            this.symbols.push([]);
        }

        this.#updateSymbols();
    }

    /** Spin all bands.  */
    spin() 
    {
        for(let i = 0; i < this.#length; i++)
        {
            this.#bands[i].spin();
        }
        this.#updateSymbols();
    }

    /** Returns the SymbolID at index-relative-to-position. 0 returns symbolIDs[position].  */
    #updateSymbols()
    {
        for(let x = 0; x < this.#length; x++)
        {
            for(let y = 0; y < this.#height; y++)
            {
                symbols[x][y] = this.#bands[x].getValue(y);
            }
        }
    }
}