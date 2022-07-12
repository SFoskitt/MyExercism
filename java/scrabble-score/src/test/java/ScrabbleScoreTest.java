import org.junit.Ignore;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ScrabbleScoreTest {

    @Test
    public void testALowerCaseLetter() {
        Scrabble scrabble = new Scrabble("a");
        assertEquals(1, scrabble.getScore());
    }

    @Test
    public void testAUpperCaseLetter() {
        Scrabble scrabble = new Scrabble("A");
        assertEquals(1, scrabble.getScore());
    }

    @Test
    public void testAValuableLetter() {
        Scrabble scrabble = new Scrabble("f");
        assertEquals(4, scrabble.getScore());
    }

    @Test
    public void testAShortWord() {
        Scrabble scrabble = new Scrabble("at");
        assertEquals(2, scrabble.getScore());
    }

    @Test
    public void testAShortValuableWord() {
        Scrabble scrabble = new Scrabble("zoo");
        assertEquals(12, scrabble.getScore());
    }

    @Test
    public void testAMediumWord() {
        Scrabble scrabble = new Scrabble("street");
        assertEquals(6, scrabble.getScore());
    }

    @Test
    public void testAMediumValuableWord() {
        Scrabble scrabble = new Scrabble("quirky");
        Integer score = scrabble.getScore();
        System.out.println("SCORE here: " + score);
        assertEquals(22, score);
    }

    @Test
    public void testALongMixCaseWord() {
        Scrabble scrabble = new Scrabble("OxyphenButazone");
        Integer score = scrabble.getScore();
        System.out.println("SCORE here: " + score);
        assertEquals(41, score);
    }

    @Test
    public void testAEnglishLikeWord() {
        Scrabble scrabble = new Scrabble("pinata");
        Integer score = scrabble.getScore();
        System.out.println("SCORE here: " + score);
        assertEquals(8, score);
    }

    @Test
    public void testAnEmptyInput() {
        Scrabble scrabble = new Scrabble("");
        Integer score = scrabble.getScore();
        System.out.println("SCORE here: " + score);
        assertEquals(0, score);
    }

    @Test
    public void testEntireAlphabetAvailable() {
        Scrabble scrabble = new Scrabble("abcdefghijklmnopqrstuvwxyz");
        assertEquals(87, scrabble.getScore());
    }

}
