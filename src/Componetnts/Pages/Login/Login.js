import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 bg-[#F5F5F5] p-6 rounded-lg'>
                <p className='text-xl font-semibold mt-16'>Login</p>
                <div className='epilogue font-bold mt-2 text-3xl'>
                    <h1 >Please enter your</h1>
                    <h1>details</h1>
                </div>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="text" {...register("email")} placeholder="Type your username here" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" {...register("password")} placeholder="Type your password here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {/* <div>
                        {loginError && <p>{loginError}</p>}
                    </div> */}
                    <input className='w-full btn btn-warning mt-6 max-w-xs' value='Login' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;