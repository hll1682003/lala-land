import React from "react";
import crown from "@assets/crown-single.svg";
import { StyledTanNimbusTypo } from "./about.styles";
import { Box } from "@mui/material";
import { TitleAndParagraph } from "./utils";

const paragraphs: Array<{ title: string; p: string }> = [
  {
    title: "Brand Building and Promotion:",
    p: "SELLING BRANDED CLOTHING ENHANCES BRAND AWARENESS AND RECOGNITION CLOTHES FEATURING THE STUDIO'S LOGO, SLOGAN, OR UNIQUE DESIGNS CAN SERVE AS PROMOTIONAL ITEMS.",
  },
  {
    title: "Diversified Revenue Stream:",
    p: "SELLING CLOTHING PROVIDES AN ADDITIONAL REVENUE SOURCE, BOOSTING YOUR STUDIO'S INCOME. DEDICATED MEMBERS MAY BUY BRANDED APPAREL TO SUPPORT YOUR STUDIO AND SHOWCASE THEIR IDENTITY.",
  },
  {
    title: "Enhanced Member Engagement and Loyalty:",
    // The font has some issue, using chinese character 一 （壹）as a dash for now
    p: "PROVIDING BRANDED APPAREL CAN FOSTER A SENSE OF BELONGING AND INVOLVEMENT AMONG MEMBERS. WEARING YOUR STUDIO一BRANDED CLOTHING DEMONSTRATES SUPPORT AND IDENTITY, INCREASING MEMBER LOYALTY.",
  },
  {
    title: "Promotes Group Cohesion:",
    p: "STUDIO CLOTHING CAN SERVE AS A UNIFYING FACTOR AMONG MEMBERS. WEARING UNIFORMS OR BRANDED ATTIRE DURING GROUP ACTIVITIES OR COMPETITIONS ENHANCES TEAM SPIRIT AND COOPERATION.",
  },
  {
    title: "Elevates Brand Image and Professionalism:",
    p: "DESIGNING HIGH-QUALITY, STYLISH CLOTHING CAN ELEVATE THE STUDIO'S BRAND IMAGE AND PROFESSIONALISM. VISUAL REPRESENTATION THROUGH APPAREL ENHANCES MEMBER TRUST AND POSITIVE PERCEPTION.",
  },
];
const About: React.FC = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& *": { color: theme.palette.secondary.main },
          margin: "2rem",
          "&:after": {
            content: "''",
            background: `url('${crown}') no-repeat`,
            backgroundSize: "contain",
            width: "30px",
            height: "30px",
            display: "flex",
            margin: "5rem 0 2rem 0",
          },
        })}
      >
        <StyledTanNimbusTypo
          variant="h3"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "3rem 0 2rem 0",
            textAlign: "center",
            "&:after": {
              content: "''",
              background: `url('${crown}') no-repeat`,
              backgroundSize: "contain",
              width: "30px",
              height: "30px",
              display: "flex",
              margin: "5rem 0 2rem 0",
            },
          }}
        >
          Why You Need LalaLand?
        </StyledTanNimbusTypo>
        {paragraphs.map((paragraph) => (
          <TitleAndParagraph
            title={paragraph.title}
            paragraph={paragraph.p}
            key={paragraph.title}
          />
        ))}
      </Box>
    </>
  );
};
export default About;
