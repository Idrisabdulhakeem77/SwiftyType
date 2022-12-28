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
      <Styled.Title>
         
      </Styled.Title>
    </Styled.Group>
  );
};

export default StatGroup;
