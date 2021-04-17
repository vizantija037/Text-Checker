let areaColor = document.getElementById('areaColor');
let textColor = document.getElementById('textColor');
let textFormat = document.getElementById('textArea');
let fontFamily = document.getElementById('fontFamily');
let fontSize = document.getElementById('myFontSize');
let closeDiv = document.getElementById('closeBtn');
let divTex = document.getElementById('divText');

document.addEventListener('click', function formating() {
    
    let indexFF = fontFamily.selectedIndex; 
    let indexFS = fontSize.selectedIndex;
    
    textFormat.style.color = textColor.value;
    textFormat.style.backgroundColor = areaColor.value;
    textFormat.style.fontFamily = changeFont(indexFF);
    textFormat.style.fontSize = changeFontSize(indexFS);
})

function changeFont (value) {
    let output = '';
    switch(value){
        case 0:
        output = 'Calibri';
        break;
        case 1:
        output = 'Times New Roman';
        break;
        case 2:
        output = 'Serif';
        break;
        case 3:
        output = 'Arial';
        break;
    }
    return output;
}

function changeFontSize (value) {
    let output = '';
    switch(value){
        case 0:
        output = '1.5em';
        break;
        case 1:
        output = '1em';
        break;
        case 2:
        output = '2em';
        break;
        default:
        output = '1em';
      }
    return output;
}

let btnCW = document.getElementById('countWordsBtn');
btnCW.addEventListener('click', function countWords (){
    
    let countWords = document.getElementById('countWordsResult');
    let wordsArr = textFormat.value.split(/\b\S+\b/g).length-1;
    countWords.value = wordsArr;
})

let btnCC = document.getElementById('countCharactersBtn');
btnCC.addEventListener('click', function countCharacters (){
    let countCharacters = document.getElementById('countCharactersResult');
    let charactersArr = textFormat.value.split('').length;
    countCharacters.value = charactersArr;
 })

let btnCL = document.getElementById('checkLongiestBtn');
btnCL.addEventListener('click', function getLongiest (){
    let longWord = document.getElementById('checkLongiestResult');
    let wordsArr = textFormat.value.replace(/[ ,.]/g,' ').split(' ').sort((a, b)=> b.length - a.length);
    checkLongiestResult.value = wordsArr[0];
})

let btnFind = document.getElementById('findBtn');
btnFind.addEventListener('click', function find(){
    let inputFind = document.getElementById('findField');
    
    if(inputFind.value!==''){    
    
    let markText = document.createElement('MARK');
    let textArr = textFormat.value.split(' ');
    let filteredArr = textArr.map(function(item){
        if (item.toLowerCase() === inputFind.value.toLowerCase()){
            return item = `<mark>${item}</mark>`
        } else {
            return item;
        };
    })
    divText.innerHTML = (filteredArr.join(' '));
    divText.style.visibility='visible';
    closeDiv.style.visibility='visible';
    } else {
        return;
    }

})

closeDiv.addEventListener('click', visibility);

function visibility(e) {
    divTex.style.visibility = 'hidden';
    closeDiv.style.visibility='hidden';
    console.log(e)
}


let allCapsBtn = document.getElementById('allCaps');
allCapsBtn.addEventListener('click', function(){
    let textArr = textFormat.value.split(' ');
    textArr.forEach(item =>{
        return item.toUpperCase();
    })
    return textFormat.style.textTransform = 'uppercase';
})

let allSmallBtn = document.getElementById('allSmall');
allSmallBtn.addEventListener('click', function(){
    let textArr = textFormat.value.split(' ');
    textArr.forEach(item =>{
        return item.toLowerCase();
    })
    return textFormat.style.textTransform = 'lowercase';
})


let copyText = document.getElementById('copyText');

copyText.addEventListener('click', function(){
    textFormat.select();
    textFormat.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Your text is copied to clipboard" );
})

textFormat.addEventListener('keyup', trtMrt);
function trtMrt(e){
    if (e.keyCode === 13){
    console.log(e);
    }
}






