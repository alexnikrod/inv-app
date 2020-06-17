import { invoiceAPI } from "../api/api";

const FETCH_INVOICES_SUCCESSFUL = "FETCH_INVOICES_SUCCESSFUL";
const FETCH_DELETE_INVOICES_SUCCESSFUL = "FETCH_DELETE_INVOICES_SUCCESSFUL";
const FETCH_PUT_INVOICES_SUCCESSFUL = "FETCH_PUT_INVOICES_SUCCESSFUL";
const FETCH_EDIT_INVOICES_SUCCESSFUL = "FETCH_EDIT_INVOICES_SUCCESSFUL";

const invoiceState = {
  invoices: [],
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
      return {
        ...state,
        invoices: newInvoices,
      };
    case FETCH_EDIT_INVOICES_SUCCESSFUL:
      return {
        ...state,
        invoices: state.invoices.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
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

export function fetchEditInvoicesSuccessful(data) {
  return { type: FETCH_EDIT_INVOICES_SUCCESSFUL, payload: data };
}

export const fetchEditInvoices = ({
  id,
      customer,
      product,
      days,
      deposit,
      payment,
      total,
}) => {
  return async (dispatch) => {
    let response = await invoiceAPI.editInvoice({
      id,
      customer,
      product,
      days,
      deposit,
      payment,
      total,
    });
    dispatch(fetchEditInvoicesSuccessful(response));
  };
};

export default invoicesReducer;
