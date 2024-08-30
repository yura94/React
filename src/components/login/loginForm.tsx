import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchUserByEmail } from "../../store/usersSlice";

interface LoginFormProps {
  onLogin: () => void;
}

type DataType = {
  id: number;
  name: string;
  email: string;
};

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const dispatch = useDispatch<AppDispatch>();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (e: any) => {
    const loginData = {
      email: e.email,
      password: e.password,
    };
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...loginData }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("response ok");
        const userName = await fetch(
          `http://localhost:5000/userByEmail?email=${loginData.email}`
        );

        const data = await userName.json();
        console.log("data", data);
        const userData = {
          email: data[0].email,
          name: data[0].name,
        };

        dispatch(fetchUserByEmail(userData));

        onLogin();
      } else {
        alert("Login failed: " + data.message);
      }
    } catch (error) {
      console.error("Login error", error);
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
          initialValues={{ email: "", password: "" }}
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
                pb: "10px",
              }}
            >
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </Box>

            <Button type="submit">Login</Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default LoginForm;
