import java.util.*;

class RnaTranscription {

    String transcribe(String dnaStrand) {
        String result = "";
        char[] processArr = dnaStrand.toCharArray();
        Map<Character, Character> dict = new HashMap<Character, Character>();
        dict.put('G', 'C');
        dict.put('C', 'G');
        dict.put('T', 'A');
        dict.put('A', 'U');

        for(char dnaChar : processArr) {
            result += dict.get(dnaChar);
        }

        return result;
    }

}
