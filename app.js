// 1. Traer las notas de los input
const input1 = document.getElementById('note1');
const input2 = document.getElementById('note2');
const input3 = document.getElementById('note3');
//2. Traer los párrafos con los que voy a interactuar
const retrieveNote = document.querySelector('.report-retrieve');
const winNote = document.querySelector('.report-win');
const excellentNote = document.querySelector('.report-excellent');
//3.Traer el párrafo para la nota completa
const finalNote = document.getElementById('p-msj');
//4. Traer el botón
const btnCalculate = document.getElementById('btn-calculate');
//5.Calcular nota definitiva
btnCalculate.addEventListener('click',calculateNote);

//Regex para que reciba solo números
const regex = new RegExp("^[1-5]{1}$");

//Validar el input
input1.addEventListener('keyup',validateNumbers);
input2.addEventListener('keyup',validateNumbers);
input3.addEventListener('keyup',validateNumbers);

//Calcular Nota final
btnCalculate.addEventListener('click', calculateNote);

function validateNumbers() {
    //Validar regex para los inputs
    if (!(regex.test(input1.value) && regex.test(input2.value) && regex.test(input3.value))) {
      finalNote.textContent = "Ingresa un valor numérico entre 1 y 5"
      finalNote.style.color = 'red';
      finalNote.style.fontSize = '1rem';
    } 
    calculateMissingFinalNote();
  }

function calculateNote() {
  let note1 = parseFloat(input1.value);
  let note2 = parseFloat(input2.value);
  let note3 = parseFloat(input3.value);
  let final = (note1 * 0.30) + (note2 * 0.30) + (note3 * 0.40);
  finalNote.textContent = final;
  return final;
}

function calculateMissingFinalNote() {
  let final = calculateNote();
  console.log(final);
}

