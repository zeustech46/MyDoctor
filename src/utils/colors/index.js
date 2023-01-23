const mainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  dark1: '#112340',
  dark2: '#495A75',
  grey1: '#7d8797',
  grey2: '#E9E9E9',
  grey3: '#EDEEF0',
  blue: '#0066CB',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue,
  white: 'white',
  black: 'black',
  disable: mainColors.grey3,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    MenuInActive: mainColors.dark2,
    MenuActive: mainColors.green1,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
  },
  border: mainColors.grey2,
  cardLight: mainColors.green2,
};
