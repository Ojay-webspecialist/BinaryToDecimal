let binaryInput = document.getElementById('binaryInput');
let convertBut = document.getElementById('binaryConvert');
const showResult = document.getElementById('showResult');
const inputForm = document.getElementById('inputForm');
const error_message= document.getElementById('error_message');

    
            
    
    

    disable();

  

function getUserInput(){
    binaryInput.addEventListener('keyup',($event)=>{

        if($event.code == 'Digit0' || $event.code == 'Digit1'|| $event.key == '+' ||$event.key == '(' || $event.key == ')' || $event.key == '-' ||
       $event.key == 'ArrowLeft' || $event.key == 'ArrowRight' || $event.key == 'Delete' || $event.key == 'Backspace'){
           
            console.log('You entered key ' + $event.key)
            
        } else {
           
            alert('Please enter 0 or 1');
        
            inputForm.reset();
            disable();
            
          //  error_message.textContent ='';
        }
        
    });

   
    


    binaryInput.addEventListener('input',()=>{
        if(binaryInput.value !=''){
           
            convertBut.disabled=false;
            
        }
    });
    
   
}
getUserInput();
       
function convert(){
   let buttonClick = convertBut.addEventListener('click',($event)=>{

        $event.preventDefault();

        
  
        let binary = binaryInput.value;
        
        let decimal = parseInt(binary,2);

        showResult.textContent= binary + " in decimal is " + decimal;
        let display = showResult;

        inputForm.reset()
        disable()
        console.log(display);
        



    });

    
}
        convert();

    function disable(){
        convertBut.disabled =true;
        
    }
    
       

