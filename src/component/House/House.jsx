import House1 from '../../../Assets/house card/1.png'
import House2 from '../../../Assets/house card/2.png'
import House3 from '../../../Assets/house card/3.png'
import House4 from '../../../Assets/house card/4.png'
import House5 from '../../../Assets/house card/5.png'
import House6 from '../../../Assets/house card/6.png'
import House7 from '../../../Assets/house card/7.png'
import House8 from '../../../Assets/house card/8.png'
import House9 from '../../../Assets/house card/9.png'
import House10 from '../../../Assets/house card/10.png'

const House = () => {
    return (
        <div className='md:grid grid-cols-3 sm: mx-9'>
            <div className="card w-64 mb-4 bg-base-100 shadow-xl">
                <figure><img src={House1} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Meadowview Cottage</h2>
                    <p>Price: $325,000</p>
                    <p>Address: 5331 Rexford Court, Montgomery AL 36116</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-64 mb-4 bg-base-100 shadow-xl">
                <figure><img src={House2} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Willowbrook Manor</h2>
                    <p>Price: $475,000</p>
                    <p>Address: 456 Oak Avenue, Pineville, NY 12345</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-64 mb-4 bg-base-100 shadow-xl">
                <figure><img src={House3} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Sunflower Retreat</h2>
                    <p>Price: $650,000</p>
                    <p>Address: 789 Birch Lane, Meadowville, TX 67890</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-64 mb-4 bg-base-100 shadow-xl">
                <figure><img src={House4} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Whispering Pines Lodge</h2>
                    <p>Price: $285,000</p>
                    <p>Address: 101 Pine Street, Riverdale, FL 34567</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-64 mb-4 bg-base-100 shadow-xl">
                <figure><img src={House5} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Serenity Haven</h2>
                    <p>Price: $820,000</p>
                    <p>Address: 202 Cedar Drive, Lakeside, GA 45678</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-64 mb-4 bg-base-100 shadow-xl">
                <figure><img src={House6} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Oakridge Estate</h2>
                    <p>Price: $375,000</p>
                    <p>Address: 303 Elm Court, Hilltop, OH 78901</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-64 mb-4 bg-base-100 shadow-xl">
                <figure><img src={House7} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Rosewood Villa</h2>
                    <p>Price: $550,000</p>
                    <p>Address: 404 Redwood Road, Forestville, IL 23456</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-64 mb-4 bg-base-100 shadow-xl">
                <figure><img src={House8} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Tranquil Hollow</h2>
                    <p>Price: $725,000</p>
                    <p>Address: 505 Spruce Avenue, Valleyview, MA 34567</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-64 mb-4 bg-base-100 shadow-xl">
                <figure><img src={House9} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Wildflower Ranch</h2>
                    <p>Price: $410,000</p>
                    <p>Address: 606 Juniper Lane, Groveville, WA 56789</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-64 mb-4 bg-base-100 shadow-xl">
                <figure><img src={House10} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Misty Meadows Mansion</h2>
                    <p>Price: $690,000</p>
                    <p>Address: 707 Willow Way, Sunset Hills, NV 67890</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default House;