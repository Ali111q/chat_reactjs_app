import { auth, firebase } from "../data/firebase";



// ----------------------------------------------------------------------
function path(root, sublink) {
  return `${root}${sublink}`;
}
let user;
let index = 0;
//  if (index === 0 ) {
// firebase.auth.onAuthStateChanged(userr => {
//  index = 1;
//      if (userr) {
//       user = true;

//   } else {
//       console.log("loged out");
//       user=false;
//   }
//   }
//   // currentUser is ready now.
 
// );}



const ROOTS_DASHBOARD = "/";

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, user? "app":"login"),
  },
};


