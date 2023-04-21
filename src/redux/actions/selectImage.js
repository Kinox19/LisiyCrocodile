export const selectImage = (colorImage) => {
    return {
        type: 'SELECT_IMAGE',
        payload: colorImage
    };
};