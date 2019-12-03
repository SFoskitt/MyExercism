import java.util.Random;
import java.util.Arrays;

class DnDCharacter {

    // Initialize values
    int ability = getScore();
    int charisma = getScore();
    int constitution = getScore();
    int dexterity = getScore();
    int intelligence = getScore();
    int strength = getScore();
    int wisdom = getScore();

    int ability() {
        return this.ability;
    }

    int modifier(int input) {
        return Math.floorDiv((input - 10), 2);
    }

    int getStrength() {
        return this.strength;
    }

    int getDexterity() {
        return this.dexterity;
    }

    int getConstitution() {
        return this.constitution;
    }

    int getIntelligence() {
        return this.intelligence;
    }

    int getWisdom() {
        return this.wisdom;
    }

    int getCharisma() {
        return this.charisma;
    }

    int getHitpoints() {
        return (10 + modifier(getConstitution()));
    }

    /**
     * Modified from https://stackoverflow.com/questions/12860398/basic-random-rolling-dice-java
     */
    int[] roll4d6() {
        int rolls[] = new int[4];
        Random  r = new Random(); 
        for (int i = 0; i < 4; i++) {
            rolls[i] = r.nextInt(6) + 1;
        }
        return rolls;  
    }

    int getScore() {
        int[] nums = roll4d6();
        Arrays.sort(nums);
        int result = 0;
        for (int i = 1; i < nums.length; i++) {
            result += nums[i];
        }
        return result;
    }

}
