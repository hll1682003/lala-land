declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}
declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.woff2" {
  const content: any;
  export default content;
}

// declare module "@mui/system" {
//   interface BreakpointOverrides {
//     // Your custom breakpoints
//     laptop: true;
//     tablet: true;
//     mobile: true;
//     desktop: true;
//     // Remove default breakpoints
//     xs: false;
//     sm: false;
//     md: false;
//     lg: false;
//     xl: false;
//   }
// }
