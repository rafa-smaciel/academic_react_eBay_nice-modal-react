import { useState } from "react"; //Primeiro, importamos o gancho useState para rastrear o objeto de notas assim que o atualizamos ao usar o aplicativo. Também importamos o componente NiceModal e todos os componentes individuais que criamos na fase anterior.
import NiceModal from "@ebay/nice-modal-react";
import Modal from "./components/Modal";
import Note from "./components/Note";
import Button from "./components/Button";
import "./styles.css"; // Para estilizar o componente, usaremos uma folha de estilo externa que criamos.

const noteList = [
  "My awesome third note>>>>>>>>>>>>>>>>>>>>>>>>>>>",
  "My awesome second note",
  "My awesome first note"
]; //Em seguida, criamos um array noteList que conterá as notas de amostra para o aplicativo. 

const getNoteIndex = (e) =>
  Array.from(e.target.parentElement.parentNode.children).indexOf(
    e.target.parentElement
  );
//Também criamos a função getNoteIndex para que possamos identificar o índice da nota específica em que o usuário clica na lista.

export default function App() {
  const [notes, setNotes] = useState(noteList); //Dentro da função App, primeiro definimos a lista de notas de amostra para a variável de notas. //Em seguida, criamos três funções diferentes para lidar com os cliques dos botões adicionar, editar e excluir.

  const showAddModal = () => {
    NiceModal.show(Modal, {
      title: "Add a new note",
      subtitle: "Enter the title",
      action: "Save",
      bgColor: "lime green"
    }).then((note) => {
      setNotes([note, ...notes]);
    });
  }; //Cada função abre o modal e passa nos adereços necessários que definimos no componente Modal. Depois que o botão salvar ou excluir é pressionado, a lista de notas é atualizada de acordo.

  const showEditModal = (e) => {
    NiceModal.show(Modal, {
      title: "Edit the note",
      subtitle: "Rename the Title",
      action: "Save",
      bgColor: "gold",
      note: notes[getNoteIndex(e)]
    }).then((note) => {
      const notesArr = [...notes];
      notesArr[getNoteIndex(e)] = note;
      setNotes(notesArr);
    });
  }; //Cada função abre o modal e passa nos adereços necessários que definimos no componente Modal. Depois que o botão salvar ou excluir é pressionado, a lista de notas é atualizada de acordo.

  const showDeleteModal = (e) => {
    NiceModal.show(Modal, {
      title: "Confirm Delete",
      subtitle: `The "${notes[getNoteIndex(e)]}" will be permanently removed`,
      action: "Delete",
      bgColor: "tomato",
      note: notes[getNoteIndex(e)]
    }).then(() => {
      const notesArr = [...notes];
      notesArr.splice(getNoteIndex(e), 1);
      setNotes(notesArr);
    });
  }; //Cada função abre o modal e passa nos adereços necessários que definimos no componente Modal. Depois que o botão salvar ou excluir é pressionado, a lista de notas é atualizada de acordo.


  //Por fim, renderizamos o título e o subtítulo do aplicativo, adicionamos o botão Adicionar com os adereços necessários e percorremos a variável de notas para exibir todas as notas.
  return (
    <div className="App">
      <h1>CRUD Notes</h1>
      <p style={{ marginBottom: "20px" }}>Using nice-modal-react</p>
      <Button
        name="Add"
        backgroundColor="lime green"
        onClick={() => {
          showAddModal();
        }}
      />
      <div>
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              note={note}
              onClickEdit={showEditModal}
              onClickDelete={showDeleteModal}
            />
          );
        })}
      </div>
    </div>
  );
}

//Tudo está organizado e não há uma única variável de estado para o modal em si, mas estamos lidando com três modais diferentes com sucesso.

//Neste ponto, você deve ter uma demonstração de trabalho. Vamos testar!

//Certifique-se de que seu aplicativo React ainda esteja em execução no terminal. Caso contrário, execute npm start novamente. Agora, abra o navegador e navegue até http: // localhost: 3000. Deverá ser apresentado a você um aplicativo de demonstração CRUD Notes totalmente funcional.