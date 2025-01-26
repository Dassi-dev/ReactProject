import { useSelector } from "react-redux";
import Recipe from './Recipe';
import Box from '@mui/joy/Box';


const Footer = () => {
    const recipes = useSelector((state) => state.RecipeSlice.recipes);

    return(
        <>
         <div style={{ textAlign: "center", marginTop: "15vh" }}>
        <div style={{ display: "inline-block", position: "relative", textAlign: "center", padding: "0 10px", backgroundColor: "#fff", zIndex: 1 }}>
          <h2 style={{ fontSize: "24px", fontFamily: "'Assistant', sans-serif", color: "#e6392b", margin: 0 }}>המתכונים של FOODY </h2>
        </div>
        <hr style={{ width: "100%", border: "1px solid #e6392b", marginTop: "0.5vh", marginBottom: "2vh", opacity: "0.5" }} />
      </div>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", justifyContent: "space-between", width: "70%", marginRight: "15%" }} >
        {recipes.map((recipe) => (<Recipe key={recipe.id} recipe={recipe} />))}
      </Box>
        </>
    )
}
export default Footer