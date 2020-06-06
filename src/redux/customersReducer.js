import { customerAPI } from '../api/api'

export const FETCH_CUSTOMERS_SUCCESSFUL = 'FETCH_CUSTOMERS_SUCCESSFUL';
export const FETCH_DELETE_CUSTOMERS_SUCCESSFUL = 'FETCH_DELETE_CUSTOMERS_SUCCESSFUL';
export const FETCH_PUT_CUSTOMERS_SUCCESSFUL = 'FETCH_PUT_CUSTOMERS_SUCCESSFUL';
export const FETCH_EDIT_CUSTOMERS_SUCCESSFUL = 'FETCH_EDIT_CUSTOMERS_SUCCESSFUL';

const customerState = {
  /* customers */
  customers: [],
  customerName: '',
  customerPass: '',
  customerAddress: '',
  customerPhone: '',
  customerModalShow: false,
  editingCustomer: 0,
  customerToEdit: {},
  customerArr: []
};

const customersReducer = (state = customerState, action) => {
  const customersCopy = [...state.customers];

  switch (action.type) {
    case FETCH_CUSTOMERS_SUCCESSFUL:
      return {
        ...state,
        customers: action.payload
      };
      case FETCH_DELETE_CUSTOMERS_SUCCESSFUL:
        // const idForDelete = action.payload.id;
        const updatedCustomers = customersCopy.filter(item => item.id !== action.custId);
        return {
          ...state,
          customers: updatedCustomers
        };
    default:
      return state;
  }
}

export function fetchCustomersSuccessful(payload) {
  return { type: FETCH_CUSTOMERS_SUCCESSFUL, payload}
}

export const fetchCustomers = () => {
  return async (dispatch) => {
    let response = await customerAPI.getCustomers();
    dispatch(fetchCustomersSuccessful(response))
  };
};

export function fetchdeleteCustomerSuccessful(custId) {
  // const {id} = data;
  return { type: FETCH_DELETE_CUSTOMERS_SUCCESSFUL, custId}
}

export const fetchdeleteCustomer = (id) => {
  return async (dispatch) => {
    let response = await customerAPI.deleteCustomer(id);
    console.log(response)
    dispatch(fetchdeleteCustomerSuccessful(id))
  };
};

export default customersReducer;
