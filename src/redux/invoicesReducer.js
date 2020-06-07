import { invoiceAPI } from "../api/api";

const FETCH_INVOICES_SUCCESSFUL = "FETCH_INVOICES_SUCCESSFUL";
const FETCH_DELETE_INVOICES_SUCCESSFUL = "FETCH_DELETE_INVOICES_SUCCESSFUL";
const FETCH_PUT_INVOICES_SUCCESSFUL = "FETCH_PUT_INVOICES_SUCCESSFUL";
const FETCH_EDIT_INVOICES_SUCCESSFUL = "FETCH_EDIT_INVOICES_SUCCESSFUL";

export const INVOICE_MODAL_SHOW = "INVOICE_MODAL_SHOW";
export const INVOICE_MODAL_HIDE = "INVOICE_MODAL_HIDE";

const invoiceState = {
  /* invoices */
  invoices: [],
  invoiceModalShow: false,

  // isAddingInvoice: false,
  // newInvoice: {},
  // newCustomer: "",
  // newTotal: 0,
  // newSubTotal: 0,
  // newDiscount: 0,
  // editingInvoice: 0,
  // idForDetails: 0,
  // invoiceToEdit: {},
  // currentInvoiceId: 1,
  // invoiceMenu: false,
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
        invoices: state.invoices.filter((p) => p.id !== action.invId),
      };
    case INVOICE_MODAL_SHOW:
      return { ...state, invoiceModalShow: true };
    case INVOICE_MODAL_HIDE:
      return { ...state, invoiceModalShow: false };
    default:
      return state;
  }
};

export function invoiceModalShow(payload) {
  return { type: INVOICE_MODAL_SHOW, payload };
}

export function invoiceModalHide(payload) {
  return { type: INVOICE_MODAL_HIDE, payload };
}

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
};

export const fetchdeleteInvoice = (id) => {
  return async (dispatch) => {
    let response = await invoiceAPI.deleteInvoice(id);
    console.log(response);
    dispatch(fetchdeleteInvoiceSuccessful(id));
  };
};

export default invoicesReducer;
