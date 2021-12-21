//Cachorro

function nomesCachorroFem() {
    let divResultadoFem = document.getElementById('resultado');
    let nomeFem = `<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Nomes Femininos</h5>
<p class="card-text">
    <ul>
        <li>Aurora</li>
        <li>Alegria</li>
        <li>Belinha</li>
        <li>Barbie</li>
        <li>Flor</li>
        <li>Jujuba</li>
        <li>Maya</li>
    </ul>
</p>
</div>
</div>
`;
    divResultadoFem.innerHTML = nomeFem;
}
document.getElementById('nomesFemininos').addEventListener('click', nomesCachorroFem);

function nomesCachorroMas() {
    let divResultadoMas = document.getElementById('resultado');
    let nomeMas = `<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Nomes Masculinos</h5>
<p class="card-text">
    <ul>
        <li>Apolo</li>
        <li>Boris</li>
        <li>Floquinho</li>
        <li>Bob</li>
        <li>Luck</li>
        <li>Thor</li>
        <li>Woody</li>
    </ul>
</p>
</div>
</div>
`;
    divResultadoMas.innerHTML = nomeMas;
}
document.getElementById('nomesMasculinos').addEventListener('click', nomesCachorroMas);

// Gato