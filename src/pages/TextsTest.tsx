import { Paragraph, SubTitle, Summary, Title } from "../components";
import * as D from "../data";

const paragraphs = D.makeArray(2).map(D.randomParagraphs).join("\n\n");
const summery = D.makeArray(3).map(D.randomSentence).join("\n");

const TextsTest = () => {
  return (
    <div>
      <Title>TextsTest</Title>
      <div>
        <Title className="text-blue-600">{D.randomTitleText()}</Title>
        <SubTitle className="text-blue-400">{D.randomSentence()}</SubTitle>
        <p className="text-xl italic text-center text-gray-900 text-bold">
          {D.randomName()}
        </p>
        <Paragraph numberOfLines={5}>{paragraphs}</Paragraph>
        <Summary className="text-center text-pink-400">{summery}</Summary>
        <p className="text-center text-pink-400">
          {D.randomDayMonthYear()} ({D.randomRelativeDate()})
        </p>
      </div>
    </div>
  );
};

export default TextsTest;
