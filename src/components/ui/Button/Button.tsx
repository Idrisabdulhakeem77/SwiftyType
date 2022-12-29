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

const Button = ({
  children,
  onClick,
  active,
  text,
  alt,
  navigate: link,
  href,
  ...rest
}: ButtonProps) => {
  const StyledButton = text
    ? Styled.TextButton
    : alt
    ? Styled.AltButton
    : Styled.Button;

  const navigate = useNavigate();

  return (
    <StyledButton
      as={href ? "a" : "button"}
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);

        // if to is present navigate to to  💁
        link && navigate(link);
      }}
      $active={active}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
