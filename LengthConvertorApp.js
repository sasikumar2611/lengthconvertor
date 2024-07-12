
   let category=document.getElementById('category')
   let input=document.getElementById("input")
   let output=document.getElementById('output')
   let convert=document.querySelector('.convert-btn')

   
 convert.addEventListener('click',()=>{
   let selectedOption=category.value
   let inputValue=input.value
   if (isNaN(inputValue)) {
      output.value='Invalid input'
      return;
   }
   let outputValue;
switch(selectedOption) {
case 'c_to_f':
   outputValue=(inputValue*9/5)+32
   output.placeholder='temperature in C'
   break;

   case 'f_to_c':
      outputValue=(inputValue-32)*5/9
      output.placeholder='tmep in F'
      break;
   
   case 'in_to_cm':
         outputValue = inputValue * 2.54;
         output.placeholder = 'Length in cm';
         break;
   case 'cm_to_in':
                outputValue = inputValue / 2.54;
                output.placeholder = 'Length in inches';
                break;
case 'none':
                outputValue = '';
                output.placeholder = 'No conversion selected';
                break;
            default:
                outputValue = '';
                output.placeholder = 'Please select a valid option';
}
output.value=outputValue;
output.disabled=true;
   
 })
