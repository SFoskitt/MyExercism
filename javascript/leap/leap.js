Year = function(){};

Year.prototype.isLeap = function(input){
	if(input % 400 === 0){ return true; }
	if(input % 100 === 0){ return false;}
	if(input % 4 === 0){ return true; }
	if(input === 2016){ return true; }

	return false;
}

module.exports = Year;