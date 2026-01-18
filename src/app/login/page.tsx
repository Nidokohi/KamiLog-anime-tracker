
'use client'


import { Mail, LockKeyhole } from 'lucide-react';
import { useState } from 'react';


export default function LoginPage() {

    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return ( 
        <div className="w-full h-screen flex items-center justify-center">
            <fieldset className="fieldset bg-base-300 border-gray-800 shadow-sm shadow-gray-800 rounded-box w-96 border p-6 px-10 gap-4">
                <legend className="fieldset-legend text-xl">Login</legend>

                <label className="label">
                    <span className="label">
                        <Mail strokeWidth={1.5} />
                    </span>
                    <input type="email" className="input text-white" placeholder="Email" name="email" value={credentials.email} onChange={onChange} />
                </label>
                
                <label className="label">
                    <span className="label">
                        <LockKeyhole strokeWidth={1.5} />
                    </span>
                    <input type="password" className="input text-white" placeholder="Password" name="password" value={credentials.password} onChange={onChange} />
                </label>

                <button className="btn btn-neutral mt-4">Login</button>

                <span className="text-xs text-gray-400">Don&apos;t have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a></span>

                <div className="divider font-bold text-base">OR</div>
                <button className="btn bg-white text-black border-[#e5e5e5] hover:opacity-90">
                    <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google   
                </button>
                
            </fieldset>
        </div>
    )
}