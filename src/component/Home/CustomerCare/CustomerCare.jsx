import customercare from '../../../../Assets/hamepageImg/Screenshot 2023-09-13 200051.png'

const CustomerCare = () => {
    return (
        <div className='md:flex sm: mx-9'>
            <div className='md:w-2/4'>
                <img src={customercare}></img>
            </div>
            <div className='md:w-2/4'>
                <h1 className='md:font-bold text-6xl sm:text-4xl font-semibold '>We're provide 24 Hours service 7 days in a week</h1>
                <p className='md:text-4xl sm: text-2xl'>We try to help our costumes at ant time</p>
            </div>
        </div>
    );
};

export default CustomerCare;