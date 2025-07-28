export class PayTable 
{
    #data;

    constructor(data) 
    {
        this.#data = data;
    }

    /**
     * @param {string} symbol 
     * @param {number} count - min = 3, max = reelsCount.
     * @returns {number} payout
     */
    getPayout(symbol, count) 
    {
        const line = this.#data[symbol];
        return line?.[count] || 0;
    }
}
