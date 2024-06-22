document.addEventListener("DOMContentLoaded", function() {

// getting password length

const range_input = document.getElementById('myRange');
// console.log(range_input.value);
const range_value = document.getElementById('range_value');
range_value.textContent = range_input.value;
range_input.addEventListener('input', function() {
    // console.log(range_input.value);
    // console.log(range_value.textContent);
    if(range_input.value<4){alert("Please select password greater then 4 digit")
        range_value.textContent =4;
        range_input.value=4
    }
    range_value.textContent = range_input.value;
    });

// end of this





const upperalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const loweralpha = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

let password='';
let pass_total=range_input.value;
console.log("password_length "+pass_total)

let box_selected=0;
let array_of_words=[upperalpha,loweralpha,numbers,symbols];
let array2=['upperalpha1','loweralpha1','numbers1','symbols1'];
// console.log(array2[0]);


document.getElementById('generate_password').addEventListener('click', function() {
    box_selected=0;
for(let i=0;i<array_of_words.length;i++){
    
    let box=document.getElementById(`${array2[i]}`);
        if (box.checked) {
            console.log("checked.");
            box_selected++;
        } else {
            console.log("unchecked.");
        }
;
}console.log("box selected "+box_selected);

let remaining_pass_k=range_input.value-box_selected;
console.log(remaining_pass_k);


});




});