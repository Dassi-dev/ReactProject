import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUtensils, FaClock, FaFire } from "react-icons/fa";

const RecipeDetails = () => {
    const { id } = useParams();
    const recipe = useSelector(x => x.RecipeSlice.recipes.find((recipex) => recipex.id === parseInt(id)));

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", height: "90vh" ,direction:"ltr"}}>
                {/* תוכן */}
                <div className="recipe-details-container">
                <img
                    src={recipe.img}
                    alt="Recipe"
                    style={{width: "50%",height: "100%",objectFit: "cover", objectPosition: "left" }}/>
                <div style={{fontFamily: "'Assistant', sans-serif", width: "70%", display: "flex", flexDirection: "column",alignItems: "center",direction: "rtl",marginTop:"7vh",}}>
                    {/* שורת מידע למעלה */}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "70%",
                        borderBottom: "1px solid #ddd",
                        paddingBottom: "1vh",
                        marginBottom: "2vh"
                    }}>
                        <div style={{ textAlign: "center", flex: 1 }}>
                            <FaFire style={{ color: "#e6392b", fontSize: "1.5rem" }} />
                            <p>רמת קושי</p>
                            <strong>{recipe.level}</strong>
                        </div>
                        <div style={{
                            height: "40px",
                            width: "1px",
                            backgroundColor: "#ddd",
                            margin: "0 1rem"
                        }}></div>
                        <div style={{ textAlign: "center", flex: 1 }}>
                            <FaUtensils style={{ color: "#e6392b", fontSize: "1.5rem" }} />
                            <p>סוג</p>
                            <strong>{recipe.category}</strong>
                        </div>
                        <div style={{
                            height: "40px",
                            width: "1px",
                            backgroundColor: "#ddd",
                            margin: "0 1rem"
                        }}></div>
                        <div style={{ textAlign: "center", flex: 1 }}>
                            <FaClock style={{ color: "#e6392b", fontSize: "1.5rem" }} />
                            <p>זמן הכנה</p>
                            <strong>{recipe.prepTime} דקות</strong>
                        </div>
                    </div>

                    {/* שם המתכון */}
                    <h1 style={{
                        color: "#e6392b",
                        fontSize: "2rem",
                        textAlign: "center",
                        marginBottom: "2vh"
                    }}>
                        {recipe.name}
                    </h1>

                    {/* מצרכים */}
                    <h3 style={{
                        color: "#e6392b",
                        textAlign: "center",
                        marginBottom: "1vh"
                    }}>מצרכים</h3>
                    <ul style={{
                        direction: "rtl",
                        paddingInlineStart: "0",
                        marginBottom: "2vh",
                    }}>
                        {recipe.ingredients.map((x, index) => (
                            <li key={index} style={{ marginBottom: "0.5vh" }}>{x}</li>
                        ))}
                    </ul>

                    {/* הוראות הכנה */}
                    <h3 style={{
                        color: "#e6392b",
                        textAlign: "center",
                        marginBottom: "1vh"
                    }}>הוראות הכנה</h3>
                    <p style={{  marginBottom: "2vh" ,width:"70%"}}>{recipe.instructions}</p>

                    {/* מתכון מועדף */}
                    {recipe.isFavorite && (
                        <div style={{
                            marginTop: "2vh",
                            color: "#e6392b",
                            textAlign: "center"
                        }}>
                            ❤️ אחד מהמתכונים האהובים עליך
                        </div>
                    )}
                </div>
            </div>
            </div>
        </>
    );
};

export default RecipeDetails;
