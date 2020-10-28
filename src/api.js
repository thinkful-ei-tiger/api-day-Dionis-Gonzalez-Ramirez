const baseURL = `https://thinkful-list-api.herokuapp.com/dionisggr`

function getItems() {
  return fetch(`${baseURL}/items`).catch(console.log('Something went wrong obtaining item.'))
}

function createItem(name) {
  let newItem = {name: name};
  return  fetch(`${baseURL}/items`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newItem)
  })
  .catch(console.log('Something went wrong creating the item.'))
}

function updateItem(id, updateData) {
  return  fetch(`${baseURL}/items/${id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updateData)
  })
  .catch(console.log('Something went wrong updating item.'))
}

function deleteItem(id, updateData) {
  return  fetch(`${baseURL}/items/${id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
  })
  .catch(console.log('Something went wrong deleting the item.'))
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
}