//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//
//Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
//
//Create a function which translates a given DNA string into RNA.
//
//For example:
//
//"GCAT"  =>  "GCAU"
//The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


#include <string>

using namespace std;

string DNAtoRNA(string dna){
  string rna; //initialize string to be returned
  for (int i = 0; i < dna.size(); i++) {  //iterate through dna string
    if (dna[i] == 'T') {  //if character is T, replace with U
      rna.push_back('U');
    } else {              //else, keep character the same
      rna.push_back(dna[i]);
    };
  }
  return rna;
}