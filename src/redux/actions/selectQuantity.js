export const selectQuantity = (quantity) =>{
    return{
        type: 'SELECT_QUANTITY',
        payload:{quantity}
    };
};