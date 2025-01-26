import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const ErorPage = () => {
    return(
        <>
        <div style={{display:"flex",flexDirection:"column",marginTop:"-12vh"}}>
        <img
          src="/imeges/eror1.png"
          alt=""
          style={{ width: '60%', height: 'auto', zIndex: "2",margin:"auto" }}
        />
                    <Link to="/" className="link"><Button
      variant="contained"
      sx={{
        backgroundColor: '#4e8ef7', // צבע רקע
        color: 'white',            // צבע טקסט
        fontSize: '18px',          // גודל פונט
        fontWeight: 'bold',        // עובי פונט
        textTransform: 'uppercase',// אותיות גדולות
        borderRadius: '25px',      // עיגול הפינות
        padding: '10px 30px',      // ריווח פנימי
        '&:hover': {
          backgroundColor: '#3c76cc', // צבע רקע במעבר עכבר
        },
      }}
    >
      HOME
    </Button></Link>
    </div>
        </>
    )
}
export default ErorPage