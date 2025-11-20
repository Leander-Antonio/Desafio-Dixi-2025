class Funcionario{
constructor(idFunc, nomeFunc, cpfFunc, pisFunc, matriculaFunc, dataAdmissaoFunc, situacaoCadastroFunc){
    this.idFunc = idFunc;
    this.cpfFunc = cpfFunc;
    this.pisFunc = pisFunc;
    this.dataAdmissaoFunc = dataAdmissaoFunc;
    this.matriculaFunc = matriculaFunc;
    this.nomeFunc = nomeFunc;
    this.situacaoCadastroFunc = situacaoCadastroFunc;
 }
   exibir() {
    return `${this.id} - ${this.nome} (${this.cpf})`;
  }

  atualizar(dados) {
    Object.assign(this, dados);
  }

  validarCPF() {
    return this.cpf.length === 11;
  }
}