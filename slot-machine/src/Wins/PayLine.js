/**
 * Payline line is read from left to right, one position per reel. Such as [rowIndex per column].
*/   
export class Payline 
{
    #pattern;

    constructor(pattern) 
    {
        this.#pattern = pattern;
    }

    /**
     * @param {string[][]} symbolMatrix - 2D array [col][row]
     * Evaluate payline pattern within symbolMatrix. 
     * @returns {{ count: number, symbolID: string }}
     */
    evaluate(symbolMatrix) 
    {
        const pattern = this.#pattern;
        const symbol = symbolMatrix[0][pattern[0]];
        const cols = symbolMatrix.length;
        let count = 1;

        for (let col = 1; col < cols; col++) 
        {
            if (symbolMatrix[col][pattern[col]] === symbol) 
            {
                count++;
            } 
            else 
            {
                break;
            }
        }

        return { count, firstSymbol: symbol };
    }
}