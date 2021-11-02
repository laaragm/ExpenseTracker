import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        { id: 1, title: 'Pizza', amount: 20, type: 'withdraw', category: 'Food', createdAt: new Date('2021-11-12 10:00:00') },
        { id: 2, title: 'Wage', amount: 1000, type: 'deposit', category: 'Wage', createdAt: new Date('2021-05-10 09:00:00') },
        { id: 3, title: 'Ultrawide Monitor', amount: 500, type: 'withdraw', category: 'Gear', createdAt: new Date('2021-02-11 08:00:00') },
        { id: 4, title: 'Keyboard', amount: 80, type: 'withdraw', category: 'Gear', createdAt: new Date('2021-09-09 11:00:00') },
      ],
    })
  },
  routes() {
    this.namespace = 'api';
  
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
