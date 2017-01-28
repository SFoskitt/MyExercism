var DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function(dna) {
	var rna = '';
	for(i = 0; i < dna.length; i++){
		switch(dna[i]){
			case 'G': //to 'C'
				rna = rna + 'C';
				break;
			case 'C': //to 'G'
				rna = rna + 'G';
				break;
			case 'T': //to 'A'
				rna = rna + 'A';
				break;
			case 'A': //to 'U'
				rna = rna + 'U';
				break;
		}
	}
	return rna;
};

module.exports = DnaTranscriber;