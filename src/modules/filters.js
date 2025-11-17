export const searchFilter = (goods, value) => {
  console.log(goods)
  return goods.filter(goodItem => {
    return goodItem.title.toLowerCase().includes(value.toLowerCase())
  })
}

export const categoryFilter = (goods, value) => {
  console.log(goods)
  return goods.filter(goodItem => {
    return goodItem.category === value
  })
}

export const priceFilter = (goods, min, max) => {
  return goods.filter(goodItem => {
    if (min && max === 0) {
      return goodItem.price >= min
    }
    if (min && max) {
      return goodItem.price >= min && goodItem.price <= max
    }
    if (min === 0 && max) {
      return goodItem.price <= max
    }
    if (min === 0 && max === 0) {
      return goodItem
    }
  })
}
