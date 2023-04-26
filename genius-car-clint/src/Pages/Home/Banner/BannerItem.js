import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image,prev,next,id} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-image'>
                    <img src={image} className="w-full rounded-xl" alt='' />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h2 className='text-6xl font-bold text-white'>
                        Affordable <br/>
                        Price For Car <br/>
                        Servicing
                    </h2>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                    <p className='text-xl text-white'>
                        There are many variation of passages of available , But <br/>
                        The majority have suffered alteration in some form
                    </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                    <button className="btn btn-warning mr-5 ">Warning</button>
                    <button className="btn btn-outline btn-warning">Warning</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div> 
    );
};

export default BannerItem;