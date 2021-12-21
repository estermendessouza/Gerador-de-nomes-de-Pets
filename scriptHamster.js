function nomesHamsterFem() {
    let divResultadoFem = document.getElementById('resultado');
    let nomeFem = `<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Nomes Femininos</h5>
<p class="card-text">
    <ul>
        <li>Eleanor</li>
        <li>Jeanette</li>
        <li>Brittany</li>
        <li>Amendoim</li>
        <li>Avelã</li>
        <li>Minnie</li>
    </ul>
</p>
</div>
</div>
`;
    divResultadoFem.innerHTML = nomeFem;
}
document.getElementById('nomesFemininos').addEventListener('click', nomesHamsterFem);

function nomesHamsterMas() {
    let divResultadoMas = document.getElementById('resultado');
    let nomeMas = `<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Nomes Masculinos</h5>
<p class="card-text">
    <ul>
        <li>Mickey</li>
        <li>Gilbert</li>
        <li>Alvin</li>
        <li>Theodore</li>
        <li>Simon</li>
        <li>Tico</li>
        <li>Teco</li>
    </ul>
</p>
</div>
</div>
`;
    divResultadoMas.innerHTML = nomeMas;
}
document.getElementById('nomesMasculinos').addEventListener('click', nomesHamsterMas);