import { Pesquisador } from './pesquisador';
export class Vacina{
    id: number;
	paisOrigem: string;
	estagioPesquisa: number;
	dataInicioPesquisa: Date;
	responsavel: Pesquisador;
}