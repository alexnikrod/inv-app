import { customerAPI } from "../api/api";

export const FETCH_CUSTOMERS_SUCCESSFUL = "FETCH_CUSTOMERS_SUCCESSFUL";
export const FETCH_DELETE_CUSTOMERS_SUCCESSFUL =
  "FETCH_DELETE_CUSTOMERS_SUCCESSFUL";
export const FETCH_PUT_CUSTOMERS_SUCCESSFUL = "FETCH_PUT_CUSTOMERS_SUCCESSFUL";
export const FETCH_EDIT_CUSTOMERS_SUCCESSFUL =
  "FETCH_EDIT_CUSTOMERS_SUCCESSFUL";

const customerState = {
  customers: [],
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
    case FETCH_PUT_CUSTOMERS_SUCCESSFUL:
      const newCustomers = [...customersCopy, action.payload];
      return {
        ...state,
        customers: newCustomers,
      };
    case FETCH_EDIT_CUSTOMERS_SUCCESSFUL:
      return {
        ...state,
        customers: state.customers.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};

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
  return async (dispatch) => {
    let response = await customerAPI.editCustomer({
      id,
      name,
      pass,
      address,
      phone,
    });
    dispatch(fetchEditCustomersSuccessful(response));
  };
};

export default customersReducer;
