import React from 'react';

import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />


  </div>
);

export default function gridOrderText(props) {
  const item = props.OrderItems;
  const quanity = props.Quanity;
  return <div>
    {
      item.map((item,index) =>
        <p key={item}>
          {item}
          &ensp;&ensp;&ensp;
          x{quanity[index]}
        </p>)
    }
  </div>

};

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    
    {props.Status}
    
  </button>
);




export const ordersGrid = [
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '70',
    textAlign: 'Center',
  },

  {
    field: 'CustomerName',
    headerText: 'Customer Name',
    width: '120',
    textAlign: 'Center',
  },

  {
    field:"Item",
    headerText: 'Item',
    width: '100',
    template: gridOrderText,
    textAlign: 'Center',
  },
  {
    field: 'Voucher',
    headerText: 'Voucher',
    width: '100',
    textAlign: 'Center',
  },

  {
    field: 'TotalPrice',
    headerText: 'Total Price',
    format: 'C2',
    textAlign: 'Center',
    
    width: '100',
  },
  
  {
    field: 'Address',
    headerText: 'Address',
    width: '120',
    textAlign: 'Center',
  },
  {
    field:"CreatedAt",
    headerText: 'Create Time',
    width: '100',
    textAlign: 'Center',
  },
  { 
    field: 'Status',
    headerText: 'Status',
    template: gridOrderStatus, 
    textAlign: 'Center',
    width: '120',
  },
];



export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Voucher:'100%',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalPrice: 32.38,
    OrderItems: ['rượu','ma túy','thuốc phiện'],
    Quanity: [3,4,5],
    Address: 'Bạch Mai',
    CreatedAt:'11/11/2002',
    Status: 'pending',
    StatusBg: '#FB9678',
    
  },
  
  
];



