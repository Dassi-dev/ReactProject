import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    recipes: [
        {
          id: 1,
          name: "עוף בתנור",
          prepTime: "40 ",
          ingredients: ["עוף", "תבלינים", "שמן זית"],
          category: "בשרי",
          isFavorite: false,
          instructions: "מרחו שמן זית על העוף, פזרו תבלינים, ואפו בתנור בחום של 180 מעלות למשך 40 דקות.",
          level:"בינוני",
          img: "/imeges/1.png"
        },
        {
          id: 2,
          name: "פשטידת גבינות",
          prepTime: "30 ",
          ingredients: ["גבינות", "ביצים", "קמח"],
          category: "דיאטטי",
          instructions: "ערבבו גבינות, ביצים וקמח. הכניסו לתנור בחום של 180 מעלות למשך 30 דקות.",
          isFavorite: false,
          level:"בינוני",
          img:"/imeges/2.png"

        },
        {
          id: 3,
          name: " מרק ירקות בשרי",
          prepTime: "25 ",
          ingredients: ["עוף","גזר", "קישוא", "בצל"],
          category: "בשרי",
          instructions: "חתכו את הירקות, בשלו בסיר עם מים עוף ותבלינים במשך 60 דקות.",
          isFavorite: false,
          level:"קל",
          img:"/imeges/3.png"
        },
          {
            id: 4,
            name: "סלט קפרזה עם מוצרלה דלת שומן",
            prepTime: "10 ",
            ingredients: ["עגבניות", "מוצרלה דלת שומן", "בסיליקום", "שמן זית", "חומץ בלסמי"],
            category: "דיאטטי",
            instructions: "חתכו את העגבניות והמוצרלה, סידרו על צלחת וחתכו את הבסיליקום מעל. הוסיפו חומץ ושמן זית.",
            isFavorite: false,
            level: "קל",
            img: "/imeges/4.png"
          },
          {
            id: 5,
            name: "עוגת שוקולד חמה",
            prepTime: "30 ",
            ingredients: ["שוקולד מריר", "חמאה", "סוכר", "ביצים", "קמח", "תמצית וניל"],
            category: "קינוחים",
            instructions: "ממיסים את השוקולד והחמאה, מוסיפים את הסוכר והביצים, ואז את הקמח. אופים בתנור עד שהתפרצות השוקולד החם.",
            isFavorite: false,
            level: "בינוני",
            img: "/imeges/5.png"
          },
        {
            id: 6,
            name: "סטייק אנטריקוט עם תפוחי אדמה",
            prepTime: "40 ",
            ingredients: ["סטייק אנטריקוט", "תפוחי אדמה", "שום", "תבלינים", "שמן זית"],
            category: "בשרי",
            instructions: "תבלו את הסטייקים ותבשילו אותם על גריל או במחבת עד למידת העשייה הרצויה. חתכו תפוחי אדמה, תבלו ואפו בתנור.",
            isFavorite: false,
            level: "בינוני",
            img: "/imeges/6.png"
          },
          {
            id: 7,
            name: "צלי בשר בתנור עם ירקות",
            prepTime: "2 ",
            ingredients: ["בשר צלי", "גזר", "תפוח אדמה", "בצל", "שום", "תבלינים"],
            category: "בשרי",
            instructions: "תבלו את הבשר, הניחו בתנור עם הירקות ואפו עד שהבשר מתרכך.",
            isFavorite: false,
            level: "קשה",
            img: "/imeges/7.png"
          },
          {
            id: 8,
            name: "מרק עוף עם ירקות",
            prepTime: "60 ",
            ingredients: ["עוף", "גזר", "קישוא", "בצל", "תבלינים"],
            category: "בשרי",
            instructions: "חתכו את הירקות, בשלו בסיר עם מים, עוף ותבלינים במשך שעה.",
            isFavorite: false,
            level: "קל",
            img: "/imeges/8.png"
          },
          {
            id: 9,
            name: "קציצות בשר ברוטב עגבניות",
            prepTime: "45 ",
            ingredients: ["בשר טחון", "בצל", "תבלינים", "עגבניות", "שום"],
            category: "בשרי",
            instructions: "יצרו קציצות, טגנו אותן ושימו ברוטב עגבניות מבושל.",
            isFavorite: false,
            level: "בינוני",
            img: "/imeges/9.png"
          },
          {
            id: 10,
            name: "המבורגר בשרי עם צ'יפס",
            prepTime: "30 ",
            ingredients: ["בשר טחון", "לחמניות המבורגר", "תפוחי אדמה", "תבלינים"],
            category: "בשרי",
            instructions: "צורו קציצות המבורגר, טגנו עם צ'יפס ליד.",
            isFavorite: false,
            level: "קל",
            img: "/imeges/10.png"
          },
          {
            id: 11,
            name: "סלט ירקות עם טחינה",
            prepTime: "10 ",
            ingredients: ["עגבניות", "חסה", "גזר", "מלח", "טחינה"],
            category: "דיאטטי",
            instructions: "חתכו את כל הירקות וערבבו עם טחינה.",
            isFavorite: false,
            level: "קל",
            img: "/imeges/11.png"
          },
          {
            id: 12,
            name: "דג אפוי עם ירקות",
            prepTime: "25 ",
            ingredients: ["דג", "גזר", "קישוא", "שום", "שמן זית"],
            category: "דיאטטי",
            instructions: "תבלו את הדג, אפו בתנור עם הירקות עד שהדג מוכן.",
            isFavorite: false,
            level: "בינוני",
            img: "/imeges/12.png"
          },
          {
            id: 13,
            name: "קציצות טופו מוקפצות",
            prepTime: "20 ",
            ingredients: ["טופו", "גזר", "שום", "סויה", "תיבול"],
            category: "דיאטטי",
            instructions: "קצצו את הטופו וערבבו עם תיבול. טגנו במחבת.",
            isFavorite: false,
            level: "קל",
            img: "/imeges/13.png"
          },
          {
            id: 14,
            name: "שייק מרענן",
            prepTime: "5 ",
            ingredients: ["תרד", "בננה", "חלב שקדים", "קפאין"],
            category: "דיאטטי",
            instructions: "הכניסו את כל החומרים לבלנדר וערבבו עד שהתערובת חלקה.",
            isFavorite: false,
            level: "קל",
            img: "/imeges/14.png"
          },
          {
            id: 15,
            name: "פבלובה עם פירות",
            prepTime: "45 ",
            ingredients: ["חלבונים", "סוכר", "פירות יער", "שמנת מתוקה"],
            category: "קינוחים",
            instructions: "הקציפו את החלבונים עם הסוכר, אפו עד שהפבלובה יציבה. הוסיפו את השמנת והפירות.",
            isFavorite: false,
            level: "בינוני",
            img: "/imeges/15.png"
          },
          {
            id: 16,
            name: "עוגת גבינה עם ריבת תות",
            prepTime: "60 ",
            ingredients: ["גבינה לבנה", "סוכר", "ביצים", "ריבת תות"],
            category: "קינוחים",
            instructions: "מערבבים את כל החומרים ואופים עד שהעוגה יציבה. מוסיפים ריבת תות מעל.",
            isFavorite: false,
            level: "קשה",
            img: "/imeges/16.png"
          },
          {
            id: 17,
            name: "עוגיות שוקולד צ׳יפס",
            prepTime: "25 ",
            ingredients: ["קמח", "סוכר חום", "שוקולד צ׳יפס", "חמאה"],
            category: "קינוחים",
            instructions: "מערבבים את כל החומרים, יוצרים עוגיות ואופים בתנור.",
            isFavorite: false,
            level: "קל",
            img: "/imeges/17.png"
          },
          {
            id: 18,
            name: "טירמיסו",
            prepTime: "45 ",
            ingredients: ["מסקרפונה", "קפה", "סוכר", "ביסקוויטים", "קקאו"],
            category: "קינוחים",
            instructions: "סוחפים את הביסקוויטים בקפה, ממלאים בשכבות קרם מסקרפונה ומפזרים קקאו.",
            isFavorite: false,
            level: "בינוני",
            img: "/imeges/18.png"
          }
          
          
     ],
}

const RecipeSlice = createSlice({
    name: "recipe",
    initialState: initialValue,
    reducers: {
        createRecipe: (state, action) => {
          state.recipes.push({
           id:state.id = action.payload.id,
            name:state.name = action.payload.name,
            prepTime:  state.prepTime = action.payload.prepTime,
            ingredients:state.ingredients = action.payload.ingredients  , 
            category: state.category = action.payload.category   ,
            instructions:state.instructions = action.payload.instructions  , 
            level:state.level = action.payload.level   ,
            img:state.img = action.payload.img  } )
           },
        UpdateRecipe:(state,action) => {
            const recipe = state.recipes.find((r) => r.id === action.payload); 
            if (recipe) {
                recipe.isFavorite = true; 
            }}
            
    }

})

export const {createRecipe,UpdateRecipe} = RecipeSlice.actions
export default RecipeSlice.reducer