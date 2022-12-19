import React from 'react';
import { useForm } from 'react-hook-form';

const NewGame = () => {
    const { register, handleSubmit } = useForm();

    const handleEmail = data => {
        console.log(data);
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 bg-[#F5F5F5] p-6 rounded-lg'>
                <p className='text-xl font-semibold mt-8'>Start a new game</p>
                <div className='epilogue font-bold mt-2 text-3xl'>
                    <h1>Whom do you want</h1>
                    <h1>to play with?</h1>
                </div>
                <form onSubmit={handleSubmit(handleEmail)}>
                    <div className="form-control w-full max-w-xs mt-16">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="text" {...register("email")} placeholder="Type their email here" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <button className='w-full  max-w-xs btn btn-warning mt-72 font-bold text-white'>Start game</button>
                </form>
            </div >
        </div >
    );
};

export default NewGame;