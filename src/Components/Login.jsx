// import {  useState } from "react"
// import { useDispatch } from "react-redux"
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { createUser } from "../Stor/UserSlice";
// import SuccessLogin from "./successLogin";
// import * as Yup from 'yup'
// import { useForm } from "react-hook-form"
// import {Radio,RadioGroup,FormControlLabel,FormControl,} from "@mui/material";

// const Login = () => {
//   const { register, handleSubmit } = useForm()
//   const onSubmit = (data) => {
//     console.log(data);
//     setIsRegistered(true);
//   };
//     // const [name, setName] = useState(null)
//   // const [gender, setGender] = useState(null)

//   // const [email, setEmail] = useState(null)
//   // const [password, setPassword] = useState(null)
//   const [isRegistered, setIsRegistered] = useState(false) // State לבדיקת אם נרשמנו בהצלחה
//   // const [errors, setErrors] = useState({});
//   // const dispatch = useDispatch() // יצירת dispatch מה-Redux
//   // const validationSchema = Yup.object().shape({
//   //   name: Yup.string().min(3, "שם חייב להיות לפחות 3 תווים").required("שם הוא שדה חובה"),
//   //   email: Yup.string().email("אנא הזן מייל תקין").required("מייל הוא שדה חובה"),
//   //   password: Yup.string().min(6, "הסיסמה חייבת להיות לפחות 6 תווים").required("סיסמה היא שדה חובה"),
//   //   gender:Yup.string().oneOf(["נקבה", "זכר"], "לא נבחר מין").required("יש לבחור  זכר/נקבה"),
//   // });

//   // const handleValidation = () => {
//   //   validationSchema
//   //     .validate({ name, email, password,gender }, { abortEarly: false })
//   //     .then(() => {
//   //       // אם הכל תקין, מבצע את הרישום
//   //       dispatch(createUser({ name, email, password,gender }));
//   //       setIsRegistered(true);
//   //     })
//   //     .catch((err) => {
//   //       // אם יש שגיאות, מעדכן את ה-state של errors
//   //       const newErrors = err.inner.reduce((acc, curr) => {
//   //         acc[curr.path] = curr.message;
//   //         return acc;
//   //       }, {});
//   //       setErrors(newErrors);
//   //     });
//   // };


//   return (
// <form onSubmit={handleSubmit(onSubmit)}>

//     <div style={{ display: "flex", marginTop: "20vh" }}>
//       {isRegistered ? (<SuccessLogin />) : (<>
//         <img
//           src="/imeges/loginImg1.png"
//           alt=""
//           style={{ width: '25%', height: 'auto', zIndex: "2" }}
//         />
//         <div style={{ width: "50%", fontFamily: " 'Assistant', sans-serif", textAlign: "right", marginTop: "-5vh" }}>
//           <h1 style={{ color: "#e6392b" }}>התחברות</h1>
//           <p>התחברו ותתחילו להנות ממגוון עצום של תכנים קולינריים ומתכונים עם אלפי שעות וידאו, להרכיב לעצמכם ספר מתכונים אישי עם המתכונים שהכי אהבתם, לשתף בתמונות, להגיב ולשאול שאלות.</p>
//           <h3 style={{ display: "ruby-text" }}> הכנס שם משתמש
//             <p style={{ color: "red", fontSize: "22px" }}> *</p></h3>
//           <Box sx={{ width: 500, maxWidth: '100%', margin: "" }}>
//             <TextField fullWidth label="Name" id="fullWidth"
//                {...register("name", { required: true, minLength: 2 , pattern: /^[A-Za-z]+$/i })}
//               // error={!!errors.name} // אם יש שגיאה, `error` יהיה true
//               // helperText={errors.name} // מציג את הודעת השגיאה
//             />
//           </Box>
//           <br />
//           <h3 style={{ display: "ruby-text" }}>הכנס  כתובת מייל
//             <p style={{ color: "red", fontSize: "22px" }}> *</p></h3>
//           <Box sx={{ width: 500, maxWidth: '100%', margin: "" }}>
//             <TextField fullWidth label="Email" id="fullWidth1"
//               // value={email}
//               // onChange={(e) => setEmail(e.target.value)}
//               // error={!!errors.email} // אם יש שגיאה, `error` יהיה true
//               // helperText={errors.email} // מציג את הודעת השגיאה
//               {...register("email", { required: "Email Address is required" })}
//               // aria-invalid={errors.mail ? "true" : "false"}
//             />
//           </Box>
//           <br />
//           <h3 style={{ display: "ruby-text" }}>הכנס סיסמה
//             <p style={{ color: "red", fontSize: "22px" }}> *</p></h3>
//           <br />
//           <Box sx={{ width: 500, maxWidth: '100%', margin: "" }}>
//             <TextField fullWidth label="PassWord" id="fullWidth2"
//               // value={password}
//               // onChange={(e) => setPassword(e.target.value)}
//               // error={!!errors.password}
//               // helperText={errors.password}
//               {...register("password", { required: true, minLength: 5  })}

