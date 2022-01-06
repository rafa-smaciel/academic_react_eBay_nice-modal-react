import ReactDOM from "react-dom";
import NiceModal from "@ebay/nice-modal-react";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <NiceModal.Provider>
    <App />
  </NiceModal.Provider>,
  rootElement
);
//Instalar o pacote nice-modal-react em si é tão simples quanto executar npm install @ ebay / nice-modal-react. Ele adicionará um pacote pequeno (~ 2 KB após gzip) e livre de dependências aos seus módulos de nó.

//Para usá-lo em todo o aplicativo, vamos configurar um provedor separado que usará o React Context para controlar o estado globalmente.

//Para fazer isso, abra o arquivo raiz index.js, importe o componente NiceModal e envolva-o em torno do componente App:

//Neste ponto, configuramos o projeto para funcionar com nice-modal-react, para que possamos começar a construir componentes individuais para o aplicativo.