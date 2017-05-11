class SpaceAge {
    constructor (age) {
        this.seconds = age;
    }

    seconds () {
        console.log('this.seconds', this.seconds);
        this.earthYear = 31557600;
        return this.seconds;
    }

    formNum (num) {
        return parseFloat(num.toFixed(2));
    }

    onEarth () {
        // - Earth: orbital period 365.25 Earth days, or 31557600 seconds
        return this.formNum(this.seconds/31557600);
    }

    onVenus () {
        // - Venus: orbital period 0.61519726 Earth years
        return this.formNum(this.onEarth() / 0.6155);
    }

    onMercury () {
        // - Mercury: orbital period 0.2408467 Earth years
        return this.formNum(this.onEarth() / 0.2408467);
    }

    onJupiter () {
        // - Jupiter: orbital period 11.862615 Earth years
        return this.formNum(this.onEarth() / 11.862615);
    }

    onSaturn () {
        // - Saturn: orbital period 29.447498 Earth years
        return this.formNum(this.onEarth() / 29.447498);
    }

    onNeptune () {
        // - Neptune: orbital period 164.79132 Earth years
        return this.formNum(this.onEarth() / 164.79132);
    }

    onUranus () {
        // - Uranus: orbital period 84.016846 Earth years
        return this.formNum(this.onEarth() / 84.016846);
    }

    onMars () {
        // - Mars: orbital period 1.8808158 Earth years
        return this.formNum(this.onEarth() / 1.8808158);
    }
}

module.exports = SpaceAge;
