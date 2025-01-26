import { Box, Typography, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import Recipe from "./Recipe";

const Favorites = () => {
    const recipes = useSelector((state) => state.RecipeSlice.recipes);
    const hasFavoriteRecipe = recipes.some((recipe) => recipe.isFavorite);

    return (
        <Box
            sx={{
                width: "70%", // רוחב מלא
                minHeight: "100vh", // גובה מסך מלא
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: hasFavoriteRecipe ? "flex-start" : "center", // מרכז תוכן אם אין מתכונים
                overflow: "hidden", // מניעת גלילה פנימית
                padding: "20px 0", // מרווח פנימי
                margin:"auto"
            }}
        >
            {hasFavoriteRecipe ? (
                <>
                    <Box sx={{ textAlign: "center", marginBottom: "2rem" ,width:"100%"}}>
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontFamily: "'Assistant', sans-serif",
                                color: "#e6392b",
                                zIndex: 1,
                                display: "inline-block",
                                position: "relative",
                                backgroundColor: "#fff",
                                padding: "0 10px",
                                marginTop:"6vh",
                            }}
                        >
                            המתכונים האהובים עלי ביותר!
                        </Typography>
                        <Divider
                            sx={{
                                margin:"auto",
                                borderColor: "#e6392b",
                                width: "80%",
                                opacity: 0.5,
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: "2rem",
                            width: "100%",
                        }}
                    >
                        {recipes.map(
                            (recipe) =>
                                recipe.isFavorite && (
                                    <Recipe key={recipe.id} recipe={recipe} />
                                )
                        )}
                    </Box>
                </>
            ) : (
                <Typography
                    variant="h5"
                    sx={{
                        color: "#e6392b",
                        fontFamily: "'Assistant', sans-serif",
                    }}
                >
                    ❤️❤️❤️ אין מתכונים מעודפים
                </Typography>
            )}
        </Box>
    );
};

export default Favorites;
