import * as axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: "https://server-invoices1.herokuapp.com"
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
