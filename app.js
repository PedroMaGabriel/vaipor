var p = document.getElementById('canva')
var x = document.getElementById('hzz')
var pv = document.querySelector('#pv')
var i = document.querySelector('#jur')
var n = document.querySelector('#parc')
var np = document.getElementById('parcela')
var nd = document.querySelector('#nd')
var ta = document.getElementById('traba')
var ter = document.getElementById('trabal')
var canvas = document.getElementById('canvas')
var oca = document.getElementById('texto')
var valor_juros = document.getElementById('juross')
var tot = document.getElementById('blab')
var das = document.getElementById('ver')
var bora_bill = document.getElementById('bill')
var ultimoCom = document.getElementById('ultimo')


function mudar() {
    x.textContent = 'valor da parcela'
    p.style.backgroundColor = '#001aff', 'transparent'
    x.style.color = '#141414'

    var iValue = parseFloat(i.value) / 100
    var pvValue = parseFloat(pv.value)
    var nValue = parseFloat(n.value)

    var a = (pvValue * iValue * Math.pow(1 + iValue, nValue)) / (Math.pow(1 + iValue, nValue) - 1);
    nd.style.color = '#141414'
    nd.textContent = 'R$' + a.toLocaleString('pt-BR', {maximumFractionDigits: 2})

    var amort = a - (iValue * pvValue);
    ta.textContent = 'valor decimal do juros'
    ter.textContent = 'R$' + iValue.toLocaleString('pt-BR', {maximumFractionDigits: 2})
    ta.style.color = '#141414'
    canvas.style.backgroundColor = '#001aff'

    oca.textContent = 'valor do juros somados'
    oca.style.color = '#141414'
    var totaljuros = 0;
    var z = 0;
    var lala = 0;
    var total = 0;
    while (z < nValue) {
        var jurosa = iValue * pvValue
        totaljuros += jurosa
        pvValue -= (a - jurosa)
        lala+=a
        total+=(a-jurosa)
        z++;
    }
    tot.textContent = 'valor com juros'
    bora_bill.textContent = 'soma da amortização:'
    bora_bill.style.color = '#141414'
    ultimoCom.textContent = 'R$' + total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    ultimoCom.style.color = '#141414'
    tot.style.color = '#141414'
    das.textContent =  'R$' + lala.toLocaleString('pt-BR', {maximumFractionDigits: 2})
    das.style.color = '#141414'
    valor_juros.textContent = 'R$' + totaljuros.toLocaleString('pt-BR', {maximumFractionDigits: 2})
    valor_juros.style.color = '#141414'
}
