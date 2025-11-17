import getData from './getData'
import renderGoods from './renderGoods'
import { priceFilter } from './filters'

const priceSearch = () => {
  const minInput = document.getElementById('min')
  const maxInput = document.getElementById('max')
  let minValue = 0
  let maxValue = 0

  minInput.addEventListener('input', event => {
    minValue = +event.target.value
    getData().then(data => {
      renderGoods(priceFilter(data, minValue, maxValue))
    })
  })

  maxInput.addEventListener('input', event => {
    maxValue = +event.target.value
    getData().then(data => {
      renderGoods(priceFilter(data, minValue, maxValue))
    })
  })
}
export default priceSearch
