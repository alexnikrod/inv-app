import { productAPI } from "../api/api";

export const FETCH_PRODUCTS_SUCCESSFUL = "FETCH_PRODUCTS_SUCCESSFUL";
export const FETCH_DELETE_PRODUCTS_SUCCESSFUL =
  "FETCH_DELETE_PRODUCTS_SUCCESSFUL";
export const FETCH_PUT_PRODUCTS_SUCCESSFUL = "FETCH_PUT_PRODUCTS_SUCCESSFUL";
export const FETCH_EDIT_PRODUCTS_SUCCESSFUL = "FETCH_EDIT_PRODUCTS_SUCCESSFUL";

export const PRODUCT_MODAL_SHOW = "PRODUCT_MODAL_SHOW";
export const PRODUCT_MODAL_HIDE = "PRODUCT_MODAL_HIDE";

const productState = {
  /* products */
  products: [],
  productModalShow: false,
  // productName: "",
  // productPrice: "",
  // productDeposit: "",
  // productPayment: "",
  // productCategory: "",
  // productDescription: "",
  // products2: [],
  // editingProduct: 0,
};

const productsReducer = (state = productState, action) => {
  const productsCopy = [...state.products];

  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESSFUL:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_DELETE_PRODUCTS_SUCCESSFUL:
      // const idForDelete = action.payload.id;
      const updatedProducts = productsCopy.filter(
        (item) => item.id !== action.prodId
      );
      return {
        ...state,
        products: updatedProducts,
      };
    case FETCH_PUT_PRODUCTS_SUCCESSFUL:
      const newProducts = [...productsCopy, action.payload];
      return {
        ...state,
        products: newProducts,
      };
    case PRODUCT_MODAL_SHOW:
      return { ...state, productModalShow: true };
    case PRODUCT_MODAL_HIDE:
      return { ...state, productModalShow: false };
    default:
      return state;
  }
};

export function productModalShow(payload) {
  return { type: PRODUCT_MODAL_SHOW, payload };
}

export function productModalHide(payload) {
  return { type: PRODUCT_MODAL_HIDE, payload };
}

export function fetchProductsSuccessful(payload) {
  return { type: FETCH_PRODUCTS_SUCCESSFUL, payload };
}

export const fetchProducts = () => {
  return async (dispatch) => {
    let response = await productAPI.getProducts();
    dispatch(fetchProductsSuccessful(response));
  };
};

export function fetchDeleteProductsSuccessful(prodId) {
  // const { id } = data;
  return { type: FETCH_DELETE_PRODUCTS_SUCCESSFUL, prodId };
}

export const fetchDeleteProducts = (id) => {
  return async (dispatch) => {
    let response = await productAPI.deleteProduct(id);
    console.log(response);
    dispatch(fetchDeleteProductsSuccessful(id));
  };
};

export function fetchPutProductsSuccessful(data) {
  return {
    type: FETCH_PUT_PRODUCTS_SUCCESSFUL,
    payload: {
      id: data.id,
      name: data.name,
      price: data.price,
      category: data.category,
      deposit: data.deposit,
      description: data.description,
      payment: data.payment,
    },
  };
}

export const fetchPutProducts = ({
  id,
  name,
  price,
  category,
  deposit,
  description,
  payment,
}) => {
  return async (dispatch) => {
    let response = await productAPI.addProduct({
      id,
      name,
      price,
      category,
      deposit,
      description,
      payment,
    });
    dispatch(fetchPutProductsSuccessful(response));
  };
};

export default productsReducer;
