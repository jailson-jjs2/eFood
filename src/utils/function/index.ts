export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
