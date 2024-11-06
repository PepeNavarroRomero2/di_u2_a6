export default function ColorSwitch({ onChangeColor }) {
  const handleClick = () => {
    if (typeof onChangeColor === "function") {
      onChangeColor();
    }
  };

  return (
    <button onClick={handleClick}>
      Cambiar color
    </button>
  );
}
