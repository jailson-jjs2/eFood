import { createGlobalStyle } from 'styled-components'

export const Colors = {
  body: '#FFF8F2',
  textPrimary: '#E66767',
  textSecondary: '#FFFFFF',
  footerBackground: '#FFEBD9',
  backgroundTag: '#E66767',
  TagborderColor: '#E66767',
  backgroundButton: '#E66767',
  ProductCardBackground: '#E66767',
  backgroundButtonProduct: '#FFEBD9',
  textCardKnowMore: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style:none;
    text-decoration: none;
  }

  body {
    background-color: ${Colors.body};
    color: ${Colors.textPrimary};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
