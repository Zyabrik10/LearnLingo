import MainLayout from "layouts/MainLayout";
import { Home } from "pages";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  useEffect(() => {
    console.log("App component mounted");
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
