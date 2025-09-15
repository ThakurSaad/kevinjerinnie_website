import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home/Home";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Website from "../components/layout/Website";
import Pricing from "../Pages/pricing/Pricing";
import ScriptToVideo from "../Pages/scriptToVideo/ScriptToVideo";
import AiVideoGenerator from "../Pages/aiVideoGenerator/AiVideoGenerator";
import AiVideoClip from "../Pages/aiVideoClip/aiVideoClip";
import AIImageGenerator from "../Pages/aiImageGenerator/AIImageGenerator";
import TextToVideo from "../Pages/textToVideo/TextToVideo";
import AutoCaption from "../Pages/autoCaption/AutoCaption";
import ImageToVideo from "../Pages/imageToVideo/ImageToVideo";
import RealisticVoiceover from "../Pages/realisticVoiceover/RealisticVoiceover";

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
        element: <AiVideoClip />,
      },
      {
        path: "/ai-image-generator",
        element: <AIImageGenerator />,
      },
      {
        path: "/script-to-Video",
        element: <ScriptToVideo />,
      },
      {
        path: "/ai-video-generator",
        element: <AiVideoGenerator />,
      },
      {
        path: "/text-to-video",
        element: <TextToVideo />,
      },
      {
        path: "/auto-caption-and-hashtags",
        element: <AutoCaption />,
      },
      {
        path: "/image-to-video",
        element: <ImageToVideo />,
      },
           {
        path: "/realistic-voiceover",
        element: <RealisticVoiceover />,
      },
    ],
  },
]);
export default router;
