//declaring my variables
let input = document.getElementById('display')

disp = (num) => {
   switch (num) {
      case 1:
         input.value += '1';
         break;
      case 2:
         input.value += '2';
         break;
      case 3:
         input.value += '3';
         break;
      case 4:
         input.value += '4';
         break;
      case 5:
         input.value += '5';
         break;
      case 6:
         input.value += '6';
         break;
      case 7:
         input.value += '7';
         break;
      case 8:
         input.value += '8';
         break;
      case 9:
         input.value += '9';
         break;
      case 0:
         input.value += '0';
         break;
      case '.':
         input.value += '.';
         break;
   }
}

clean = () => {
   input.value = "";
}

backspace = () => {
   let x = input.value;
   if (x.length > 0) {
      x = x.substring(0, x.length - 1);
      input.value = x;
   }
}

operand = (op) => {
   switch (op) {
      case '/':
         input.value += '/';
         break;
      case '+':
         input.value += '+';
         break;
      case '-':
         input.value += '-';
         break;
      case '*':
         input.value += '*';
         break;
      case '+/-':
         input.value += '-' + input.value;
         break;
   }
}

equal = () => {
   input.value = eval(input.value);
}