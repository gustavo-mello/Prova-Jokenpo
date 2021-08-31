export class Jogo {

    validacao(jogadaJogador, jogadaComputador) {

        if (jogadaJogador == "pedra" && jogadaComputador == 'tesoura') {
            return 1;
        } else if (jogadaJogador == "pedra" && jogadaComputador == 'papel') {
            return 2;
        } else if (jogadaJogador == "papel" && jogadaComputador == 'pedra') {
            return 1;
        } else if (jogadaJogador == "papel" && jogadaComputador == 'tesoura') {
            return 2;
        } else if (jogadaJogador == "tesoura" && jogadaComputador == 'papel') {
            return 1;
        } else if (jogadaJogador == "tesoura" && jogadaComputador == 'pedra') {
            return 2;
        } else if (jogadaJogador == jogadaComputador) {
            return 3;
        }
    }


}