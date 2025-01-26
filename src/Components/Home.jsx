import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';
import IconButton from '@mui/joy/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useSelector } from "react-redux";
import Recipe from './Recipe';
import framesxTheme from '../theme';
import HeroLeft01 from '../blocks/HeroLeft01';
const Home = () => {

  const recipes = useSelector((state) => state.RecipeSlice.recipes);

  function ColorSchemeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) {
      return null;
    }
    return (
      <IconButton
        data-screenshot="toggle-mode"
        size="lg"
        variant="soft"
        color="neutral"
        onClick={() => {
          if (mode === 'light') {
            setMode('dark');
          } else {
            setMode('light');
          }
        }}
        sx={{
          position: 'fixed',
          zIndex: 999,
          top: '1rem',
          right: '1rem',
          borderRadius: '50%',
          boxShadow: 'sm',
        }}
      >
        {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    );
  }



  return (
    <>
      <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
        <CssBaseline />
        <ColorSchemeToggle />
        <HeroLeft01 />
      </CssVarsProvider>
      <div style={{ textAlign: "center", marginTop: "-8vh" }}>
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

export default Home
