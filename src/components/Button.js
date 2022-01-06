import "./Button.css";

const Button = ({ name, backgroundColor, onClick }) => {
  return (
    <button className="button" onClick={onClick} style={{ backgroundColor }}>
      {name}
    </button>
  );
};

export default Button; 

//Primeiro, importamos a folha de estilo para estilizar o componente. A seguir, criamos um componente de botão simples que receberá as propriedades name, backgroundColor e onClick após ser importado e usado no App.js.