import style from "./styles.module.css";

type ButtonColorType = "primary" | "secondary" | "secondary2";

interface Props {
  text: string;
  type: ButtonColorType;
  disabled?: boolean;
  onClick: () => void;
}

const getButtonStyle = (type: ButtonColorType) => {
  if (type === "primary") {
    return style.primary;
  }

  if (type === "secondary") {
    return style.secondary;
  }

  if (type === "secondary2") {
    return style.secondary2;
  }
};

export const Button = (props: Props) => {
  return (
    <button
      className={`${style.button} ${getButtonStyle(props.type)}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export function sum(a: number, b: number) {
  return a + b;
}
