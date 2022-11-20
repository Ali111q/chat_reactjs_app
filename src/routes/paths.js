

import { user, initializeAppp} from "../data/firebase";

// ----------------------------------------------------------------------
function path(root, sublink) {
  return `${root}${sublink}`;
}

  initializeAppp()


const ROOTS_DASHBOARD = "/";

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: user? path(ROOTS_DASHBOARD, "app"):path(ROOTS_DASHBOARD, "login"),
  },
};
