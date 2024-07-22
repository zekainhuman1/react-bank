import "./index.css";
import React, { useState } from 'react';
import { Nav } from "../../component/nav";
import { PageTitle } from "../../component/pageTitle";

import TextInput from '../../component/input';
import ErrorMessage from '../../component/ErrorMessage';
import Button from "../../component/button";


const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const registration = () => {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'example@gmail.com') {
      setError('A user with the same name is already exist');
    }
  };

  return (
<div className="page"> 
<Nav />
<PageTitle title="Sign up" subTitle="Choose a registration method" />

      <form className="form" onSubmit={handleSubmit}>
      <TextInput
        label="Email"
        value={email}
        setValue={setEmail}
        type="email"
        placeholder="example@gmail.com"
      />
      <TextInput
        label="Password"
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Pass2000ID"
      />
        <p>Already have an account? <a href="/signin">Sign In</a></p>
        <Button onClick={registration} className="button button--active button--filled" redirectTo="/signup">Sign Up</Button>
        {error && <ErrorMessage message={error} />}
      </form>
</div>
  );
};

export default SignUp;