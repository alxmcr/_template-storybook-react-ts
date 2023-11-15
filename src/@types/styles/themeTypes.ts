export type StylesButtonByState = {
  background: string;
  text: string;
  borderColor: string;
  opacity?: number;
};

export type StylesButtonStates = {
  default: StylesButtonByState;
  hover: StylesButtonByState;
  active: StylesButtonByState;
  disabled: StylesButtonByState;
};

export type StylesButtonGradientByState = {
  text: string;
  gradientColors: {
    gradientStart: string;
    gradientEnd: string;
  };
  opacity?: number;
};

export type StylesButtonGradientStates = {
  default: StylesButtonGradientByState;
  hover: StylesButtonGradientByState;
  active: StylesButtonGradientByState;
  disabled: StylesButtonGradientByState;
};

type ButtonTypesByStyle = {
  solid: StylesButtonStates;
  outline: StylesButtonStates;
  gradient: StylesButtonGradientStates;
};

export type AppStyledTheme = {
  name: 'dark' | 'light';
  background: string;
  text: string;
  button: ButtonTypesByStyle;
};
