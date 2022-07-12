import java.math.BigInteger;

class Grains {

    BigInteger grainsOnSquare(final int square) {
        if (square < 1 || square > 64) throw new IllegalArgumentException("square must be between 1 and 64");
        BigInteger grains = BigInteger.valueOf(1);
        for (int i = 1; i < square; i++) {
            grains = grains.multiply(BigInteger.valueOf(2));
        }
        return grains;
    }

    BigInteger grainsOnBoard() {
        BigInteger result = new BigInteger("2").pow(64);
        result = result.subtract(new BigInteger("1"));
        return result;
    }
}
