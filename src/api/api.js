import * as axios from "axios";

const instance = axios.create({
  // withCredentials: true,
  baseURL: "http://localhost:3001",
  // headers: {
  //   "API-KEY": "d075aadf-9fc0-4045-9fac-f3aa46fa4e92"
  // }
});
// INVOICES
export const invoiceAPI = {
  getInvoices() {
    return instance.get(`/invoices`).then((response) => {
      return response.data;
    });
  },
  deleteInvoice(id) {
    return instance.delete(`/invoices/${id}`);
  },
};
// CUSTOMERS
export const customerAPI = {
  getCustomers() {
    return instance.get(`/customers`).then((response) => {
      return response.data;
    });
  },
  deleteCustomer(id) {
    return instance.delete(`/customers/${id}`);
  },
};
// PRODUCTS
export const productAPI = {
  getProducts() {
    return instance.get(`/products`).then((response) => {
      return response.data;
    });
  },
  deleteProduct(id) {
    return instance.delete(`/products/${id}`);
  },
};
