import { productReducer } from './Product/reducers';

const mainReducer = ({ products }: InitialStateType, action: any) => ({
  products: productReducer(products, action),
});

export default mainReducer;
