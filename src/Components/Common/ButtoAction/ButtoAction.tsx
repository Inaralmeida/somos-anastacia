import { Theme } from "../../../Styles/GlobalTheme";


interface IButtonActionProps {
  color: "pink" | "black";
  text: string;
  size?: string;
  onclick: (e?:any) => void;
}

const ButtoAction = ({
  color,
  text,
  size = "200px",
  onclick,
}: IButtonActionProps) => {
  const bg = color === "pink" ? Theme.primary : Theme.black;

  const style = {
    backgroundColor: bg,
    fontSize: "18px",
    width: size,
    height: "56px",
    borderRadius: "3.5px",
    fontWeight: "ligth",
    lineHeight: "20px",
    letterSpacing: " -0.01em",
    border: 'none',
    color: Theme.white
  };

  return (
    <button style={style} onClick={onclick}>
      {text}
    </button>
  );
};

export default ButtoAction;
