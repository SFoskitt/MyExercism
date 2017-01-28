BeerSong = function(){};

BeerSong.prototype.verse = function(numBottles){
	return this.giveBack(numBottles);
}

BeerSong.prototype.sing = function(numBottles, toNum){
	var str = '';
	toNum = toNum || 0;
	for(numBottles; numBottles > toNum; numBottles--){
		console.log('numBottles in loop', numBottles);
		str = str + this.giveBack(numBottles) + '\n';
	}
	console.log('numBottles before return', numBottles);
	return str + this.giveBack(numBottles);
}

BeerSong.prototype.giveBack = function(arg){
	var next = arg - 1;
	var mainVerse = '' + arg + ' bottles of beer on the wall, ' + arg + ' bottles of beer.\nTake one down and pass it around, ' + next + ' bottles of beer on the wall.\n';
	var twoBottles = '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
	var oneBottle = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
	var noBottles = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';

	if(arg === 0){
		return noBottles;
	} else if(arg === 1){
		return oneBottle;
	} else if(arg === 2){
		return twoBottles;
	} else {
		return mainVerse;
	}
}

module.exports = BeerSong;