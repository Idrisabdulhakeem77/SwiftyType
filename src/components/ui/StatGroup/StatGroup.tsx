import Styled from "./StatGroup.styles";

interface StateGroupProps {
  title: {
    text: string | number;
    size?: number;
  };
  values: {
    text: string | number;
    size?: number;
  }[];
}

const StatGroup = ({ title, values }: StateGroupProps) => {
  return (
    <Styled.Group>
      <Styled.Title $size={title.size}>{title.text}</Styled.Title>

      {values.map(({ text, size }) => (
        <Styled.Value $size={size} key={text}>
          {text}
        </Styled.Value>
      ))}
    </Styled.Group>
  );
};

export default StatGroup;
