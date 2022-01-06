import "./Note.css";
import Button from "./Button";

const Note = ({ title, onClickEdit, onClickDelete }) => {
  return (
    <div className="note">
      <p>{title}</p>
      <Button name="Edit" backgroundColor="gold" onClick={onClickEdit} />
      <Button name="Delete" backgroundColor="tomato" onClick={onClickDelete} />
    </div>
  );
};


export default Note; 

//Importamos a folha de estilo para estilizar o componente, bem como o componente Button externo, para que possamos reutilizá-lo para editar e excluir a funcionalidade.

//O componente Note inclui o título da nota, bem como os adereços onClickEdit e onClickDelete para os componentes Button que passaremos quando importar e usar o componente Note em App.js.