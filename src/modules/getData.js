const getData = () => {
  return fetch('https://ozon-db-3d4b2-default-rtdb.firebaseio.com/goods.json').then(res => res.json())
}

export default getData
