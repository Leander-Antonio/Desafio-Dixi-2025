function cadastrarFuncionario(idFunc, nomeFunc, cpfFunc, pisFunc, matriculaFunc, dataAdmissaoFunc, situacaoCadastroFunc){
    const funcionario = {
        id: idFunc,
        nome: nomeFunc,
        cpf: cpfFunc,
        pis: pisFunc,
        matricula: matriculaFunc,
        dataAdmissaoFunc: dataAdmissaoFunc,
        situacaoCadastroFunc: situacaoCadastroFunc
    };
    return funcionario
}