//             />

//           </Box>
//           <h3>מין</h3>
//           <FormControl component="fieldset">
//             <RadioGroup
//             //  row value={gender} onChange={(e) => setGender(e.target.value)}
//              >
//               <FormControlLabel value="זכר" control={<Radio />} label="זכר" />
//               <FormControlLabel value="נקבה" control={<Radio />} label="נקבה" />
//             </RadioGroup>
//           </FormControl>

//           <br />
//           <Button style={{ backgroundColor: "black", width: "30%", marginRight: "18%", fontFamily: "system-ui", fontSize: "large" }}
//             variant="contained" disableElevation
//             type="submit"
//             // onClick={() => { handleValidation() }}
//             >הרשם</Button>
//         </div>

//         <img
//           src="/imeges/loginImg2.png"
//           alt=""
//           style={{ width: '25%', height: '30vh' }}
//         />
//       </>)}
//     </div>
//     </form>

//   );
// }

// export default Login





import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createUser } from "../Stor/UserSlice";
import SuccessLogin from "./successLogin";
import { useForm } from "react-hook-form";
import { Radio, RadioGroup, FormControlLabel, FormControl } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const [isRegistered, setIsRegistered] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(createUser(data)); // שליחה ל-Redux
    setIsRegistered(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex", marginTop: "20vh" }}>
        {isRegistered ? (
          <SuccessLogin />
        ) : (
          <>
            <img
              src="/imeges/loginImg1.png"
              alt=""
              style={{ width: "25%", height: "auto", zIndex: "2" }}
            />
            <div
              style={{
                width: "50%",
                fontFamily: " 'Assistant', sans-serif",
                textAlign: "right",
                marginTop: "-5vh",
              }}
            >
              <h1 style={{ color: "#e6392b" }}>התחברות</h1>
              <p>
                התחברו ותתחילו להנות ממגוון עצום של תכנים קולינריים ומתכונים עם
                אלפי שעות וידאו, להרכיב לעצמכם ספר מתכונים אישי עם המתכונים
                שהכי אהבתם, לשתף בתמונות, להגיב ולשאול שאלות.
              </p>
              <h3 style={{ display: "ruby-text" }}>
                הכנס שם משתמש
                <p style={{ color: "red", fontSize: "22px" }}> *</p>
              </h3>
              <Box sx={{ width: 500, maxWidth: "100%", margin: "" }}>
                <TextField
                  fullWidth
                  label="Name"
                  {...register("name", {
                    required: "שם הוא שדה חובה",
                    minLength: {
                      value: 3,
                      message: "השם חייב להיות לפחות 3 תווים",
                    },
                  })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Box>
              <br />
              <h3 style={{ display: "ruby-text" }}>
                הכנס כתובת מייל
                <p style={{ color: "red", fontSize: "22px" }}> *</p>
              </h3>
              <Box sx={{ width: 500, maxWidth: "100%", margin: "" }}>
                <TextField
                  fullWidth
                  label="Email"
                  {...register("email", {
                    required: "מייל הוא שדה חובה",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "אנא הזן מייל תקין",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Box>
              <br />
              <h3 style={{ display: "ruby-text" }}>
                הכנס סיסמה
                <p style={{ color: "red", fontSize: "22px" }}> *</p>
              </h3>
              <Box sx={{ width: 500, maxWidth: "100%", margin: "" }}>
                <TextField
                  fullWidth
                  label="PassWord"
                  {...register("password", {
                    required: "סיסמה היא שדה חובה",
                    validate: {
                      hasLetter: (value) => /[a-zA-Z]/.test(value) || "הסיסמה חייבת לכלול לפחות אות אחת",
                      hasNumber: (value) => /\d/.test(value) || "הסיסמה חייבת לכלול לפחות מספר אחד",
                    },
                     minLength: {
                      value: 6,
                      message: "הסיסמה חייבת להיות לפחות 6 תווים",
                    },
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Box>
              <h3>מין</h3>
              <FormControl component="fieldset">
                <RadioGroup row>
                  <FormControlLabel
                    value="זכר"
                    control={<Radio />}
                    label="זכר"
                    {...register("gender", { required: "יש לבחור מין" })}
                  />
                  <FormControlLabel
                    value="נקבה"
                    control={<Radio />}
                    label="נקבה"
                    {...register("gender", { required: "יש לבחור מין" })}
                  />
                </RadioGroup>
                {errors.gender && (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {errors.gender.message}
                  </p>
                )}
              </FormControl>

              <br />
              <Button
                style={{
                  backgroundColor: "black",
                  width: "30%",
                  marginRight: "18%",
                  fontFamily: "system-ui",
                  fontSize: "large",
                }}
                variant="contained"
                disableElevation
                type="submit"
              >
                הרשם
              </Button>
            </div>

            <img
              src="/imeges/loginImg2.png"
              alt=""
              style={{ width: "25%", height: "30vh" }}
            />
          </>
        )}
      </div>
    </form>
  );
};

export default Login;
