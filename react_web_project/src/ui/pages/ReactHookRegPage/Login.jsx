import React from 'react'
import { useForm } from "react-hook-form";

export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    let userData = [{
        email: 'meetmistry@gmail.com',
        password: '123123'
    }, {
        email: 'yashjariwala@gmail.com',
        password: '4545'
    }, {
        email: 'niharpatel@gmail.com',
        password: '789'
    }, {
        email: 'dharminpatel@gmail.com',
        password: '56456'
    }, {
        email: 'vinod@gmail.com',
        password: 'vin125'
    }, {
        email: 'aryand@gmail.com',
        password: 'Daryan1212'
    }]

    const addData = (data) => {
        let matchUser = userData.find((e) => {
            return e.email === data.email && e.password === data.password
        })
        if (matchUser) {
            localStorage.setItem('user', JSON.stringify(matchUser))
        } else {
            alert('404 error User Not Found')
        }
    }


    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(addData)}>
            <input {...register("email", { require: true })} className='bg-black text-white me-2' />
            {errors.email && <h1>Write Email First</h1>}

            <input {...register("password", { required: true })} className='bg-black text-white' />
            {errors.password && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
}