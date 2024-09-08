// import React from "react";
// import Row from "react-bootstrap/Row";

// import { FaUser } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";

// function SignIn() {
//   return (
//     <>
//       <div className="container ht">
        
//         <Row className="d-flex justify-center align-items-center ">
//           <div className="col-md-4 col-md-offset-3 d-flex flex-col justify-center align-items-center mt-5">
//             <h1>Sign In</h1>
//             <form>
//               <div className="form-group mb-3">
//                 <label
//                   htmlFor="username"
//                   className="d-flex flex-row align-items-center gap-2 "
//                 >
//                   <span>
//                     <FaUser />
//                   </span>
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="username"
//                   placeholder="Username"
//                   required
//                 />
//               </div>
//               <div className="form-group mb-3">
//                 <label
//                   htmlFor="email"
//                   className="d-flex flex-row align-items-center gap-2 "
//                 >
//                   <span>
//                     <MdEmail />
//                   </span>
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   aria-describedby="email
//                 Help"
//                   placeholder="Enter email"
//                 />

//                 <small id="emailHelp" className="form-text text-muted">
//                   We'll never share your email with anyone else.
//                 </small>
//               </div>
//               <div className="form-group mb-3">
//                 <label
//                   htmlFor="password"
//                   className="d-flex flex-row align-items-center gap-2 "
//                 >
//                   {" "}
//                   <span>
//                     <RiLockPasswordFill />
//                   </span>{" "}
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   placeholder="Password"
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//             </form>
//           </div>
//           <div className="col-md-8 col-md-offset-3">
//             <h1 className="mb-5">Welcome to [Your Blog Name]!</h1>
//             <p className="mb-1">
//               At [Your Blog Name], we are passionate about sharing diverse and
//               engaging content that informs, inspires, and connects our readers.
//               Our team of dedicated writers covers a wide range of topics, from
//               lifestyle and travel to technology and wellness. We believe in the
//               power of storytelling and strive to create a space where ideas
//               flourish and communities thrive.
//             </p>
//             <p className="mb-1">
//               Join us on this journey of exploration and discovery. Thank you
//               for being part of our story!
//             </p>
//             <p className="mb-1"> Happy reading,</p>
//             <p>The [Your Blog Name] Team</p>
//           </div>
//         </Row>
//       </div>
//     </>
//   );
// }

// export default SignIn;







import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Sahand's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign in with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='**********'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
            </Button>
            <OAuth/>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Dont Have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
