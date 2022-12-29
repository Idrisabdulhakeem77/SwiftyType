import { StatGroup } from "../ui";
import Styled from "./testResults.styles";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { accuracy as acc, kogasa } from "../../utils/index";

const TestResults = () => {
  const { mode, time, words, language, showDecimalPlaces } = useAppSelector(
    ({ config }) => config
  );

  const {
    testWords,
    raw,
    wpm,
    characterCount,
    errorCount,
    stats,
    elapsedTime,
  } = useAppSelector(({ type }) => type);

  const intWpm = Math.floor(wpm);
  const intRaw = Math.floor(raw);
  const accuracy = acc(errorCount, characterCount);
  const intAccuracy = Math.floor(accuracy);

  const consistency = kogasa(stats.raw);
  const intConsistency = Math.floor(consistency);

  const characters = "";

  return (
    <Styled.TestResults>
      <Styled.Stats>
        <StatGroup
          title={{ text: "wpm", size: 32 }}
          values={[
            {
              text: `${showDecimalPlaces === "on" ? +wpm.toFixed(2) : intWpm}`,
              size: 64,
            },
          ]}
        />
        <StatGroup
          title={{ text: "acc", size: 32 }}
          values={[
            {
              text: `${
                showDecimalPlaces === "on" ? +accuracy.toFixed(2) : intAccuracy
              }%`,
              size: 64,
            },
          ]}
        />
      </Styled.Stats>

      <Styled.Wrapper></Styled.Wrapper>
    </Styled.TestResults>
  );
};

export default TestResults;
