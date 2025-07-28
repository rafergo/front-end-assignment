import { SpinButton } from "./SpinButton";
import { ReelSet } from "./ReelSet";
import { Band } from "./Band";

export class SlotMachine 
{
    #reelSet;
    #onResize;
    #app;
    #spinButton;
    #onSpin;

    constructor(app) 
    {
        this.#app = app;
        this.#initReelSet();
        this.#initSpinButton();

        this.#onResize = () => this.#resizeViews(); 
        this.#resizeViews();
        window.addEventListener('resize', this.#onResize);
    }

    spin() 
    {
        this.#reelSet.spin();
    }

    #initReelSet()
    {
        const bands = 
        [
            new Band(["hv2", "lv3", "lv3", "hv1", "hv1", "lv1", "hv1", "hv4", "lv1", "hv3", "hv2", "hv3", "lv4", "hv4", "lv1", "hv2", "lv4", "lv1", "lv3", "hv2"]),
            new Band(["hv1", "lv2", "lv3", "lv2", "lv1", "lv1", "lv4", "lv1", "lv1", "hv4", "lv3", "hv2", "lv1", "lv3", "hv1", "lv1", "lv2", "lv4", "lv3", "lv2"]),
            new Band(["lv1", "hv2", "lv3", "lv4", "hv3", "hv2", "lv2", "hv2", "hv2", "lv1", "hv3", "lv1", "hv1", "lv2", "hv3", "hv2", "hv4", "hv1", "lv2", "lv4"]),
            new Band(["hv2", "lv2", "hv3", "lv2", "lv4", "lv4", "hv3", "lv2", "lv4", "hv1", "lv1", "hv1", "lv2", "hv3", "lv2", "lv3", "hv2", "lv1", "hv3", "lv2"]),
            new Band(["lv3", "lv4", "hv2", "hv3", "hv4", "hv1", "hv3", "hv2", "hv2", "hv4", "hv4", "hv2", "lv2", "hv4", "hv1", "lv2", "hv1", "lv2", "hv4", "lv4"])
        ];
        
        this.#reelSet = new ReelSet(this.#app, bands);
    }

    #initSpinButton()
    {
        this.#onSpin = () => this.spin();
        this.#spinButton = new SpinButton(this.#onSpin, this.#app);
    }


    #resizeViews()
    {
        this.#reelSet.resizeView();
        this.#spinButton.resizeView();
    }
}
