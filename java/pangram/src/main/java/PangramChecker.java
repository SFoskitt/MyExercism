public class PangramChecker {

    public boolean isPangram(String input) {
        String alpha = "abcdefghijklmnopqrstuvwxyz";
        input = input.toLowerCase();

        for (int i = 0; i < input.length(); i++) {
            String tmp = String.valueOf(input.charAt(i));
            alpha = alpha.replace(tmp, "");
        }
        return alpha.length() == 0;
    }

}
