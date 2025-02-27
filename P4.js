let div = null; //step-5


window.onload = () => {
    main();
};



function main() {
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const changeBtn = document.getElementById('change-btn');
    const copyBtn = document.getElementById('copy-btn');



  changeBtn.addEventListener('click', function(){
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
    copyBtn.innerHTML ='copy';
  });



  copyBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(output.value);



    //step-6
    if(div  != null){
      div.remove();
      div = null;
    }
    copyBtn.innerHTML = 'copied';
    generateToastMessage(`${output.value} copied`); //step-1
  });

}

function generateHexColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

}

//step-2
function generateToastMessage(msg) {
	 div = document.createElement('div');
	div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';
    document.body.appendChild(div);
//step-3
    div.addEventListener('click', function(){
      div.classList.remove('toast-message-slide-in');
      div.classList.add('toast-message-slide-out');
   //srep-4

   div.addEventListener('animationend', function(){
    div.remove();
    div = null;
   }) ;  
    
    });
  }