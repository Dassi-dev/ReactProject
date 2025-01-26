import React, { useState } from "react";
import { FaClock } from "react-icons/fa";
import { GiLevelEndFlag } from "react-icons/gi";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { IconButton, Modal, Box, Typography, Button } from "@mui/material";
import { UpdateRecipe } from "../Stor/RecipeSlice";

const Recipe = ({ recipe }) => {
    const [flag, setFlag] = useState(false);
    const [pressed,setPressed] = useState(false)
    const userObj = useSelector(x => x.UserSlice);
    const dispatch = useDispatch();
    const toggleLike = () => {
        if (userObj.name === "אורח")
            setFlag(true);
        else {
            dispatch(UpdateRecipe(recipe.id));
        }

    };
    return (<>
           <div className="recipe-container">
            {/* הקישור הוא רק על התמונה והפרטים */}
            <Link to={`/MeatRecipes/${recipe.id}`} style={{ textDecoration: "none" }}>
                <img src={recipe.img} alt="Recipe" className="recipe-image" />
                <div className="recipe-details">
                    <h3 style={{ color: "#3e3939" }}>{recipe.name}</h3>
                    <div className="icon-container" style={{ display: "flex", alignItems: "center" ,width:"70%"}}>
                        <div className="icon-item" style={{ marginRight: "10px" }}>
                            <FaClock className="icon" />
                            <p className="icon-text" style={{ marginLeft: "5px" }}>{recipe.prepTime} דקות</p>
                        </div>
                        <div className="separator" style={{ margin: "0 10px" }}></div>
                        <div className="icon-item" style={{ marginRight: "10px" }}>
                            <GiLevelEndFlag className="icon" />
                            <p className="icon-text" style={{ marginLeft: "5px" }}>{recipe.level}</p>
                        </div>
                    </div>
                </div>
            </Link>
            {/* הלב נמצא כאן, לא בתוך ה-Link */}
            <div className="icon-item" style={{ marginLeft: "10px" }}>
                <IconButton onClick={toggleLike} style={{marginLeft: "-9vw",marginTop: "-10vh"}}>
                    {recipe.isFavorite ? (
                        <FavoriteIcon sx={{ color: 'red' }} /> // לב מלא בצבע אדום
                    ) : (
                        <FavoriteBorderIcon sx={{ color: 'gray' }} /> // לב ריק בצבע אפור
                    )}
                </IconButton>
            </div>
        </div>
            <Modal open={flag} onClose={() => setFlag(false)}>
                <Box className="modal-style" style={{winth:"30%",height:"50vh"}}>
                <img src="/imeges/logoFoody.svg" alt="SVG Image" className="logo1" />
                    <Typography variant="h6" component="h2">
                       <h2>עוד לא התחברת</h2> 
                    </Typography>
                    <p>התחברו ותתחילו להנות ממגוון עצום של תכנים קולינריים ומתכונים עם אלפי שעות וידאו, להרכיב לעצמכם ספר מתכונים אישי עם המתכונים שהכי אהבתם, לשתף בתמונות, להגיב ולשאול שאלות.
משתמשים חדשים? הירשמו</p>
                    <Typography sx={{ mt: 2 }}>
                        <Link to="/Login" style={{ textDecoration: "none", color: "blue" }}>
                            <Button variant="contained" color="primary">
                                התחברות
                            </Button>
                        </Link>
                    </Typography>
                    <Button
                        onClick={() => setFlag(false)}
                        variant="outlined"
                        sx={{ mt: 2 }}
                    >
                        סגור
                    </Button>
                </Box>
            </Modal>

        </>
    );
};

export default Recipe;
