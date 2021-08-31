const IDS = {
    RESULTADO: 'resultado',
    JOGAR: 'jogar',
    JOGADA: 'jogada',
    COMPUTADOR: 'computador',
    JOGADOR: 'jogador',
    EMPATE: 'empates',
    JOGADACOMPUTADOR: 'jogadaComputador'
}
var resultadoJogador = 0;
var resultadoComputador = 0;
var resultadoEmpate = 0;

export class VisaoJogo {

    jogadaDoJogador() {
        var jogadas = document.getElementsByName(IDS.JOGADA);
        for (var i = 0; i < jogadas.length; i++) {
            if (jogadas[i].checked) {
                return jogadas[i].value;
            }
        }
    }

    jogadaDoComputador() {
        var jogadasComputador = ['pedra', 'papel', 'tesoura'];

        var numeroRandomico = Math.floor(Math.random() * jogadasComputador.length);

        document.getElementById(IDS.JOGADACOMPUTADOR).src = './img/' + jogadasComputador[numeroRandomico] + '.png'

        return jogadasComputador[numeroRandomico];
    }

    mostrarResultado(resultado) {

        console.log(resultado);

        if (resultado == 'Jogador') {
            resultadoJogador += 1;
            document.getElementById(IDS.JOGADOR).innerText = resultadoJogador;
        } else if (resultado == 'Computador') {
            resultadoComputador += 1;
            document.getElementById(IDS.COMPUTADOR).innerText = resultadoComputador;
        } else {
            resultadoEmpate += 1;
            document.getElementById(IDS.EMPATE).innerText = resultadoEmpate;
        }

        document.getElementById(IDS.RESULTADO).innerText = resultado;
    }

    mostrarErro(mensagem) {
        document.getElementById(IDS.RESULTADO).innerText = mensagem;
    }

    dispararJogada(evento) {
        document.getElementById(IDS.JOGAR)
            .addEventListener('click', evento);
    }
}