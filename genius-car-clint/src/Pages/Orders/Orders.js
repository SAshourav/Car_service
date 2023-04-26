import React, { useEffect, useState } from 'react';
import OrderRow from './OrderRow';

const Orders = () => {
    const [orders, setOrder] = useState([]);

    const email = `sabbirahmed2013303@gmail.com`;
    const url = `http://localhost:5000/orders?email=${email}`;
    useEffect(()=>{
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    },[])

    const handleDelete = id =>{
        const procced = window.confirm("Are You sure You want to delete the order ?");
        if(procced){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        alert("Your order has been deleted !!");
                        const remainig = orders.filter(ord => ord._id =! id);
                        setOrder(remainig);
                    }
                })
        }
    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                    <th>
                    <label>
                        <button className="btn btn-square btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </label>
                    </th>
                    <th>Name</th>
                    <th>Services</th>
                    <th>Favorite Color</th>
                    <th>Message</th>
                </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrderRow
                            key={order._id}
                            order= {order}
                            handleDelete = {handleDelete}
                        ></OrderRow>)
                    }
                </tbody>
                
            </table>
        </div>
    );
};

export default Orders;