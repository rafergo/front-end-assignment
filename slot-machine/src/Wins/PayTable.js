/**
 * The PayTable contains a list of Payouts per Symbol counts following a PayLine. 
 */
export class PayTable 
{
    #data;

    /**
     * 
     * @param {Array<{string:symbolID ,Array<number>: payouts}>} data 
     */
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
