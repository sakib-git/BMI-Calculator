const btn = document.getElementById('btn')
const result = document.getElementById('result')
const weight = document.getElementById('weight')
const height= document.getElementById('height')



btn.addEventListener('click', () =>{
  const w = parseFloat(weight.value)
const h = parseFloat(height.value)


if(w >= 100 && h >= 6){
  result.innerText = ' Obese'
}
else if(w >= 80 && w <= 99 && h >= 5.7 && h <= 6){
  result.innerText = 'Overweight'
}
else if(w >= 65 && w <= 79 && h >= 5.6 && h <= 6){
  result.innerText = 'Normal weight'
}
else if( w >= 45 && w <= 64 && h >= 5 && h <= 5.6){
  result.innerText = 'Underweight'
}
else if(w >= 20 && w <= 44 && h >= 5 && h <= 5.5){
  result.innerText = 'Beshi beshi khete hobe'
}
else{
  result.innerText = 'no result'
}


})