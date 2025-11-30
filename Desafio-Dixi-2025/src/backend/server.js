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

// Rota: buscar funcionário por ID
app.get("/funcionarios/:id", (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM funcionarios WHERE id = ?";

  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Erro ao buscar funcionário:", err);
      return res.status(500).json({ error: "Erro no servidor" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Funcionário não encontrado" });
    }

    res.json(results[0]);
  });
});

// Rota: atualizar funcionário
app.put("/funcionarios/:id", (req, res) => {
  const { id } = req.params;
  const { nome, cpf, pis, matricula, data_admissao, ativo } = req.body;

  const sql = `
    UPDATE funcionarios
    SET nome = ?, cpf = ?, pis = ?, matricula = ?, data_admissao = ?, ativo = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [nome, cpf, pis, matricula, data_admissao, ativo, id],
    (err, result) => {
      if (err) {
        console.error("Erro ao atualizar funcionário:", err);
        return res.status(500).json({ error: "Erro no servidor" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Funcionário não encontrado" });
      }

      res.json({ message: "Funcionário atualizado com sucesso!" });
    }
  );
});

// Porta do servidor
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
