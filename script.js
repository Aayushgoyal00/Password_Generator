const range_input = document.getElementById('myRange');
// console.log(range_input.value);
const range_value = document.getElementById('range_value');
range_value.textContent = range_input.value;



document.addEventListener("DOMContentLoaded", function() {

// getting password length

range_input.addEventListener('input', function() {
    // console.log(range_input.value);
    // console.log(range_value.textContent);
    if(range_input.value<4){alert("Please select password greater then 3 digit")
        range_value.textContent =4;
        range_input.value=4
    }else{
    range_value.textContent = range_input.value;}
    });

// end of this

const upperalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const loweralpha = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";


// let pass_total=range_input.value;
// console.log("password_length "+pass_total)

// let box_selected=0;
let array_of_words=[upperalpha,loweralpha,numbers,symbols];
let array2=['upperalpha','loweralpha','numbers','symbols'];

// console.log(array2[0]);


document.getElementById('generate_password').addEventListener('click', function() {
    let box_selected=0;
    let array3=[0,0,0,0];
    let selected_characters = '';
    let password='';
for(let i=0;i<4;i++){
    
    let box=document.getElementById(`${array2[i]}`);
        if (box.checked) {
            // console.log("checked.");
            array3[i]=1;
            selected_characters += array_of_words[i];
            box_selected++;
        } else {
            // console.log("unchecked.");
        }
;}
// console.log(array3);
// console.log(selected_characters)
// console.log("box selected "+box_selected);
if (box_selected === 0) {
    alert("Please select at least one character type");
    return;
}


let remaining_pass_k=parseInt(range_input.value)-box_selected;

// console.log(remaining_pass_k);
for(let j=0;j<4;j++){
    // console.log(array3[j])
if(array3[j]==1){
    let randomValue=Math.floor((Math.random())*100)%array_of_words[j].length;
    // console.log(array_of_words[j].length)
    // console.log(randomValue);
    password += array_of_words[j][randomValue];
    
}else{
    continue;
}
}

for (let k = 0; k < remaining_pass_k; k++) {
    let randomIndex = Math.floor(Math.random() * selected_characters.length);
    password += selected_characters[randomIndex];
}

let passwordArray = password.split('');
// console.log(passwordArray);
for (let a = passwordArray.length - 1; a > 0; a--) {
    let index1 = Math.floor(Math.random() * (a + 1));

    // Swap variables
    let temp = passwordArray[index1];
    passwordArray[index1] = passwordArray[a];
    passwordArray[a] = temp;
}
// console.log(passwordArray);
password = passwordArray.join('');
document.getElementById('generated_password').textContent = password;

let clipboard=document.querySelector('#clipboard_button');
clipboard.addEventListener('click',function(){
    let txt=document.getElementById('generated_password').textContent;
    navigator.clipboard.writeText(txt)
})

});


let clipboard=document.querySelector('#clipboard_button');
clipboard.addEventListener('click',function(){
    let txt=document.getElementById('generated_password').textContent;
    navigator.clipboard.writeText(txt)
})


});