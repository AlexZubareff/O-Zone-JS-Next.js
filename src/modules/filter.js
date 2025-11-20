import getData from './getData'
import renderGoods from './renderGoods'
import { priceFilter, hotSaleFilter } from './filters'

const filter = () => {
  const minInput = document.getElementById('min')
  const maxInput = document.getElementById('max')
  const checkboxInput = document.getElementById('discount-checkbox')
  const checkboxSpan = document.querySelector('.filter-check_checkmark')

  let minValue = 0
  let maxValue = 0

  minInput.addEventListener('input', event => {
    minValue = +event.target.value
    getData().then(data => {
      renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minValue, maxValue))
    })
  })

  maxInput.addEventListener('input', event => {
    maxValue = +event.target.value
    getData().then(data => {
      renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minValue, maxValue))
    })
  })

  checkboxInput.addEventListener('change', () => {
    console.log('change')
    console.log(checkboxInput.checked)
    if (checkboxInput.checked) {
      checkboxSpan.classList.add('checked')
    } else {
      checkboxSpan.classList.remove('checked')
    }
    getData().then(data => {
      renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minValue, maxValue))
    })
  })
}
export default filter
