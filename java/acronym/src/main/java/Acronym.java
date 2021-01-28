import java.util.regex.Matcher;
import java.util.regex.Pattern;

class Acronym {

    String inputPhrase;

    Acronym(String phrase) {
        inputPhrase = phrase;
    }

    String get() throws UnsupportedOperationException {
        boolean b = this.inputPhrase.matches("^[a-zA-Z]*$");
        System.out.println("The boolean " + b);
        // if(!this.inputPhrase.matches("^[a-zA-Z]*$")) {
        //     System.out.println("Can't catch this error");
        // } 
        
        // String[] parsed = this.inputPhrase.split(" ");
        // int len = parsed.length;
        // char[] acronym = new char[len];
        // for(int i = 0; i < len; i++) {
        //     acronym[i] = (getFirstAlphaChar(parsed[i]));
        // }

        // return new String(acronym);
        return "a";
    }

    private char getFirstAlphaChar(String word) {
        return 'a';
    }
}
