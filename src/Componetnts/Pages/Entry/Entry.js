import React from 'react';

const Entry = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-96">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='bilbo text-4xl font-normal text-center'>async</h2>
                        <div className='bilbo text-8xl font-normal text-center'>
                            <h1>tic tac</h1>
                            <h1>toe</h1>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning my-6">Login</button>
                            <button className="btn btn-info">Regiester</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Entry;