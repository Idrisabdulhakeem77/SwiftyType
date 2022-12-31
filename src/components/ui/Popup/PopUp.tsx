import Styled from "./PopUp.styles";

interface PopupProps {
  children: React.ReactNode;
  close: () => void;
  top?: boolean;
  maxWidth?: number;
}

const PopUp = ({ children, close, top, maxWidth }: PopupProps) => {
  return (
    <Styled.Wrapper
      onClick={close}
      $top={top}
      style={{ border: "solid 3px red" }}
    >
      <Styled.Popup
        onClick={(e) => e.stopPropagation()}
        $maxWidth={maxWidth}
        style={{ border: "solid 2px red" }}
      >
        {children}
      </Styled.Popup>
    </Styled.Wrapper>
  );
};

export default PopUp;
