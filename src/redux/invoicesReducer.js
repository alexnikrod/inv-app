import { invoiceAPI } from "../api/api";
// import axios from 'axios';

const FETCH_INVOICES_SUCCESSFUL = "FETCH_INVOICES_SUCCESSFUL";
const FETCH_DELETE_INVOICES_SUCCESSFUL = "FETCH_DELETE_INVOICES_SUCCESSFUL";
const FETCH_PUT_INVOICES_SUCCESSFUL = "FETCH_PUT_INVOICES_SUCCESSFUL";
const FETCH_EDIT_INVOICES_SUCCESSFUL = "FETCH_EDIT_INVOICES_SUCCESSFUL";

const invoiceState = {
  /* invoices */
  invoices: [],
  isAddingInvoice: false,
  newInvoice: {},
  newCustomer: "",
  newTotal: 0,
  newSubTotal: 0,
  newDiscount: 0,
  editingInvoice: 0,
  idForDetails: 0,
  invoiceToEdit: {},
  currentInvoiceId: 1,
  invoiceModalShow: false,
  invoiceMenu: false,
};

const invoicesReducer = (state = invoiceState, action) => {
  // const invoiceCopy = [...state.invoices];
  // const { id = 0 } = action.payload ? action.payload : {};

  switch (action.type) {
    case FETCH_INVOICES_SUCCESSFUL:
      return {
        ...state,
        invoices: action.payload,
      };
    case FETCH_DELETE_INVOICES_SUCCESSFUL:
      // const updatedInvoices = invoiceCopy.filter((item) => item.id !== action.id);
      return {
        ...state,
        invoices: state.invoices.filter(p => p.id !== action.invId),
      };
    default:
      return state;
  }
};

export function fetchInvoicesSuccessful(payload) {
  return { type: FETCH_INVOICES_SUCCESSFUL, payload };
}

export const fetchInvoices = () => {
  return async (dispatch) => {
    let response = await invoiceAPI.getInvoices();
    dispatch(fetchInvoicesSuccessful(response));
  };
};

export const fetchdeleteInvoiceSuccessful = (invId) => {
  // const { id } = data;
  return { type: FETCH_DELETE_INVOICES_SUCCESSFUL, invId };
}

export const fetchdeleteInvoice = (id) => {
  return async (dispatch) => {
    let response = await invoiceAPI.deleteInvoice(id);
    console.log(response)
    dispatch(fetchdeleteInvoiceSuccessful(id));
  };
};

export default invoicesReducer;
