import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then (data => setServices(data))
    },[])
    return (
        <div className='mb-6'>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="my-5 text-5xl semi-bold">Our Service Area</h2>
                <p className='my-5'>the majority have suffered alteration in some form, by injected humour,<br/> or randomised words which don't look even slightly believable. </p>
            </div>
            <div className=' gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    >
                    </ServiceCard>
                    )
                }
            </div>

        </div>
    );
};

export default Services;