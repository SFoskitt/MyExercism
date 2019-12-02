import java.util.Arrays;

class ResistorColorDuo {
    int value(String[] colors) {
        System.out.println("Hello world!");
        String num = "";
    
        for (int i = 0; i < 2; i++) {
            num += Integer.toString(ResistorColor.colorCode(colors[i]));
        }
        return Integer.parseInt(num);
    }
}

class ResistorColor {
    static int colorCode(String color) {
        return Arrays.asList(colors()).indexOf(color);
    }

    static String[] colors() {
        return new String[] {"black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"};
    }
}