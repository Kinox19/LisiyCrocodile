export const deleteItem = (id, size, color) => ({
  type: 'DELETE_ITEM',
  payload: { id, size, color },
});