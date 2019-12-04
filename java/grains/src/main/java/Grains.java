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
        // 18446744073709551615
        BigInteger boardGrains =  grainsOnSquare(64);
        System.out.println("boardGrains: " + boardGrains);
        System.out.println("expected: 18446744073709551615");
        BigInteger boardGrainsDoubled = boardGrains.multiply(BigInteger.valueOf(2));
        System.out.println("doubled: " + boardGrainsDoubled);
        return boardGrainsDoubled;
    }

}
