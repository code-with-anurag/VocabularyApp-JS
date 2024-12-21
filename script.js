let form=document.querySelector('form');
let input=document.querySelector('input');
let result=document.getElementsByClassName('result');
// let sound1=document.getElementById('sound1');
let url="https://api.dictionaryapi.dev/api/v2/entries/en/";
console.log(sound1);

 const myFunction=(e)=>{
    
     e.preventDefault();
     const inpword=input.value;
    
     fetch(`${url}${inpword}`)
    .then(response=> response.json())
    .then(data=>  {
        result[0].innerHTML=`<div class="box">
        <p class="word">${inpword}</p>
        <button class="button2">
        <i id="sound" class="fa-solid fa-volume-high">
        </i></button>
    </div>
         
    <div class="meaning">
        <p id="para1"><b>Meaning</b>   :  ${data[0].meanings[0].definitions[0].definition}</p>
        <p id="para2"><b>Synonyms</b>  :  ${data[0].meanings[0].synonyms[0]}</p>
         <p id="para3"><b>PartsOfSpeech</b>  :  ${data[0].meanings[0].partOfSpeech} </p>
    </div>
`
   }).catch(()=>{
    result[0].innerHTML="Could n't find meaning"
});


  
 
  form.reset();
}
 form.addEventListener('submit',myFunction);




