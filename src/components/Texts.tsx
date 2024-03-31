import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { makeClassName } from "./textUtil";

type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

type TitleProps = TextProps & {
  numberOfLines?: number;
};

export const Title: FC<TitleProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    "font-bold text-5xl text-center whitespace-pre-line",
    _className,
    numberOfLines
  );
  return <p {...props} className={className} />;
};

type SubTitleProps = TitleProps & {};

export const SubTitle: FC<SubTitleProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    "font-semibold text-3xl text-center whitespace-pre-line",
    _className,
    numberOfLines
  );
  return <p {...props} className={className} />;
};

type SummaryProps = SubTitleProps & {};

export const Summary: FC<SummaryProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    "text-sm whitespace-pre-line",
    _className,
    numberOfLines
  );
  return <p {...props} className={className} />;
};

type ParagraphProps = SummaryProps & {};

export const Paragraph: FC<ParagraphProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    "font-normal text-base whitespace-pre-line",
    _className,
    numberOfLines
  );
  return <p {...props} className={className} />;
};
