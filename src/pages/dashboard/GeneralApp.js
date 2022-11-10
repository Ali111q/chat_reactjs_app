import Chats from "./Chats";
import React, { lazy, Suspense } from "react";

const Cat = lazy(() => import('../../components/Cat'))

const GeneralApp = () => {

  return (
    <>
      <Chats />
    </>
  );
};

export default GeneralApp;
