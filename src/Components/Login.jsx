import {  useState } from "react"
import { useDispatch } from "react-redux"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createUser } from "../Stor/UserSlice";
import SuccessLogin from "./successLogin";
import * as Yup from 'yup'
import {Radio,RadioGroup,FormControlLabel,FormControl,} from "@mui/material";

const Login = () => {
  const [name, setName] = useState(null)
  const [gender, setGender] = useState(null)

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [isRegistered, setIsRegistered] = useState(false) // State לבדיקת אם נרשמנו בהצלחה
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch() // יצירת dispatch מה-Redux
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "שם חייב להיות לפחות 3 תווים").required("שם הוא שדה חובה"),
    email: Yup.string().email("אנא הזן מייל תקין").required("מייל הוא שדה חובה"),
    password: Yup.string().min(6, "הסיסמה חייבת להיות לפחות 6 תווים").required("סיסמה היא שדה חובה"),
    gender:Yup.string().oneOf(["נקבה", "זכר"], "לא נבחר מין").required("יש לבחור  זכר/נקבה"),
  });

  const handleValidation = () => {
    validationSchema
      .validate({ name, email, password,gender }, { abortEarly: false })
      .then(() => {
        // אם הכל תקין, מבצע את הרישום
        dispatch(createUser({ name, email, password,gender }));
        setIsRegistered(true);
      })
      .catch((err) => {
        // אם יש שגיאות, מעדכן את ה-state של errors
        const newErrors = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrors(newErrors);
      });
  };


  return (

    <div style={{ display: "flex", marginTop: "20vh" }}>
      {isRegistered ? (<SuccessLogin />) : (<>
        <img
          src="/imeges/loginImg1.png"
          alt=""
          style={{ width: '25%', height: 'auto', zIndex: "2" }}
        />
        <div style={{ width: "50%", fontFamily: " 'Assistant', sans-serif", textAlign: "right", marginTop: "-5vh" }}>
          <h1 style={{ color: "#e6392b" }}>התחברות</h1>
          <p>התחברו ותתחילו להנות ממגוון עצום של תכנים קולינריים ומתכונים עם אלפי שעות וידאו, להרכיב לעצמכם ספר מתכונים אישי עם המתכונים שהכי אהבתם, לשתף בתמונות, להגיב ולשאול שאלות.</p>
          <h3 style={{ display: "ruby-text" }}> הכנס שם משתמש
            <p style={{ color: "red", fontSize: "22px" }}> *</p></h3>
          <Box sx={{ width: 500, maxWidth: '100%', margin: "" }}>
            <TextField fullWidth label="Name" id="fullWidth"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name} // אם יש שגיאה, `error` יהיה true
              helperText={errors.name} // מציג את הודעת השגיאה
            />
          </Box>
          <br />
          <h3 style={{ display: "ruby-text" }}>הכנס  כתובת מייל
            <p style={{ color: "red", fontSize: "22px" }}> *</p></h3>
          <Box sx={{ width: 500, maxWidth: '100%', margin: "" }}>
            <TextField fullWidth label="Email" id="fullWidth1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email} // אם יש שגיאה, `error` יהיה true
              helperText={errors.email} // מציג את הודעת השגיאה
            />
          </Box>
          <br />
          <h3 style={{ display: "ruby-text" }}>הכנס סיסמה
            <p style={{ color: "red", fontSize: "22px" }}> *</p></h3>
          <br />
          <Box sx={{ width: 500, maxWidth: '100%', margin: "" }}>
            <TextField fullWidth label="PassWord" id="fullWidth2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />
          </Box>
          <h3>מין</h3>
          <FormControl component="fieldset">
            <RadioGroup row value={gender} onChange={(e) => setGender(e.target.value)}>
              <FormControlLabel value="זכר" control={<Radio />} label="זכר" />
              <FormControlLabel value="נקבה" control={<Radio />} label="נקבה" />
            </RadioGroup>
          </FormControl>

          <br />
          <Button style={{ backgroundColor: "black", width: "30%", marginRight: "18%", fontFamily: "system-ui", fontSize: "large" }}
            variant="contained" disableElevation
            onClick={() => { handleValidation() }}>הרשם</Button>
        </div>

        <img
          src="/imeges/loginImg2.png"
          alt=""
          style={{ width: '25%', height: '30vh' }}
        />
      </>)}
    </div>

  );
}

export default Login