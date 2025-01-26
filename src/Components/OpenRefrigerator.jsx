import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import Recipe from "./Recipe";

const OpenRefrigerator = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [flag, setFlag] = useState(true);
  const recipes = useSelector((state) => state.RecipeSlice.recipes);
  const [arr, setArr] = useState([]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      // אם שדה החיפוש ריק, הצג את כל המתכונים
      setArr(recipes);
      return;
    }

    const allIngredients = searchQuery.split(",").map(ingredient => ingredient.trim().toLowerCase()); // דאג להפוך לאותיות קטנות ולחסל רווחים מיותרים     
    const filteredRecipes = recipes.filter(recipe =>
      recipe.ingredients.some(ingredient => allIngredients.includes(ingredient))
    );

    setFlag(false);
    setArr(filteredRecipes);
    console.log(filteredRecipes)
  };


  // הצגת המתכונים או המסך הראשי של המקרר
  return (flag ?
    <Box
      sx={{
        backgroundImage: "url('/imeges/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 4,
          margin: "20px auto",
          maxWidth: "600px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          marginTop: "5vh"
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          פותחים מקרר ומתחילים לבשל
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", marginBottom: 3 }}>
          מגוון מתכונים מתאימים למה שיש לך עכשיו במקרר
        </Typography>
        <Box
          component="img"
          src="/imeges/myfridgeicon.gif"
          alt="מקרר"
          sx={{ width: 150, marginBottom: 3 }}
        />
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          אז מה יש במקרר?
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", marginBottom: 3 }}>
          אנחנו סקרנים :
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", marginBottom: 2 }}>
          אם ברשימתכם מספר מוצרים - הפרידו אותם בפסיק ואז רווח <br />
          לדוגמה: חלב, שקדים, פיצה, תותים
        </Typography>
        <TextField
          placeholder="כתבו כאן את רשימת המוצרים"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // עדכון השאילתה בזמן הקלדה
          sx={{
            marginBottom: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#444",
            },
          }}
          onClick={handleSearch} // קריאה לפונקציה כשנלחץ על כפתור החיפוש
        >
          תראו לי מתכונים
        </Button>

        {/* הצגת המתכונים */}
        <Box sx={{ marginTop: 4 }}>
          {flag && arr.length > 0 ? (
            arr.map((recipe) => (<Recipe key={recipe.id} recipe={recipe} />))
          ) : flag && arr.length === 0 ? (
            <Typography variant="h6" sx={{ color: "#555" }}>
              לא נמצאו מתכונים התואמים למרכיבים שהוזנו.
            </Typography>
          ) : null}
        </Box>
      </Box>
    </Box> :
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
        justifyContent: "space-between",/* רווחים אחידים בין הקלפים */
        gap: "20px" /* רווח בין הקלפים */
      }}
    >         <div style={{ textAlign: "center", marginTop: "10vh",width:"100%" }}>
 <div style={{ display: "inline-block", position: "relative", textAlign: "center", padding: "0 10px", backgroundColor: "#fff", zIndex: 1 }}>
          <h2 style={{ fontSize: "30px", fontFamily: "'Assistant', sans-serif", color: "#e6392b", margin: 0 }}>המתכונים שיש לכם במקרר </h2>
        </div>
        <hr style={{ width: "100%", border: "1px solid #e6392b", marginTop: "0.5vh", marginBottom: "2vh", opacity: "0.5" }} /></div>
      {arr.map((recipe) => (<Recipe key={recipe.id} recipe={recipe} />))}


    </Box>
  );
};

export default OpenRefrigerator;
