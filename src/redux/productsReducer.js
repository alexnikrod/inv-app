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
  productName: "",
  productPrice: "",
  productDeposit: "",
  productPayment: "",
  productCategory: "",
  productDescription: "",
  products2: [],
  productModalShow: false,
  editingProduct: 0,
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
    case PRODUCT_MODAL_SHOW:
      return { ...state, productModalShow: true };
    case PRODUCT_MODAL_HIDE:
      return { ...state, productModalShow: false };
    default:
      return state;
  }
};

export function actProductModalShow(payload) {
  return { type: PRODUCT_MODAL_SHOW, payload };
}

export function actProductModalHide(payload) {
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

export default productsReducer;
