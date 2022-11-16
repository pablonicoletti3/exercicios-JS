function Converter(){
    let valor1 = document.getElementById('metro').value

    let total = parseFloat(valor1) * 100

    document.getElementById('resposta').innerHTML = total 
}