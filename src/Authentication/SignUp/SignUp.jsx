import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
// import NavBar from "../../component/NavBar/NavBar";

const SignUp = () => {

    const { setUser, createUser, updatePassword } = useContext(AuthContext)

    const [error, setError] = useState('')




    const handleSignUp = e => {
        e.preventDefault()
        console.log('clicked');
        const form = new FormData(e.currentTarget)





        const email = form.get('email')
        const displayName = form.get('displayName')
        const password = form.get('password')
        const photoURL = form.get('photoURL')

        console.log(email, displayName, password, photoURL);

        /**Password Validation**/
        if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=!]).{6,16}$/.test(password)) {
            setError("Password must be at least 6 characters long and contain one uppercase letter")
            return
        }
        else {
            setError("")
            e.target.reset()
        }




        createUser(email, password)
            .then(res => {
                updatePassword(displayName, photoURL)
                    .then(res => {
                        console.log(res);
                        setUser((prevUser) => {
                            prevUser.displayName = displayName;
                            prevUser.photoURL = photoURL;
                            return { ...prevUser };
                        })
                        location('/')
                    })
                    .catch(error => {
                        console.log(error);
                    })
                console.log(res.user);
                Swal.fire({
                    title: 'Account Created Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
            .catch(error => {
                console.log(error);
            })


    }




    return (
        <div>

            {/* <NavBar></NavBar> */}
            <div data-aos="zoom-in"
                data-aos-duration="3000">
                {/* <!-- component --> */}
                <div className="bg-gray-100 flex justify-center flex-row-reverse items-center h-screen">
                    {/* <!-- Left: Image --> */}
                    <div className="w-1/2 h-screen hidden lg:block">
                        <img src="https://wallpaperaccess.com/full/1600570.jpg" alt="Placeholder Image" className="object-cover w-full h-full" />
                    </div>
                    {/* <!-- Right: Register Form --> */}
                    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                        <h1 className="text-2xl font-semibold mb-4">Register Your Account</h1>
                        <form onSubmit={handleSignUp} action="#" method="POST">
                            {/* <!-- Username Input --> */}
                            <div className="mb-4">
                                <label for="displayName" className="block text-gray-600">Name</label>
                                <input
                                    type="text"
                                    id="displayName"
                                    name="displayName" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                            </div>
                            <div className="mb-4">
                                <label for="photoURL" className="block text-gray-600">ImageUrl</label>
                                <input
                                    type="text"
                                    id="photoURL"
                                    name="photoURL" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                            </div>
                            <div className="mb-4">
                                <label for="useremail" className="block text-gray-600">Email</label>
                                <input
                                    type="email"
                                    id="useremail"
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

                            {/* <!-- Register Button --> */}
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Register</button>

                            {/* Google Register */}

                        </form>
                        <div className="text-xl text-red-400">
                            {
                                error && <p>{error}</p>
                            }
                        </div>
                        {/* <!-- Sign up  Link --> */}
                        <div className="mt-6 text-blue-500 text-center">
                            <Link to='/login' href="#" className="hover:underline">Sign in Here</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;