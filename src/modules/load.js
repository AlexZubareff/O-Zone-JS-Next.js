import getData from './getData'
import renderGoods from './renderGoods'

const load = () => {
  const counter = document.querySelector('.counter')
  getData().then(data => renderGoods(data))
  const cartItemsCount = JSON.parse(localStorage.getItem('cart'))
  if (cartItemsCount) {
    counter.textContent = cartItemsCount.length
  } else {
    counter.textContent = 0

  } console.log(counter)
}
export default load
