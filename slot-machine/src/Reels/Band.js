/** Bands contains symbol IDs. It can spin current position and provide an ID relative to its position.  */
export class Band 
{
    #symbolIDs;
    #position;
    #size;

    /**
     * 
     * @param {Array<string>} symbolIDs 
     */
    constructor(symbolIDs = []) 
    {
        this.#symbolIDs = symbolIDs;
        this.#size = this.#symbolIDs.length;
        this.#position = 0;
    }

    /** Set position to a new random value within band.length.  */
    spin() 
    {
        this.#position = Math.floor(Math.random() * this.#symbolIDs.length);
    }

    /**
    * Returns the SymbolID at index-relative-to-position. 0 returns symbolIDs[position].
     * @param {number} index 
     * @returns {string} symbolID
     */
    getValue(index)
    {
        const relativeIndex = (this.#position + index) % this.#size;
        return this.#symbolIDs[relativeIndex];
    }
}