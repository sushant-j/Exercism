// Why this part???
var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function (string) {
  var dna = [];
  var rna = [];
  dna = string.split('');

  // seek and REPLACE! (no, not destroy :P)
  for (var i = 0; i < dna.length; i++) {
    if (dna[i]=='C') {
      rna[i]='G';
    }
    else if (dna[i]=='G') {
      rna[i]='C';
    }
    else if (dna[i]=='A') {
      rna[i]='U';
    }
    else if (dna[i]=='T') {
      rna[i]='A';
    }
  }

  // Concat
  rnaString = rna.join('exer');
  //return
  return rnaString;
};

// create an empty string ARRAY
// Check array, the ith char
// Replace with complement
// Concat to a string (new)
// return the new string

module.exports = DnaTranscriber;


/*=============================================>>>>>
= Better Ways =
===============================================>>>>>*/

/*----------- http://exercism.io/gprocell927 -----------*/
// function DnaTranscriber() {
//   DnaTranscriber.prototype.toRna = function(nucleotide) {
//     var codex = {
//       A: 'U',
//       T: 'A',
//       C: 'G',
//       G:'C'
//     }
//     var encoded = []
//     nucleotide.split('').forEach((letter) => {
//       encoded.push(codex[letter])
//     })
//     return encoded.join('')
//   }
// }
//
// module.exports = DnaTranscriber
/*----------- http://exercism.io/gprocell927 -----------*/

/*= End of Better Ways =*/
/*=============================================<<<<<*/
