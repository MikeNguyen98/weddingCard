export const productReducer = (state: ProductType[], action: ProductActions) => {
    switch (action.type) {
      case Types.Create:
        return [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
          }
        ]
      case Types.Delete:
        return [
          ...state.filter(product => product.id !== action.payload.id),
        ]
      default:
        return state;
    }
  }