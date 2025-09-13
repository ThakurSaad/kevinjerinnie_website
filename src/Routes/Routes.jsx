import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home/Home";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Website from "../components/layout/Website";
import Pricing from "../Pages/pricing/Pricing";
import ScriptToVideo from "../Pages/scriptToVideo/ScriptToVideo";
import AiVideoGenerator from "../Pages/aiVideoGenerator/AiVideoGenerator";
import AiVideoClip from "../Pages/aiVideoClip/aiVideoClip";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    element: <Website />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
        {
        path: "/ai-video-clip",
        element: <AiVideoClip/>,
      },
      {
        path: "/script-to-Video",
        element: <ScriptToVideo />,
      },
      {
        path: "/ai-video-generator",
        element: <AiVideoGenerator />,
      },
    ],
  },
]);
export default router;
