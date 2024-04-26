// Define the types for your state
type State = {
  // Define your state properties here
  exampleProperty: string;
};

type InitialStateType = {
  products: ProductType[];
};
type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        }
  };