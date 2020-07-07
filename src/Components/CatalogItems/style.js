import styled from 'styled-components'

export const ProductName = styled.div `
  width: 100%;
  min-height: 30px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
`

export const ProductPrice = styled.div `
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  color: #F06449;
`

export const ProductPayment = styled.div `
  width: 100%;
  text-align: center;
  font-size: .9rem;
  margin-bottom: 1.5rem;
`

export const ProductPaymentStrong = styled.strong `
  color: #F06449;
`

export const ButtonBuy = styled.button `
  background-image: linear-gradient(to top, #F06449, #f7afa1);
  letter-spacing: 1px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .333);
  padding: .375rem .75rem .5rem;
  display: block;
  width: 100%;
  text-align: center;
  text-shadow: 2px 3px rgba(0, 0, 0, .222);
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  vertical-align: middle;
  color: white;
  border: none;
  border-radius: .25rem;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(to bottom, #F06449, #f7afa1);
  }

  div {
    font-size: 1.3rem;
    line-height: 40px;
    display: inline-block;
    margin-left: 5px;
  }
`