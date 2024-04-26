// Product
enum Types {
  Create = 'CREATE_PRODUCT',
  Delete = 'DELETE_PRODUCT',
  Add = 'ADD_PRODUCT',
}
type ProductType = {
  id: number;
  name: string;
  price: number;
};

type ProductPayload = {
  [Types.Create]: {
    id: number;
    name: string;
    price: number;
  };
  [Types.Delete]: {
    id: number;
  };
};

type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];
