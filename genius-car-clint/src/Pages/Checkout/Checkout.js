import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const {_id,title,price} = useLoaderData();
    const placeOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = `${form.mail.value}`;
        const phone = `${form.number.value}`;
        const message = `${form.message.value}`;

        const order = {
            service: _id,
            serviceName: title,
            price: price,
            customer: name,
            email: email,
            phone: phone,
            message: message
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .then(alert('Order Placed !'))
        .catch (error => console.error(error));
        

    }
    return (
        <div>
            <h2 className='text-3xl'>Choosed Service : {title}</h2>
            <h4 className='2xl'>Price : {price}</h4>
            <form onSubmit={placeOrder} className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-primary w-full" required/>
                <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-primary w-full" required/>
                <input name='number' type="text" placeholder="Your Phone" className="input input-bordered input-primary w-full" required />
                <input name='mail' type="text" placeholder="Your Email" className="input input-bordered input-primary w-full" />
                <textarea name="message" className="textarea textarea-accent w-full" placeholder="Your Message"></textarea>
                <input className='btn btn-primary' type='submit' value="place your order" />
            </form>
        </div>
    );
};

export default Checkout;