import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const SignIn = () => {


    const { googleLogin,signInUser } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);

                Swal.fire({
                    title: 'Successfully Login, Welcome To Road Revolution',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                location('/')


            })
            .catch(err => {
                console.log(err.message);
            })
    }



    const handleLogin = e => {

        e.preventDefault();


        const form = new FormData(e.currentTarget)


        const email = form.get('email')
        const password = form.get('password')



        console.log(email, password);
        signInUser(email, password)
            .then(res => {
                console.log(res.user);

                Swal.fire({
                    title: 'Successfully Login, Welcome To Road Revolution',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })

                e.target.reset()


            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: 'Please Check Your Email & Password',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })

            })

    }




    return (
        <div>
            <div data-aos="zoom-in"
                data-aos-duration="3000">
                {/* <!-- component --> */}
                <div className="bg-gray-100 flex justify-center items-center h-screen">
                    {/* <!-- Left: Image --> */}
                    <div className="w-1/2 h-screen hidden lg:block">
                        <img src="https://wallpaperaccess.com/full/1600570.jpg" alt="Placeholder Image" className="object-cover w-full h-full" />
                    </div>
                    {/* <!-- Right: Login Form --> */}
                    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                        <h1 className="text-2xl font-semibold mb-4">Login</h1>
                        <form onSubmit={handleLogin} action="#" method="POST">
                            {/* <!-- Username Input --> */}
                            <div className="mb-4">
                                <label for="username" className="block text-gray-600">Email</label>
                                <input
                                    type="email"
                                    id="username"
                                    name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                            </div>
                            {/* <!-- Password Input --> */}
                            <div className="mb-4">
                                <label for="password" className="block text-gray-600">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                            </div>
                            {/* <!-- Remember Me Checkbox --> */}
                            <div className="mb-4 flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    name="remember"
                                    className="text-blue-500" />
                                <label for="remember" className="text-gray-600 ml-2">Remember Me</label>
                            </div>
                            {/* <!-- Forgot Password Link --> */}
                            <div className="mb-6 text-blue-500">
                                <a href="#" className="hover:underline">Forgot Password?</a>
                            </div>
                            {/* <!-- Login Button --> */}
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>

                            {/* Google Login */}

                        </form>
                        <div className="text-center">
                            <button onClick={handleGoogleLogin} className="btn btn-outline my-2 mr-2"><FcGoogle className="text-xl"></FcGoogle>Google Login</button>
                            <button onClick={handleGoogleLogin} className="btn btn-outline my-2"><FcGoogle className="text-xl"></FcGoogle>Google Login</button>
                        </div>
                        {/* <!-- Sign up  Link --> */}
                        <div className="mt-6 text-blue-500 text-center">
                            <Link to='/register' href="#" className="hover:underline">Sign up Here</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SignIn;