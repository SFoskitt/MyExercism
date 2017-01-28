PhoneNumber = function(arg){
	this.num = arg;
};

PhoneNumber.prototype.number = function() {
	var ints = ['1','2','3','4','5','6','7','8','9','0'];
	var tmp = '';
	var local = this.num.split('');

	local.forEach(function(char){
		if(ints.indexOf(char) !== -1){
			tmp = tmp + char;
		}
	});

	if(tmp.length === 11 && tmp[0] === '1'){
		return tmp.slice(1)
	} else if (tmp.length !== 10){
		return '0000000000';
	} else {
		return tmp;
	}
};

PhoneNumber.prototype.areaCode = function(){
	var maybe = this.number();
	return maybe.slice(0,3);
};

PhoneNumber.prototype.toString = function(){
	var str = this.number();
	var code = str.split('');
	code.splice(0,0,'(');  //(1234567890
	code.splice(4,0,') '); //(123) 4567890
	code.splice(8,0,'-');
	return code.join('');
}

module.exports = PhoneNumber;