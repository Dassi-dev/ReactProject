import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const SuccessAdd = () => {
    return (
        <Box
            sx={{
                width: "60%",
                margin: "13vh auto",
                textAlign: "center",
                padding: "20px",
                border: "2px solid #800020", // בורדו כהה
                borderRadius: "10px",
                backgroundColor: "#f9f9f9", // רקע לבן-אפור
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Typography 
                variant="h4" 
                component="h1" 
                sx={{ color: "#800020", marginBottom: "20px" }} // טקסט בצבע בורדו
            >
                המתכון הוסף בהצלחה!
            </Typography>
            <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{
                    backgroundColor: "#800020", // רקע בורדו
                    color: "white",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    "&:hover": {
                        backgroundColor: "#9b2c2c", // בורדו בהיר יותר
                    },
                }}
            >
                חזרה לעמוד הבית
            </Button>
        </Box>
    );
};

export default SuccessAdd;
