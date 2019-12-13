class SpaceAge {

    Double inputSeconds;
    Double earthYear = 31557600D;

    SpaceAge(double seconds) {
        inputSeconds = seconds;        
    }

    double getSeconds() {
        return inputSeconds;
    }

    double onEarth() {
        return getSeconds() / earthYear;
    }

    double onMercury() {
        return getSeconds() / earthYear / 0.2408467;
    }

    double onVenus() {
        return getSeconds() / earthYear / 0.61519726;
    }

    double onMars() {
        return getSeconds() / earthYear / 1.8808158;
    }

    double onJupiter() {
        return getSeconds() / earthYear / 11.862615;
    }

    double onSaturn() {
        return getSeconds() / earthYear / 29.447498;
    }

    double onUranus() {
        return getSeconds() / earthYear / 84.016846;
    }

    double onNeptune() {
        return getSeconds() / earthYear / 164.79132;
    }

}
