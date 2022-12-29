import Styled from "./button.styles";
import { useNavigate } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
  text?: boolean;
  alt?: boolean;
  navigate?: string;
  href?: string;
}

const Button = () => {
  const;

  const navigate = useNavigate();

  return;
};

export default Button;
