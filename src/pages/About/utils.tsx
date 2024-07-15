import React from "react";
import { MinorTanNimbusHeader, StyledAblationTypo } from "./about.styles";

const TitleAndParagraph = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) => {
  return (
    <>
      <MinorTanNimbusHeader variant="h6">{title}</MinorTanNimbusHeader>
      <StyledAblationTypo>{paragraph}</StyledAblationTypo>
    </>
  );
};
export {TitleAndParagraph}