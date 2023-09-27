// styledComponents插件的 ThemeProvider的方式
const theme = {
  color: {
    primary: '#ff385c',
    secondary: '#00848a',
  },
  textColor: {
    primary: '#484848',
    secondary: '#222222',
  },
  mixin: {
    boxShadow: `transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 5px 7px #ccc;
    }`,
  },
}

export default theme
