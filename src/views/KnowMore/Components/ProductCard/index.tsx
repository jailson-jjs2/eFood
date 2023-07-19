import { useState } from 'react'
import { ProductCardContainer } from './styles'
import * as styles from './styles'
import Menu from '../../../../model/Menu/Menu'
import close from '../../../../assets/icon/fechar.png'
export default function ProductCard({
  descricao,
  foto,
  nome,
  porcao,
  preco
}: Menu) {
  const [modal, setModal] = useState(false)
  function seeModal() {
    if (modal) {
      setModal(false)
    } else {
      setModal(true)
    }
  }

  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 195) + '...'
    }

    return description
  }

  return (
    <>
      <ProductCardContainer>
        <img src={foto} alt={nome} />
        <h2>{nome}</h2>
        <p>{getDescription(descricao)}</p>
        <button type="button" onClick={seeModal}>
          Adicionar ao carrinho
        </button>
      </ProductCardContainer>
      {modal && (
        <styles.Modal className={modal ? '' : 'itIsNotVisible'}>
          <styles.Card className="container">
            <styles.DivImage>
              <img src={foto} alt={nome} />
            </styles.DivImage>
            <div>
              <styles.Title>{nome}</styles.Title>
              <styles.Paragraph>
                {descricao}
                <br />
                <br />
                <span>Serve: de {porcao}</span>
              </styles.Paragraph>
              <styles.ToAdd title="Adicionar ao carrinho" type="button">
                Adicionar ao carrinho - R$ {preco}
              </styles.ToAdd>
              <styles.Close title="fechar" type="button" onClick={seeModal}>
                <img src={close} alt="Fechar" />
              </styles.Close>
            </div>
          </styles.Card>
          <div className="overlay" onClick={seeModal}></div>
        </styles.Modal>
      )}
    </>
  )
}
