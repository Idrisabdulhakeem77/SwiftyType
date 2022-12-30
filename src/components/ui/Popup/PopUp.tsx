import Styled from "./PopUp.styles";

interface PopupProps {
  children: React.ReactNode;
  close: () => void;
  top?: boolean;
  maxWidth?: number;
}

const PopUp = ({ children, close, top, maxWidth }: PopupProps) => {
  return (
    <Styled.Wrapper onClick={close} $top={top}>
      <Styled.Popup onClick={(e) => e.stopPropagation()} $maxWidth={maxWidth}>
        {children}
      </Styled.Popup>
    </Styled.Wrapper>
  );
};

export default PopUp;
