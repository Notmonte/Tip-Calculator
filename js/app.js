const confirmBtn = document.getElementById('confirmBtn')
const totalDisplay=document.getElementById('total')


confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    
    const subtotal = parseFloat(document.getElementById('subtotalInput').value)
    
    const tipAmt = parseFloat(document.getElementById('tipAmt').value)

    const otherAmt = parseFloat(document.getElementById('otherAmt').value)

    let total;

    isNaN(tipAmt) ? total = subtotal + otherAmt : total = (subtotal * tipAmt) + subtotal

    totalDisplay.innertext = total.toFixed(2)
})