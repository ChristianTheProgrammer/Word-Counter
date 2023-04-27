const textareaEL = document.querySelector('.textarea');
const characterNumbersEl = document.querySelector('.stat__number--characters');
const twitterNumbersEl = document.querySelector('.stat__number--twitter');
const facebookNumbersEl = document.querySelector('.stat__number--facebook');
const wordsNumbersEl = document.querySelector('.stat__number--words');

const inputHandler = () => {
    //input validation
    if (textareaEL.value.includes('Narmeen Gonzalez')) {
        alert('I love you!!!!!! I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!I love you!!!!!!');
    }


    // determine new numbers
let numberOfwords = textareaEL.value.split(' ').length;
if (textareaEL.value.length === 0){
    numberOfwords = 0;
}
const numberOfletters = textareaEL.value.length;
const twitterChrctsLeft = 280 - numberOfletters;
const facebookChrctsLeft = 2200 - numberOfletters;

    //add Visial indicator if limit is exceeded
    if (twitterChrctsLeft < 0 ) {
         twitterNumbersEl.classList.add('stat__number--limit')
    } else {
        twitterNumbersEl.classList.remove('stat__number--limit')
    }
    if (facebookChrctsLeft < 0 ) {
        facebookNumbersEl.classList.add('stat__number--limit')
    }else {
        facebookNumbersEl.classList.remove('stat__number--limit')

    }
    //set new numbers
    characterNumbersEl.textContent = numberOfletters;
    twitterNumbersEl.textContent=twitterChrctsLeft;
    facebookNumbersEl.textContent = facebookChrctsLeft;
    wordsNumbersEl.textContent = numberOfwords
};

textareaEL.addEventListener('input', inputHandler);

