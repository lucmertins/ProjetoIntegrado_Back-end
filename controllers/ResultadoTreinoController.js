
import { ResultadoTreino } from "../models/ResultadoTreino.js";

export const ResultadoTreinoIndex = async (req, res) => {
  try {
    const resultados = await ResultadoTreino.findAll(); 
    res.status(200).json(resultados);
  } catch (error) {
    res.status(400).send(error);
  }
};

// aluno_id, personal_id, data(dia/mes/ano), carga, serie, repeticao, 