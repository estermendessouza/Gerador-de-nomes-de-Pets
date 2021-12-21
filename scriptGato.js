function nomesGatoFem() {
    let divResultadoFem = document.getElementById('resultado');
    let nomeFem = `<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Nomes Femininos</h5>
<p class="card-text">
    <ul>
        <li>Magali</li>
        <li>Luna</li>
        <li>Joy</li>
        <li>Maya</li>
        <li>Penélope</li>
        <li>Condessa</li>
        <li>Tina</li>
    </ul>
</p>
</div>
</div>
`;
    divResultadoFem.innerHTML = nomeFem;
}
document.getElementById('nomesFemininos').addEventListener('click', nomesGatoFem);

function nomesGatoMas() {
    let divResultadoMas = document.getElementById('resultado');
    let nomeMas = `<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Nomes Masculinos</h5>
<p class="card-text">
    <ul>
        <li>Cartier</li>
        <li>Celine</li>
        <li>Fendi</li>
        <li>Loui</li>
        <li>Stefan</li>
        <li>Françoise</li>
        <li>Mackenzie</li>
    </ul>
</p>
</div>
</div>
`;
    divResultadoMas.innerHTML = nomeMas;
}
document.getElementById('nomesMasculinos').addEventListener('click', nomesGatoMas);