import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";
const Desserts = () => {
    const recipes = useSelector((state) => state.RecipeSlice.recipes);
    return (
        <>
        <div style={{marginTop:"10vh",width:"60%",justifyContent:"center",marginRight:"20%"}}>
        <Link to="/AllRecipes" className="link"><img src="imeges/allRecipes.png" alt="allRecipes" style={{width:"100%",marginTop:"3vh"}}/></Link>
        <div style={{ fontFamily: " 'Assistant', sans-serif", textAlign: "right"}}>
           <h1 style={{color:"#e6392b",textAlign:"right",  fontFamily: 'system-ui',fontSize: 'xx-large',fontFamily: " 'Assistant', sans-serif"}}>קינוחים ומתוקים</h1>
           <p style={{fontSize:"x-large",color:"#7f7b7b"}}>כאן תוכלו למצוא מבחר מתכוני קינוחים מנצחים וגם מתכונים מתוקים טעימים וקלים להכנה עם אפייה וללא אפייה. אז אם האורחים כבר בדרך או שבא לכם משהו מתוק הנה לכם מגוון מתכונים לקינוחים מהירים מרשימים וקוצרי מחמאות שניתן להכין בצ'יק.
           </p></div>
           <Box style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
       {recipes.map((recipe) => (
         recipe.category === "קינוחים" && <Recipe key={recipe.id} recipe={recipe} />
        ))}

      </Box>
           </div>
        </>
        
    )
}


export default Desserts