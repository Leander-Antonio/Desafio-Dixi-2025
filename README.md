# 🚀 Desafio Dixi 2025 – Sistema de Controle de Ponto

Sistema de controle de ponto com cadastro de funcionários, validação de CPF/PIS, importação de AFD (1510/671) e classificação de marcações.  
Inclui geração de espelho ponto com horas trabalhadas, extras, atrasos e faltas.

Este projeto foi desenvolvido como parte do **Desafio Técnico Dixi 2025**, com foco em:

- Organização da arquitetura
- Boas práticas de código
- Interface clara e funcional
- Modularidade e escalabilidade

---

## 📌 Funcionalidades Implementadas

### ✔ Cadastro de Funcionário

- Nome completo
- CPF
- PIS
- Matrícula
- Data de admissão
- Situação (Ativo/Inativo)
- Máscaras e validações
- Feedback de erros
- Navegação entre telas

### ✔ Listagem de Funcionários

- Filtro por campos básicos
- Botão “Adicionar” com redirecionamento
- Paginação
- Tabela organizada e responsiva

---

## 🔄 Funcionalidades em Desenvolvimento

### Importação de Arquivos AFD (1510/671)

- Upload de arquivo
- Leitura das marcações
- Classificação: “apropriadas” / “não apropriadas”
- Validação via PIS/CPF

### Espelho Ponto

- Horas trabalhadas
- Horas extras
- Horas normais
- Atrasos
- Faltas
- Adicional noturno
- Visualização por funcionário e por dia

---

## 🛠 Tecnologias Utilizadas

- **React + Vite**
- **TailwindCSS**
- **React Router DOM**
- **Heroicons**
- **JavaScript (ES2022)**

---

## ▶️ Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seuusuario/Desafio-Dixi-2025.git
cd Desafio-Dixi-2025

npm install

npm run dev

acesse: http://localhost:5173/
```

## 📘 Resumo Oficial da Prova Técnica

A prova avalia:

- Análise lógica
- Qualidade de código
- Organização
- Estrutura modular
- Tratamento de exceções
- Clareza e manutenção da arquitetura

### 🔷 Cadastro de Funcionário
- Nome completo
- CPF
- PIS
- Matrícula
- Admissão
- Status
- Validações e erros claros
- Máscaras (formatos)

### 🔷 Importação de AFD
- Suporte aos padrões **1510** e **671**
- Processamento dos registros
- Classificação das marcações
- Feedback de erros

### 🔷 Espelho Ponto
- Horas normais
- Horas extras
- Adicional noturno
- Atrasos
- Faltas
- Separação por funcionário e por dia

### 🔷 Versionamento
- Git com commits claros
- README obrigatório

---

## ✨ Autores

**Leander Antonio**
**João V. Franze**
```
