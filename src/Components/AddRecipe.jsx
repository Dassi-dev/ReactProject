import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { createRecipe } from "../Stor/RecipeSlice";
import SuccessAdd from "./SuccessAdd";
import {Select,MenuItem,InputLabel,Radio,RadioGroup,FormControlLabel,FormControl,} from "@mui/material";

const AddRecipe = () => {
  const [id, setId] = useState(19);
  const [name, setName] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [category, setCategory] = useState("");
  const [categories] = useState(["דיאטטי", "קינוחים", "בשרי"]);
  const [instructions, setInstructions] = useState("");
  const [level, setLevel] = useState("");
  const [img, setImg] = useState("");
  const [errors, setErrors] = useState({});
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);
  const [flag,setFlag]=useState(false)
  const dispatch = useDispatch();

  // Validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "שם חייב להיות לפחות 3 תווים").required("שם הוא שדה חובה"),
    prepTime: Yup.string().matches(/^(?:[01]?[0-9]|2[0-3]):([0-5][0-9])$/,"יש להזין זמן בפורמט HH:MM").required("זמן הכנה הוא שדה חובה"),
    ingredients: Yup.array().min(1, "יש להוסיף לפחות מרכיב אחד").required("יש להוסיף לפחות מרכיב אחד"),
    category: Yup.string().required("יש לבחור קטגוריה"),
    instructions: Yup.string().min(10, "הוראות הכנה חייבות להיות לפחות 10 תווים").required("הוראות הכנה הן שדה חובה"),
    level: Yup.string().oneOf(["קל", "בינוני", "קשה"], "רמת קושי לא תקינה").required("יש לבחור רמת קושי"),
  });

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(
        { name, prepTime, ingredients, category, instructions, level },
        { abortEarly: false }
      );
      dispatch(createRecipe({ id, name, prepTime, ingredients, category, instructions, level, img }));
      setFlag(true)
      setId(id + 1);
      setName("");
      setPrepTime("");
      setIngredients([]);
      setCategory("");
      setInstructions("");
      setLevel("");
      setImg("");
      setFileUploaded(false);
      setErrors({});
    } catch (validationErrors) {
      const formattedErrors = {};
      validationErrors.inner.forEach((err) => {
        formattedErrors[err.path] = err.message;
      });
      setErrors(formattedErrors);
    }
  };

  const handleAddIngredient = () => {
    if (currentIngredient) {
      setIngredients([...ingredients, currentIngredient]);
      setCurrentIngredient("");
    }
  };
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
        setFileUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
  <>
    {flag? (<SuccessAdd/>):(
    <div style={{ display: "flex", marginTop: "20vh" }}>
        <img
          src="/imeges/loginImg1.png"
          alt=""
          style={{ width: "25%", height: "-webkit-fill-available", zIndex: "2" }}
        />
        <div style={{ width: "50%", textAlign: "right", marginTop: "-5vh" }}>
        <div style={{ fontFamily: " 'Assistant', sans-serif", textAlign: "right"}}>
        <h1 style={{color:"#e6392b",textAlign:"right",  fontFamily: 'system-ui',fontSize: 'xx-large',fontFamily: " 'Assistant', sans-serif"}}>הוספת מתכון משלכם...</h1></div>
          <h3>שם מתכון</h3>
          <Box sx={{ width: 500, maxWidth: "100%" }}>
            <TextField
              fullWidth
              label="שם מתכון"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Box>

          <h3>זמן הכנה</h3>
          <Box sx={{ width: 500, maxWidth: "100%" }}>
            <TextField
              fullWidth
              label="זמן הכנה (HH:MM)"
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
              error={!!errors.prepTime}
              helperText={errors.prepTime}
            />
          </Box>

          <h3>מצרכים</h3>
          <Box sx={{ width: 500, maxWidth: "100%", marginBottom: "10px" }}>
            <TextField
              fullWidth
              label="הכנס מצרך"
              value={currentIngredient}
              onChange={(e) => setCurrentIngredient(e.target.value)}
            />
          </Box>
          <Button onClick={handleAddIngredient} variant="outlined">
            הוסף מצרך נוסף
          </Button>
          {ingredients.length > 0 && (
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          )}

          <h3>הוראות הכנה</h3>
          <Box sx={{ width: 500, maxWidth: "100%" }}>
            <TextField
              fullWidth
              label="הוראות הכנה"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              error={!!errors.instructions}
              helperText={errors.instructions}
              multiline
            />
          </Box>

          <h3>רמת קושי</h3>
          <FormControl component="fieldset">
            <RadioGroup row value={level} onChange={(e) => setLevel(e.target.value)}>
              <FormControlLabel value="קל" control={<Radio />} label="קל" />
              <FormControlLabel value="בינוני" control={<Radio />} label="בינוני" />
              <FormControlLabel value="קשה" control={<Radio />} label="קשה" />
            </RadioGroup>
          </FormControl>

          <h3>בחר קטגוריה</h3>
          <Box sx={{ width: 500, maxWidth: "100%" }}>
            <FormControl fullWidth>
              <InputLabel id="category-label">קטגוריה</InputLabel>
              <Select
                labelId="category-label"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <h3>הכנס תמונה</h3>
          <Button component="label" variant="outlined" style={{ width: "16.7%" }}>
            בחר קובץ
            <input
              type="file"
              accept="image/*"
              onChange={handleImgChange}
              style={{ display: "none" }}
            />
          </Button>
          <br />
          {fileUploaded && (
            <span style={{ display: "flex", marginTop: "2vh" }}>הקובץ עלה בהצלחה!</span>
          )}
          <br />
          <Button
            style={{ backgroundColor: "black", width: "30%", fontSize: "large" }}
            onClick={handleSubmit}
            variant="contained"
          >
            הוספה
          </Button>
        </div>
        <img
          src="/imeges/loginImg2.png"
          alt=""
          style={{ width: "25%", height: "30vh" }}
        />
    </div>)}
    </>

  );
};

export default AddRecipe;
