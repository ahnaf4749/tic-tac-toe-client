import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 bg-[#F5F5F5] p-6 rounded-lg'>
                    <h1 className='epilogue text-3xl mt-6 font-bold'>Your Games</h1>
                    <div className='bilbo font-bold mt-48 text-6xl text-center'>
                        <h1>No Games</h1>
                        <h1>Found</h1>
                    </div>
                    <button className='w-full  max-w-xs btn btn-warning mt-10 font-bold text-white'>Start a new game</button>
                </div>
            </div>
        </div >
    );
};

export default Home;