var Hamming = function(){};

Hamming.prototype.compute = function(dna1, dna2){
	if(dna1.length !== dna2.length){
		throw 'DNA strands must be of equal length.';
	}
	var ham = 0;
	for(var i = 0; i < dna1.length; i++){
		if(dna1[i] !== dna2[i]){
			ham++;
		}
	}
return ham;
}

module.exports = Hamming;