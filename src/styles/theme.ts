export interface ThemeInterface{
  theme:{
    colors?:{
        black?: string,
        white?: string,       
        ciano?: string,       
        gray?: string,       
    }
  
    fonts: {
      family?: {
        default?: string,
        secondary?: string,
      },
      sizes?: {
        xsmall?: string,
        small?: string,
        medium?: string,
        large?: string,
        xlarge?: string,
        xxlarge?: string,
        huge?: string,
        xhuge?: string,
      },
    },
    media?: {
      lteMedium?: string,
    },
    spacings?: {
      xsmall?: string,
      small?: string,
      medium?: string,
      large?: string,
      xlarge?: string,
      xxlarge?: string,
      huge?: string,
      xhuge?: string,
    },
  }
}  


      
export const theme = {
    colors:{
        black: "#0a0a0a",
        white: "#ffffff",       
        ciano: "#03b1fc",       
        gray: "#595859",       
    },
    fonts: {
        family: {
          default: "'Roboto', sans-serif",
          secondary: "'Montserrat', sans-serif",
        },
        sizes: {
          xsmall: "1.3rem",
          small: "1.6rem",
          medium: "2.4rem",
          large: "3.2rem",
          xlarge: "4.0rem",
          xxlarge: "4.8rem",
          huge: "5.6rem",
          xhuge: "6.4rem",
        },
      },
      media: {
        lteMedium: "(max-width: 768px)",
      },
      spacings: {
        xsmall: "1rem",
        small: "1.6rem",
        medium: "2.4rem",
        large: "3.2rem",
        xlarge: "4.0rem",
        xxlarge: "4.8rem",
        huge: "5.6rem",
        xhuge: "11rem",
      },
    }