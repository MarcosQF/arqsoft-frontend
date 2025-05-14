import { useState, useEffect } from "react";
import { createRemedio, updateRemedio } from "../api";

export default function RemedioForm({ selected, onSave }) {
  const [form, setForm] = useState({
    nome: "",
    horario: "",
    dosagem: "",
    observacoes: "",
  });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await updateRemedio(form.id, form);
    } else {
      await createRemedio(form);
    }
    setForm({ nome: "", horario: "", dosagem: "", observacoes: "" });
    onSave(); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{form.id ? "Editar" : "Cadastrar"} Remédio</h2>
      <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" required />
      <input name="horario" value={form.horario} onChange={handleChange} placeholder="Horário" required />
      <input name="dosagem" value={form.dosagem} onChange={handleChange} placeholder="Dosagem" required />
      <input name="observacoes" value={form.observacoes} onChange={handleChange} placeholder="Observações" />
      <button type="submit">Salvar</button>
    </form>
  );
}
