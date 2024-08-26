import Home from "./components/pages/home/home.jsx";
import About from "./components/pages/about/About.jsx";
import Work from "./components/pages/work/work.jsx";
import Blog from "./components/pages/blog/blog.jsx";
import Contact from "./components/pages/contact/contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/work",
      element: <Work />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    
  ]);
  return (
    <>
      <>
        <div className="App font-lab ">
          <RouterProvider router={router} />
        </div>
      </>
    </>
  );
}

export default App;
