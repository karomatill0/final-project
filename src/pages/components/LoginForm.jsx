import React, { useState } from "react";
import { Container, Divd, FormWrapper, Imga, InputA, Text } from "./styles";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };
  return (
    <>
      <Imga src="https://www.nicepng.com/png/full/207-2073249_open-user-icon-for-login-page.png" />

      <FormWrapper onSubmit={submitHandler}>
        <Container>
          {error != "" ? <Text className="error">{error}</Text> : ""}
          <Divd>
            <label htmlFor="name">Name</label>
            <input
              placeholder="name"
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </Divd>
          <div>
            <label htmlFor="email">Email</label>
            <input
              placeholder="email"
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
            placeholder="password"
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <InputA type="submit" value="Login" />
        </Container>
      </FormWrapper>
    </>
  );
}

export default LoginForm;
