const btn = document.getElementById('btn')
const result = document.getElementById('result')
const weight = document.getElementById('weight')
const height= document.getElementById('height')



btn.addEventListener('click', () =>{
  const w = parseFloat(weight.value)
const h = parseFloat(height.value)

const heightM = h * 0.3048 // feet ke meter kora hoiche
 

const BMI = w / (heightM * heightM)


  

 if(BMI >= 30){
  result.innerText = `BMI: ${BMI.toFixed(2)} - Obese ` 
}
else if(BMI >= 25.5 && BMI <= 29.5){
  result.innerText = `BMI: ${BMI.toFixed(2)} - Overweight`
}
else if(BMI >= 18.5 && BMI <=24.5){
  result.innerText = `BMI: ${BMI.toFixed(2)} Normal weight`
}
else if(BMI <= 17.5){
  result.innerText = `BMI: ${BMI.toFixed(2)} - Underweight`
}

else{
  result.innerText = 'no result'
}




})