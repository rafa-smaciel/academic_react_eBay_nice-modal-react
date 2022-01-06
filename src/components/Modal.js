import { useState } from "react"; //Primeiro, importamos useState para rastrear o estado da entrada para adicionar e editar ações e o componente NiceModal que será o wrapper de nosso modal. Também importamos a folha de estilo externa e o componente Botão para a ação cancelar para fechar o modal.
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import "./Modal.css";
import Button from "./Button";

const Modal = NiceModal.create( //Usamos NiceModal.create como um wrapper modal. Você pode pensar nisso como criar um componente básico e envolvê-lo em uma função de ordem superior. Ele receberá o título, o subtítulo, a ação, o bgColor e os adereços de nota assim que importarmos o componente Modal para o App.js.
  ({ title, subtitle, action, bgColor, note = "" }) => {
    const [input, setInput] = useState(note);
    const modal = useModal(); //Os modais de adição e edição terão um campo de entrada onde os usuários poderão adicionar o título da nota do zero ou editar um título de nota existente.
    return (
      <div className="background">
        <div className="modal">
          <h1>{title}</h1>
          <p className="subtitle">{subtitle}</p>
          {action === "Save" && (
            <input
              className="input"
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          )}
          <div className="actions">
            <Button
              name={action}
              backgroundColor={bgColor}
              onClick={() => {
                if (action === "Save") {
                  if (input) {
                    modal.resolve(input);
                    modal.remove();
                    console.log("Note saved");
                  } else {
                    console.log("Note is empty"); //O estado da entrada será armazenado na variável de estado e passado para uso em App.js. Eu também adicionei uma validação simples para que os usuários não possam adicionar notas vazias.
                  }
                } else {
                  modal.resolve();
                  modal.remove();
                  console.log("Note removed");
                }
              }}
            />
            <Button // Os modais de adição e edição incluirão a opção de salvar, enquanto o modal de exclusão terá um botão de exclusão. Cada modal terá um botão cancelar próximo ao salvar / excluir para fechar o modal.
              name="Cancel"
              backgroundColor="silver"
              onClick={() => {
                modal.remove();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default Modal;