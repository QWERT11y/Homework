import React, { useEffect, useState } from 'react'

import {  Routes , Route } from 'react-router-dom'

import Home2 from './Home/Home2'
import Cards from './Cards'
import Lox from './Lox/Lox'


const App = () => {
    const [products , setProducts] = useState([])

    const fetchProducts = async () => {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      console.log(data);
      setProducts(data)
    };
    useEffect(() => {
      fetchProducts();
    }, []);
    console.log(products)



    const [loading, setLoading] = useState(true)
    const [form, setForm] = useState(true)
    const [modal, setModal] = useState(false)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    console.log(password);
    console.log(name);
    let AdminN = "admin"
    let AdminP = "1234"



    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            if (AdminN == name && AdminP == password) {
                setForm(false)

            } else {
                setModal(false)
            }
        }, 1000);

    }, [])


    return (
        <div>

            {loading && <div class="w-[99vw] h-screen  flex justify-center items-center flex-row gap-2">
                <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
                <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
            </div>


            }
            {form ? <div className='w-[97vw] h-screen flex justify-center items-center'>
           
                <div
                    class="w-80 rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden"
                >
                    <div class="flex flex-col justify-center items-center space-y-2">
                        <h2 class="text-2xl font-medium text-slate-700">Login</h2>
                        <p class="text-slate-500">Enter details below.</p>
                    </div>
                    <form class="w-full mt-4 space-y-3">
                        <div>
                            <input
                                class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                                placeholder="Username"
                                id="username"
                                name="username"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                            />
                        </div>
                        <div>
                            <input
                                class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                                placeholder="Password"
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input
                                    class="mr-2 w-4 h-4"
                                    id="remember"
                                    name="remember"
                                    type="checkbox"
                                />
                                <span class="text-slate-500">Remember me </span>
                            </div>
                            <a class="text-blue-500 font-medium hover:underline" href="#"
                            >Forgot Password</a
                            >
                        </div>

                        <button
                            class="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
                            id="login"
                            name="login"
                            type="submit"
                        >
                            login
                        </button>
                        <p class="flex justify-center space-x-1">
                            <span class="text-slate-700"> Have an account? </span>
                            <a class="text-blue-500 hover:underline" href="#">Sign Up</a>
                        </p>
                    </form>
                </div>
            </div> :
            <h1>Nothng</h1>
            
            }
            {modal ? <div className='w-[300px]  h-[190px] bg-slate-800'><h1>Incorrect password or Login</h1></div>
                :
                <Lox>

                  <Routes>
                <Route path="/" element={<Home2/>}/>
                <Route path="/Cards/:CardId" element={<Cards/>}/>
            </Routes>
                </Lox> 
                    
            }

        </div>


    )
}

export default App