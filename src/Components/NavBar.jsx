import React, { Suspense, useEffect, useState } from 'react';
import { Link as RouterLink, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Box, IconButton, Button, Link, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [flag, setFlag] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // מנהל את מצב התפריט הנפתח
  const userObj = useSelector((x) => x.UserSlice);
  const Home = React.lazy(() => import('./Home'));
  const MeatRecipes = React.lazy(() => import('./MeatRecipes'));
  const DietRecipes = React.lazy(() => import('./DietRecipes'));
  const Desserts = React.lazy(() => import('./Desserts'));
  const Recipe = React.lazy(() => import('./Recipe'));
  const Login = React.lazy(() => import('./Login'));
  const ErorPage = React.lazy(() => import('./ErorPage'));
  const Favorites = React.lazy(() => import('./Favorites'));
  const AddRecipe = React.lazy(() => import('./AddRecipe'));
  const RecipeDetails = React.lazy(() => import('./RecipeDetails'));
  const AllRecipes = React.lazy(() => import('./AllRecipes'));
  const OpenRefrigerator = React.lazy(() => import('./OpenRefrigerator'));


  useEffect(() => {
    if (userObj.name !== 'אורח') setFlag(false);
  }, [userObj.name]);

  const menuItems = [
    { text: 'foody-בית', path: '/' },
    { text: 'מנות עיקריות', path: '/MeatRecipes' },
    { text: 'מתכונים דיאטטים', path: '/DietRecipes' },
    { text: 'קינוחים', path: '/Desserts' },
    { text: 'הוספת מתכון', path: '/AddRecipe' },
    { text: flag ? 'התחברות' : 'מועדפים', path: flag ? '/Login' : '/Favorites' },
  ];

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#3e3939', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src="/imeges/logoFoody.svg" alt="Logo" style={{ height: '40px' }} />

          {/* תפריט ניווט למחשב */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
            component="ul"
          >
            {menuItems.map((item) => (
              <Link
                key={item.text}
                component={RouterLink}
                to={item.path}
                sx={{
                  textDecoration: 'none',
                  color: '#e1e1e1',
                  fontSize: '18px',
                  fontWeight: 950,
                  fontFamily: 'Assistant, sans-serif',
                  textTransform: 'uppercase',
                  padding: '5px 15px',
                  '&:hover': {
                    color: '#FFD700',
                    transition: 'color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)',
                  },
                }}
              >
                {item.text}
              </Link>
            ))}
          </Box>
          <Link component={RouterLink} to="/OpenRefrigerator" className="link">
            {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}> */}
            <span style={{
              position: "absolute",
              color: "#fff",
              fontSize: "12px",
              fontWeight: "700",
              top: "13px",
              left:" 306px"
            }}>פותחים את המקרר וממשיכים לבשל</span>
            <img src="/imeges/myfridge-small.gif" alt="gif" style={{ width: "68%" }} />
            {/* </div> */}
          </Link>

          {/* תפריט רספונסיבי */}
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <div className="navbar-user">
            <img
              src={!flag ? userObj.gender === 'זכר' ? '/imeges/iconMan.png' : '/imeges/iconWoman.png' : '/imeges/icon.png'}
              alt="User Icon"
              className="user-icon"
            />
            <h1 className="navbar-greeting">שלום {userObj.name}</h1>
          </div>

        </Toolbar>
      </AppBar>

      {/* תפריט נפתח - Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)} // סגירת ה-Drawer בלחיצה מחוץ
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: '#3e3939',
            height: '100%',
            color: 'white',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} component={RouterLink} to={item.path}>
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: 'white',
                    textTransform: 'uppercase',
                    fontFamily: 'Assistant, sans-serif',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <div className='content'>
        <Routes>
          <Route path='/Login' element={<Suspense fallback={'Loading...'}><Login /></Suspense>} />
          <Route path='/Login' element={<Suspense fallback={'Loading...'}><Login /></Suspense>} />
          <Route path='/' element={<Suspense fallback={'Loading...'}><Home /></Suspense>} />
          <Route path='/MeatRecipes/' element={<Suspense fallback={'Loading...'}><MeatRecipes /></Suspense>} />
          <Route path='/MeatRecipes/:id' element={<Suspense fallback={'Loading...'}><RecipeDetails /></Suspense>} />
          <Route path='/DietRecipes' element={<Suspense fallback={'Loading...'}><DietRecipes /></Suspense>} />
          <Route path='/DietRecipes/:id' element={<Suspense fallback={'Loading...'}><Recipe /></Suspense>} />
          <Route path='/Desserts/' element={<Suspense fallback={'Loading...'}><Desserts /></Suspense>} />
          <Route path='/Desserts/:id' element={<Suspense fallback={'Loading...'}><Desserts /></Suspense>} />
          <Route path='*' element={<Suspense fallback={'loading...'}><ErorPage /></Suspense>} />
          <Route path='/Favorites' element={<Suspense fallback={'loading...'}><Favorites /></Suspense>} />
          <Route path='/AddRecipe' element={<Suspense fallback={'loading...'}><AddRecipe /></Suspense>} />
          <Route path='/OpenRefrigerator' element={<Suspense fallback={'loading...'}><OpenRefrigerator /></Suspense>} />
        </Routes>
      </div>
    </>
  );
};

export default NavBar;

