//class

let int = 1000;
class Button {
    constructor() {
        //elements
        this.avgelm = null;
        this.histelm = null;
        this.curelm = null;
        this.highelm = null;
        this.elm = null;
        //vars
        this.highest = 0;
        this.avg = 0;
        this.atint = 0;
        this.cur = 0;
        this.history = [];
        this.getAvg = function () {
            let total = 0;
            this.history.forEach((elm) => {
                total += elm;
            });
            this.avg = total / this.history.length;
            this.avg = Math.floor(this.avg*1000) / 1000;
        };
        this.getHighest = function () {
            let high = 0;
            this.history.forEach((elm) => {
                if (elm > high)
                    high = elm;
            });
            this.highest = high;
        };
        this.click = function () {
            if (this.atint == 0) {
                setTimeout(() => {
                    this.history.push(this.atint);
                    this.atint = 0;
                    this.getHighest();
                    if (this.highelm != null)
                        this.highelm.innerHTML = this.highest;
                    this.getAvg();
                    if (this.avgelm != null)
                        this.avgelm.innerHTML = this.avg;
                }, int);
            }
            this.cur++;
            if (this.curelm != null)
                this.curelm.innerHTML = this.cur;
            this.atint++;
        };
    }
}