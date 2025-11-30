const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "dixi_db",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQLssas!");
});

// Rota: cadastrar funcionário
app.post("/funcionarios", (req, res) => {
  const { nome, cpf, pis, matricula, data_admissao, ativo } = req.body;

  const sql = `
    INSERT INTO funcionarios 
    (nome, cpf, pis, matricula, data_admissao, ativo)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [nome, cpf, pis, matricula, data_admissao, ativo],
    (err, result) => {
      if (err) {
        console.error(err);
        console.error("ERRO SQL:", err);
        return res.status(500).json({ error: err });
      }

      res.json({ message: "Funcionário cadastrado com sucesso!" });
    }
  );
});

app.get("/funcionarios", (req, res) => {
  const sql = "SELECT * FROM funcionarios";

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Porta do servidor
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
