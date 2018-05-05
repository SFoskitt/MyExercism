class ArmstrongNumbers {

	boolean isArmstrongNumber(int numberToCheck) {
		String numToString = Integer.toString(numberToCheck);
		int len = numToString.length();
		char[] processArr = numToString.toCharArray();
		int accum = 0;

		for(char digit : processArr){
			int tmp = Character.getNumericValue(digit);
			accum += Math.pow(tmp, len);
		}
		
		return accum == numberToCheck;
	}

}
