import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
    const { user, logoutUser } = useContext(AuthContext)

    const navlinks = <>
        <div className="lg:flex gap-3 items-center font-serif font-semibold text-xl ">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "before:ease relative  px-1 py-1 overflow-hidden border border-indigo-500 bg-indigo-500 text-white  transition-all before:absolute before:right-0 before:top-0  text-sm font-normal before:w-6 before:translate-x-12 before:rotate-6  before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40   " : "block p-1 font-sans text-sm font-normal text-inherit antialiased      "
                }
            >
                <span relative="relative z-10">Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/addproduct"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "before:ease relative  px-1 py-1 overflow-hidden border border-indigo-500 bg-indigo-500 text-white  transition-all before:absolute before:right-0 before:top-0  text-sm font-normal before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40   " : "block p-1 font-sans text-sm font-normal text-inherit antialiased      "
                    }
                >
                    <span relative="relative z-10">ADD Product</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/mycart"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "before:ease relative  px-1 py-1 overflow-hidden border border-indigo-500 bg-indigo-500 text-white  transition-all before:absolute before:right-0 before:top-0  text-sm font-normal before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40 " : "block p-1 font-sans text-sm font-normal text-inherit antialiased "
                }
            >
                <span relative="relative z-10">My Cart</span>
                </NavLink>
            </li>
     

            {
                user && <ul className='flex items-center'>
                    <h2 className='mr-3 font-medium text-xl'>{user.displayName}</h2>
                    <img className='w-12 rounded-full' src={user.photoURL} alt="" />
                </ul>
            }
        </div>
    </>


    return (
        <div className="mx-auto">

            <div className="navbar ">
                <div className="flex">
                    <Link
                        to='/'
                        href="#"
                        className="mr-5 block cursor-pointer py-1.5 font-sans lg:text-3xl md:text-3xl text-2xl  font-medium leading-relaxed text-inherit antialiased"
                    >
                        Todoist
                    </Link>

                    <div className='flex justify-center items-center text-center'>
                        <img className='w-20' src="https://i.ibb.co/fk3P5tF/White-Black-Futuristic-Gaming-Logo.png" alt="" />
                    </div>
                </div>
                <div className="navbar-start">
                    <div className="dropdown flex flex-col">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box flex flex-col">
                            {navlinks}
                            { user?
                                <NavLink
                                onClick={logoutUser}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-gray-300 block p-1 font-sans text-sm font-normal  text-inherit antialiased rounded-md" : "block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
                                }
                            >
                                Logout
                            </NavLink>
                            :
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-gray-300 block p-1 font-sans text-sm font-normal  text-inherit antialiased rounded-md" : "block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased"
                                }
                            >
                                Login
                            </NavLink>
                            }
                        </ul>
                    </div>

                </div>

                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal items-center gap-5 px-1">
                        {navlinks}
                    </ul>
                    {
                        user ?
                            <button
                                onClick={logoutUser}
                                className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                type="button"
                                data-ripple-light="true"
                            >
                                <span>Logout</span>

                            </button>
                            :
                            <Link to='/login'>
                                <button

                                    className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    <span>Login</span>
                                </button></Link>
                    }

                </div>

            </div>
        </div>
    );
};

export default NavBar;