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
  addInvoice({ id, customer, product, days, deposit, payment, total }) {
    return instance
      .post(`/invoices`, {
        id,
        customer,
        product,
        days,
        deposit,
        payment,
        total,
      })
      .then((response) => {
        return response.data;
      });
  },
  editInvoice({ id, customer, product, days, deposit, payment, total }) {
    return instance
      .put(`/invoices/${id}`, { customer, product, days, deposit, payment, total })
      .then((response) => {
        return response.data;
      });
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
  addCustomer({ id, name, pass, address, phone }) {
    return instance
      .post(`/customers`, {
        id,
        name,
        pass,
        address,
        phone,
      })
      .then((response) => {
        return response.data;
      });
  },
  editCustomer({ id, name, pass, address, phone }) {
    return instance
      .put(`/customers/${id}`, { name, pass, address, phone })
      .then((response) => {
        return response.data;
      });
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
  addProduct({ id, name, price, category, deposit, description, payment }) {
    return instance
      .post(`/products`, {
        id,
        name,
        price,
        category,
        deposit,
        description,
        payment,
      })
      .then((response) => {
        return response.data;
      });
  },
  editProduct({ id, name, price, category, deposit, description, payment }) {
    return instance
      .put(`/products/${id}`, { name, price, category, deposit, description, payment })
      .then((response) => {
        return response.data;
      });
  },
};
