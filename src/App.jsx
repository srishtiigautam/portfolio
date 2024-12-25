import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import AboutMe from "./pages/AboutMe.page";
import Projects from "./pages/Projects.page";
import UiUxDesign from "./pages/UiUxDesign.page";
import Testimonials from "./pages/Testimonials.page";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AboutMe />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/uiuxdesign",
        element: <UiUxDesign />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
