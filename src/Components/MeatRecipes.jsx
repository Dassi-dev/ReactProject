import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";
const MeatRecipes = () => {
    const recipes = useSelector((state) => state.RecipeSlice.recipes);
    return (
        <>
        <div style={{marginTop:"10vh",width:"60%",justifyContent:"center",marginRight:"20%"}}>
        <Link to="/AllRecipes" className="link"><img src="imeges/allRecipes.png" alt="allRecipes" style={{width:"100%",marginTop:"3vh"}}/></Link>

        <div style={{ fontFamily: " 'Assistant', sans-serif", textAlign: "right" }}>
           <h1 style={{color:"#e6392b",textAlign:"right",  fontFamily: 'system-ui',fontSize: 'xx-large',fontFamily: " 'Assistant', sans-serif"}}>מנות עיקריות</h1>
           <p style={{fontSize:"x-large",color:"#7f7b7b"}}>מתכננים ארוחה בשרית? כאן תמצאו מגוון מנות עיקריות לשבת או לכל אירוח בשרי. מנות קוצרות מחמאות, מתכונים בשריים בכלום מאמץ שמתאימים לכל אירוח בשרי. תוכלו למצוא גם מתכוני דגים טעימים. מתכוני עוף בתנור, מתכוני בשר מהירים, מנות עיקריות עם פרגיות, חזה עוף או בשר הודו.</p></div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          justifyContent: "space-between",/* רווחים אחידים בין הקלפים */
          gap: "20px" /* רווח בין הקלפים */
        }}
      >
      {recipes.map((recipe) => (
         recipe.category === "בשרי" && <Recipe key={recipe.id} recipe={recipe} />
        ))} 

      </Box>
           </div>
        </>
        
    )
}

export default MeatRecipes