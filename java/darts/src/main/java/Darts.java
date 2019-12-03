class Darts {
    private double calcX;
    private double calcY;

    Darts(double x, double y) {
        calcX = x;
        calcY = y;
    }

    int score() {
        double rad = Math.sqrt((calcX * calcX) + (calcY * calcY));
        if (rad <= 10 && rad > 5) { return 1; }
        if (rad <= 5 && rad > 1) { return 5; }
        if (rad <= 1) { return 10; }
        return 0;
    }

}
