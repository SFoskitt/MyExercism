import static java.util.Map.entry;
import java.util.Map;

class Scrabble {
    private Map<String, Integer> dict;

    Scrabble(String word) {
        dict = Map.ofEntries(
            entry("a", 1),
            entry("b", 3),
            entry("c", 3),
            entry("d", 2),
            entry("e", 1),
            entry("f", 4),
            entry("g", 2), 
            entry("h", 4),
            entry("i", 1),
            entry("j", 8),
            entry("k", 5),
            entry("l", 1),
            entry("m", 3),
            entry("n", 1),
            entry("o", 1),
            entry("p", 3),
            entry("q", 10),
            entry("r", 1),
            entry("s", 1),
            entry("t", 1),
            entry("u", 1),
            entry("v", 4),
            entry("w", 4),
            entry("x", 8),
            entry("y", 4),
            entry("z", 10)                                
        );

        getScore(word);
    }

    int getScore(String word) {
        // String wordLower = word.toLowerCase();
        String[] wordSplit = word.toLowerCase().split("");
        Integer finalScore = 0;
        for(String c : wordSplit) {
            finalScore += dict.get(c);
        }
        return finalScore;
    }

}
