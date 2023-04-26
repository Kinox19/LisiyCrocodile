export const deleteItem = (id, size, color, index) => ({
  type: 'DELETE_ITEM',
  payload: { id, size, color, index },
});