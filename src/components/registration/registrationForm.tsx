import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Button } from "@mui/material";

interface RegisterFormProps {
  onRegister: () => void;
}

function RegisterForm({ onRegister }: RegisterFormProps) {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters")
      .required("Required"),
  });

  const handleSubmit = async (e: any) => {
    const registerData = {
      email: e.email,
      password: e.password,
    };

    if (e.password !== e.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...registerData }),
      });

      const data = await response.json();

      if (response.ok) {
        onRegister();
      } else {
        alert("Registration failed: " + data.message);
      }
    } catch (error) {
      console.error("Registration error", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f9f9f9",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form style={{ width: "400px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                pb: "10px",
              }}
            >
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <label htmlFor="confirmPassword">Confirm password</label>
              <Field type="password" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="div" />
            </Box>

            <Button type="submit">Register</Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
}

export default RegisterForm;
