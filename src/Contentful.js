 import {createClient} from "contentful";

 export default createClient({
   space:process.env.REACT_APP_API_SPACE_KEY,
   accessToken:process.env.REACT_APP_ACCESS_TOKEN_KEY,
 })



// const contentful = require("contentful");

// export default contentful.createClient({
//   space: process.env.REACT_APP_API_SPACE,
//   accessToken: process.env.REACT_APP_ACCESS_TOKEN
// });
