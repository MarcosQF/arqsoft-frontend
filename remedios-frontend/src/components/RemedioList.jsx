import { useEffect, useState } from "react";
import { getRemedios, deleteRemedio, getRemedio } from "../api";

export default function RemedioList({ onEdit }) {
  const [remedios, setRemedios] = useState([]);

  useEffect(() => {
    fetchRemedios();
  }, []);

  const fetchRemedios = async () => {
    const res = await getRemedios();
    setRemedios(res.data);
  };

  const handleDelete = async (id) => {
    await deleteRemedio(id);
    fetchRemedios();
  };

  const handleView = async (id) => {
    const res = await getRemedio(id);
    const remedio = res.data;
    alert(
      `📋 Detalhes do Remédio:\n\n` +
      `🆔 ID: ${remedio.id}\n` +
      `💊 Nome: ${remedio.nome}\n` +
      `⏰ Horário: ${remedio.horario}\n` +
      `💉 Dosagem: ${remedio.dosagem}\n` +
      `📝 Observações: ${remedio.observacoes ?? "Nenhuma"}`
    );
  };

  return (
    <div>
      <h2>Lista de Remédios</h2>
      <ul>
        {remedios.map((r) => (
          <li key={r.id}>
            <strong>{r.nome}</strong> - {r.horario} - {r.dosagem}
            <br />
            {r.observacoes}
            <br />
            <button onClick={() => onEdit(r)}>Editar</button>
            <button onClick={() => handleDelete(r.id)}>Excluir</button>
            <button onClick={() => handleView(r.id)}>Ver</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
