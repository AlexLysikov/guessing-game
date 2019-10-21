class GuessingGame {
    constructor() {
        this.segmentMin = 0;
        this.segmentMax = 0;
    }
    
    setRange(min, max) {
        this.segmentMin = min;
        this.segmentMax = max;
    }

    guess() {
        return Math.round ((this.segmentMax - this.segmentMin) / 2 + this.segmentMin);
    }

    lower() {
        this.segmentMax = this.guess();
    }

    greater() {
        this.segmentMin = this.guess();
    }
}

module.exports = GuessingGame;
