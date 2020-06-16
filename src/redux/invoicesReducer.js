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
  // currentid: 1,
  // invoiceMenu: false,
};

const invoicesReducer = (state = invoiceState, action) => {
  const invoiceCopy = [...state.invoices];

  switch (action.type) {
    case FETCH_INVOICES_SUCCESSFUL:
      return {
        ...state,
        invoices: action.payload,
      };
    case FETCH_DELETE_INVOICES_SUCCESSFUL:
      return {
        ...state,
        invoices: state.invoices.filter((p) => p.id !== action.invId),
      };
    case FETCH_PUT_INVOICES_SUCCESSFUL:
      const newInvoices = [...invoiceCopy, action.payload];
      // const newCurrentInvoiceId = action.payload.id + 1;
      return {
        ...state,
        invoices: newInvoices,
        // idForDetails: action.payload.id,
        // currentInvoiceId: newCurrentInvoiceId,
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

export function fetchPutInvoicesSuccessful(data) {
  return {
    type: FETCH_PUT_INVOICES_SUCCESSFUL,
    payload: {
      id: data.id,
      customer: data.customer,
      product: data.product,
      days: data.days,
      deposit: data.deposit,
      payment: data.payment,
      total: data.total,
    },
  };
}

export const fetchPutInvoices = ({
  id,
  customer,
  product,
  days,
  deposit,
  payment,
  total,
}) => {
  return async (dispatch) => {
    let response = await invoiceAPI.addInvoice({
      id,
      customer,
      product,
      days,
      deposit,
      payment,
      total,
    });
    dispatch(fetchPutInvoicesSuccessful(response));
  };
};

export default invoicesReducer;
