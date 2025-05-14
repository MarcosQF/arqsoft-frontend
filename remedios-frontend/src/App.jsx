import { useState } from "react";
import RemedioList from "./components/RemedioList";
import RemedioForm from "./components/RemedioForm";

function App() {
  const [selectedRemedio, setSelectedRemedio] = useState(null);
  const [reload, setReload] = useState(false);

  const handleEdit = (remedio) => setSelectedRemedio(remedio);
  const handleSave = () => {
    setSelectedRemedio(null);
    setReload(!reload);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <RemedioForm selected={selectedRemedio} onSave={handleSave} />
      <RemedioList onEdit={handleEdit} key={reload} />
    </div>
  );
}

export default App;
