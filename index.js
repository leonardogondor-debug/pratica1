/*obtem valor do chute */
const valorChute = () => document.getElementById("chute").value;
let tentativa = 10;

/*sorteia 1 valor */
function sorteia(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let sortiado = sorteia(1, 10);

/*valida o valor chute */
const valorMaior = (chute) => chute < 1;
const valorMenor = (chute) => chute > 10;

/*retorna as configuracoe iniciais */
function resetar() {
    sortiado = sorteia(1, 10);
    tentativa = 10;
    document.getElementById("resultado").innerHTML= "Dicas e resultado";
    document.getElementById("contador").innerHTML= `Tentativas: ${tentativa}`;
    document.getElementById("chute").innerHTML= "";
    document.getElementById("chute").disabled = false;
}

/*funcao conectada ao html */
function jogo() {
    const chuteUsuario = Number(valorChute());

    /*valida chute */
    if (valorMaior(chuteUsuario)) {
        document.getElementById("resultado").innerHTML= "Valor invalido";
        return;
    }
    if (valorMenor(chuteUsuario)) {
        document.getElementById("resultado").innerHTML= "Valor invalido";
        return;
    }
     
    /*checa tentativas */
    tentativa--;
    if (tentativa == 0 ) {
        document.getElementById("resultado").innerHTML= `Voce perdeu o valor secreto era: ${sortiado}`;
        document.getElementById("contador").innerHTML= `Tentativas: ${tentativa}`;
        return;
    } 
    
    if (tentativa < 0) {
        return resetar();
    }

    /*checa vitoria */
    if (chuteUsuario === sortiado) {
        document.getElementById("resultado").innerHTML= `Voce venceu valor secreto: ${sortiado}`;
        return;
    } else if (chuteUsuario !== sortiado) {
        if (chuteUsuario > sortiado) {
            document.getElementById("resultado").innerHTML= "Errado valor secreto e menor.";
            document.getElementById("contador").innerHTML= `Tentativas: ${tentativa}`;
            return;
        } else {
            document.getElementById("resultado").innerHTML= "Errado valor secreto e maior";
            document.getElementById("contador").innerHTML= `Tentativas: ${tentativa}`;
            return;
        }
    }



}