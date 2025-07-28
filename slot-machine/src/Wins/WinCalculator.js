import { Payline } from "./PayLine.js";
import { PayTable } from "./PayTable.js";
import { WinView } from "./WinView.js";

/**
 * Calculates Wins using a PayTable and PayLines.
 */
export class WinCalculator 
{
    /**
     * The WinsCalculator supports up to 5 reels.
     */
    #maxCols = 5;
    #cols;

    #winView;

    #paytable = new PayTable({
        hv1: [0, 0, 0, 10, 20, 50],
        hv2: [0, 0, 0, 5, 10, 20],
        hv3: [0, 0, 0, 5, 10, 15],
        hv4: [0, 0, 0, 5, 10, 15],
        lv1: [0, 0, 0, 2, 5, 10],
        lv2: [0, 0, 0, 1, 2, 5],
        lv3: [0, 0, 0, 1, 2, 3],
        lv4: [0, 0, 0, 1, 2, 3]
    });

    #paylines = [
        new Payline([1, 1, 1, 1, 1]),
        new Payline([0, 0, 0, 0, 0]),
        new Payline([2, 2, 2, 2, 2]),
        new Payline([0, 0, 1, 2, 2]),
        new Payline([2, 2, 1, 0, 0]),
        new Payline([0, 1, 2, 1, 0]),
        new Payline([2, 1, 0, 1, 2])
    ];

    /**
     * 
     * @param {PIXI.Application} app 
     * @param {Number} cols = Reels Count.
     */
    constructor(app, cols = 5) 
    {
        this.#cols = cols;
        if(cols > this.#maxCols)
        {
            console.warn("[WARN] Too many reels. The paytable supports up to 5 reels.");
        }
        this.#winView = new WinView(app);
    }

    /**
     * Evaluates each PayLine and calculate wins with the PayTable.
     * @param {string[][]} symbolMatrix 
     */
    evaluate(symbolMatrix) 
    {
        const results = [];
        let total = 0;

        for (let i = 0; i < this.#paylines.length; i++) 
        {
            const { count, firstSymbol } = this.#paylines[i].evaluate(symbolMatrix);
            if (count >= 3) 
            {
                const payout = this.#paytable.getPayout(firstSymbol, count);
                if (payout > 0) 
                {
                    results.push({ lineId: i + 1, symbol: firstSymbol, count, payout });
                    total += payout;
                }
            }
        }

        const winData = {total, lines: results};
        this.#winView.show(winData);
    }

    /**
     * ResizeView is called every-time the screen sizes. 
     * @param {*} screenRatio is the dedicated screen-height ratio for this view.
     */
    resizeView()
    {
        this.#winView.resize();
    }
}
