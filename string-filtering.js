
const string = "Привет! Как дела?";

const vowels = ['а','е','и','о','э','ы','у','ё','я'];

const getVowels = stringToFilter => {
  let extractedVowels ='';

  for (let i=0; i<stringToFilter.length; i++ ) {
    const currentLetter = stringToFilter[i].toLowerCase();

    if(vowels.includes(currentLetter)){
      extractedVowels += currentLetter;
    }
  }

  return extractedVowels;
}

 console.log(getVowels(string));
