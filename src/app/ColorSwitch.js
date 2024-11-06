export default function ColorSwitch({ onChangeColor }) {
  return (
    <button onClick={e =>{e.stopPropagation(); onChangeColor();}}>
      Cambiar color
    </button>
  );
}
