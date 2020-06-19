import { historyAPI } from "../api/api";

const FETCH_HISTORY_SUCCESSFUL = "FETCH_HISTORY_SUCCESSFUL";
const FETCH_DELETE_HISTORY_SUCCESSFUL = "FETCH_DELETE_HISTORY_SUCCESSFUL";
const FETCH_EDIT_HISTORY_SUCCESSFUL = "FETCH_EDIT_HISTORY_SUCCESSFUL";
const FETCH_PUT_HISTORY_SUCCESSFUL = "FETCH_PUT_HISTORY_SUCCESSFUL";

const historyState = {
  history: [],
};

const historyReducer = (state = historyState, action) => {
  switch (action.type) {
    case FETCH_HISTORY_SUCCESSFUL:
      return {
        ...state,
        history: action.payload,
      };
    case FETCH_DELETE_HISTORY_SUCCESSFUL:
      return {
        ...state,
        history: state.history.filter((p) => p.id !== action.invId),
      };
    case FETCH_EDIT_HISTORY_SUCCESSFUL:
      return {
        ...state,
        history: state.history.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
      case FETCH_PUT_HISTORY_SUCCESSFUL:
        const newHistory = [...state.history, action.payload];
        return {
          ...state,
          history: newHistory,
        };
    default:
      return state;
  }
};

export function fetchHistorySuccessful(payload) {
  return { type: FETCH_HISTORY_SUCCESSFUL, payload };
}

export const fetchHistory = () => {
  return async (dispatch) => {
    let response = await historyAPI.getHistory();
    dispatch(fetchHistorySuccessful(response));
  };
};

export const fetchDeleteHistorySuccessful = (invId) => {
  return { type: FETCH_DELETE_HISTORY_SUCCESSFUL, invId };
};

export const fetchDeleteHistory = (id) => {
  return async (dispatch) => {
    let response = await historyAPI.deleteHistory(id);
    console.log(response);
    dispatch(fetchDeleteHistorySuccessful(id));
  };
};


export function fetchEditHistorySuccessful(data) {
  return { type: FETCH_EDIT_HISTORY_SUCCESSFUL, payload: data };
}

export const fetchEditHistory = ({
  id,
      customer,
      product,
      days,
      deposit,
      payment,
      total,
}) => {
  return async (dispatch) => {
    let response = await historyAPI.editHistory({
      id,
      customer,
      product,
      days,
      deposit,
      payment,
      total,
    });
    dispatch(fetchEditHistorySuccessful(response));
  };
};

export function fetchPutHistorySuccessful(data) {
  return {
    type: FETCH_PUT_HISTORY_SUCCESSFUL,
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

export const fetchPutHistory = ({
  id,
  customer,
  product,
  days,
  deposit,
  payment,
  total,
}) => {
  return async (dispatch) => {
    let response = await historyAPI.addHistory({
      id,
      customer,
      product,
      days,
      deposit,
      payment,
      total,
    });
    dispatch(fetchPutHistorySuccessful(response));
  };
};

export default historyReducer;
