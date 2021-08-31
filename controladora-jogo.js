import { Jogo } from "./jogo.js";
import { VisaoJogo } from "./visao-jogo.js";

export class ControladoraJogo {
    constructor() {
        this.visao = new VisaoJogo();
        this.jogo = new Jogo();
    }

    iniciar() {
        this.visao.dispararJogada((evento) => {
            evento.preventDefault();
            this.executar();
        });
    }

    executar() {
        const jogadaJogador = this.visao.jogadaDoJogador();
        const jogadaComputador = this.visao.jogadaDoComputador();
        try {
            const resultado = this.jogo.validacao(jogadaJogador, jogadaComputador);
            if (resultado == 1) {
                const result = 'Jogador';
                this.visao.mostrarResultado(result);
            } else if (resultado == 2) {
                const result = 'Computador';
                this.visao.mostrarResultado(result);
            } else {
                const result = 'Empate';
                this.visao.mostrarResultado(result);
            }
        } catch (err) {
            this.visao.mostrarErro(err.message);
        }
    }
}