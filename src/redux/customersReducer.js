import { customerAPI } from "../api/api";

export const FETCH_CUSTOMERS_SUCCESSFUL = "FETCH_CUSTOMERS_SUCCESSFUL";
export const FETCH_DELETE_CUSTOMERS_SUCCESSFUL =
  "FETCH_DELETE_CUSTOMERS_SUCCESSFUL";
export const FETCH_PUT_CUSTOMERS_SUCCESSFUL = "FETCH_PUT_CUSTOMERS_SUCCESSFUL";
export const FETCH_EDIT_CUSTOMERS_SUCCESSFUL =
  "FETCH_EDIT_CUSTOMERS_SUCCESSFUL";

export const CUSTOMER_MODAL_SHOW = "CUSTOMER_MODAL_SHOW";
export const CUSTOMER_MODAL_HIDE = "CUSTOMER_MODAL_HIDE";

const customerState = {
  /* customers */
  customers: [],
  customerModalShow: false,
  // customerName: "",
  // customerPass: "",
  // customerAddress: "",
  // customerPhone: "",
  // editingCustomer: 0,
  customerToEdit: {},
  // customerArr: [],
};

const customersReducer = (state = customerState, action) => {
  const customersCopy = [...state.customers];

  switch (action.type) {
    case FETCH_CUSTOMERS_SUCCESSFUL:
      return {
        ...state,
        customers: action.payload,
      };
    case FETCH_DELETE_CUSTOMERS_SUCCESSFUL:
      const updatedCustomers = customersCopy.filter(
        (item) => item.id !== action.custId
      );
      return {
        ...state,
        customers: updatedCustomers,
      };
    case CUSTOMER_MODAL_SHOW:
      return { ...state, customerModalShow: true };
    case CUSTOMER_MODAL_HIDE:
      return {
        ...state,
        customerModalShow: false,
        // customerName: "",
        // customerPass: "",
        // customerAddress: "",
        // customerPhone: "",
        // customerToEdit: {},
        // editingCustomer: 0,
      };
    case FETCH_PUT_CUSTOMERS_SUCCESSFUL:
      const newCustomers = [...customersCopy, action.payload];
      return {
        ...state,
        customers: newCustomers,
      };
    case FETCH_EDIT_CUSTOMERS_SUCCESSFUL:
      console.log("case: ", action.payload)
      // customerToEdit.name = action.payload.name;
      // customerToEdit.pass = action.payload.pass;
      // customerToEdit.address = action.payload.address;
      // customerToEdit.phone = action.payload.phone;
      return {
        ...state,
        customers: customersCopy,
        customerToEdit: action.payload
        // customerModalShow: false,
        // customerName: "",
        // customerPass: "",
        // customerAddress: "",
        // customerPhone: "",
        // editingCustomer: 0,
      };

    default:
      return state;
  }
};

export function customerModalShow(payload) {
  return { type: CUSTOMER_MODAL_SHOW, payload };
}

export function customerModalHide(payload) {
  return { type: CUSTOMER_MODAL_HIDE, payload };
}

export function fetchCustomersSuccessful(payload) {
  return { type: FETCH_CUSTOMERS_SUCCESSFUL, payload };
}

export const fetchCustomers = () => {
  return async (dispatch) => {
    let response = await customerAPI.getCustomers();
    dispatch(fetchCustomersSuccessful(response));
  };
};

export function fetchDeleteCustomerSuccessful(custId) {
  return { type: FETCH_DELETE_CUSTOMERS_SUCCESSFUL, custId };
}

export const fetchDeleteCustomer = (id) => {
  return async (dispatch) => {
    let response = await customerAPI.deleteCustomer(id);
    console.log(response);
    dispatch(fetchDeleteCustomerSuccessful(id));
  };
};

export function fetchPutCustomersSuccessful(data) {
  return {
    type: FETCH_PUT_CUSTOMERS_SUCCESSFUL,
    payload: {
      id: data.id,
      name: data.name,
      pass: data.pass,
      address: data.address,
      phone: data.phone,
    },
  };
}

export const fetchPutCustomers = ({ id, name, pass, address, phone }) => {
  return async (dispatch) => {
    let response = await customerAPI.addCustomer({
      id,
      name,
      pass,
      address,
      phone,
    });
    dispatch(fetchPutCustomersSuccessful(response));
  };
};

export function fetchEditCustomersSuccessful(data) {
  return { type: FETCH_EDIT_CUSTOMERS_SUCCESSFUL, payload: data };
}

export const fetchEditCustomers = ({ id, name, pass, address, phone }) => {
  console.log("ac: ")
  // const {name, pass, address, phone} = payload;
  return async (dispatch) => {
    let response = await customerAPI.editCustomer({
      id,
      name,
      pass,
      address,
      phone,
    });
    console.log("before dispatch: ", response)
    dispatch(fetchEditCustomersSuccessful(response));
  };
};

export default customersReducer;
