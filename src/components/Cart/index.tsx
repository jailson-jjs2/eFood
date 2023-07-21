import { useState } from 'react'
import close from '../../assets/icon/lixeira.svg'
import image from '../../assets/img/pizza.png'
import {
  Aside,
  ButtonCard,
  Container,
  Content,
  Figure,
  FinalOrder,
  Order
} from './styles'

const Cart = () => {
  const [active, setAcitve] = useState(false)
  function isActive() {
    if (active) {
      setAcitve(false)
    } else {
      setAcitve(true)
    }
  }
  return (
    <Container onClick={isActive}>
      <Aside className={active ? 'aside--isActive' : ''}>
        <ul>
          <li>
            <Order>
              <Figure>
                <img src={image} alt="awdwa" />
              </Figure>
              <Content>
                <h2>Pizza MArguerita</h2>
                <p>R$ 60.90</p>
              </Content>
              <ButtonCard type="button" title="Deletar pedido">
                <img src={close} alt="Deletar pedido" />
              </ButtonCard>
            </Order>
          </li>
          <li>
            <Order>
              <Figure>
                <img src={image} alt="awdwa" />
              </Figure>
              <Content>
                <h2>Pizza MArguerita</h2>
                <p>R$ 60.90</p>
              </Content>
              <ButtonCard type="button" title="Deletar pedido">
                <img src={close} alt="Deletar pedido" />
              </ButtonCard>
            </Order>
          </li>
        </ul>
        <FinalOrder>
          <div>
            <p>Valor Total</p>
            <p>R$ 182.70</p>
          </div>
          <button>Continuar com a entrega</button>
        </FinalOrder>
      </Aside>
    </Container>
  )
}

export default Cart
