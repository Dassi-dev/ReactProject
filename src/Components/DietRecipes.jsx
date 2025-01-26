import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";

const DietRecipes = () => {
    const recipes = useSelector((state) => state.RecipeSlice.recipes);
    return (
        <>
        <div style={{marginTop:"10vh",width:"60%",justifyContent:"center",marginRight:"20%"}}>
        <Link to="/AllRecipes" className="link"><img src="imeges/allRecipes.png" alt="allRecipes" style={{width:"100%",marginTop:"3vh"}}/></Link>
        <div style={{ fontFamily: " 'Assistant', sans-serif", textAlign: "right" }}>
           <h1 style={{color:"#e6392b",textAlign:"right",  fontFamily: 'system-ui',fontSize: 'xx-large',fontFamily: " 'Assistant', sans-serif"}}>מתכונים דיאטטים</h1>
           <p style={{fontSize:"x-large",color:"#7f7b7b"}}>מבחר מתכונים בריאים ודיאטטים ללא פחמימות, טעימים וקלים להכנה כאשר המטרה היא שגם מי שבדיאטה או רוצה לאכול אוכל בריא יוכל להנות מאוכל טעים ומזין. באתר מתכונים ב-10 דקות תוכלו למצוא מגוון ענק של מתכונים דיאטטים קלים להכנה. מתכונים דלי קלוריות כמו מתכוני ירקות או מתכונים בלי גלוטן או גרסאות אפויות במקום מטוגנות, מתוקים בריאים ומופחתי קלוריות וגם מתכוני דיאטה מהירים.</p>
           </div>
           <Box style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
       {recipes.map((recipe) => (
         recipe.category === "דיאטטי" && <Recipe key={recipe.id} recipe={recipe} />
        ))}

      </Box>
           </div>
        </>
        
    )
}


export default DietRecipes