import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home/Home";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Website from "../components/layout/Website";
import Pricing from "../Pages/pricing/Pricing";
import ScriptToVideo from "../Pages/scriptToVideo/ScriptToVideo";
import AiVideoClip from "../Pages/aiVideoClip/aiVideoClip";
import AIImageGenerator from "../Pages/aiImageGenerator/AIImageGenerator";
import TextToVideo from "../Pages/textToVideo/TextToVideo";
import AutoCaption from "../Pages/autoCaption/AutoCaption";
import ImageToVideo from "../Pages/imageToVideo/ImageToVideo";
import RealisticVoiceover from "../Pages/realisticVoiceover/RealisticVoiceover";
import ShortsVideoEditing from "../Pages/shortsVideoEditing/ShortsVideoEditing";
import PlatformResizing from "../Pages/platformResizing/PlatformResizing";
import AnalyticsSeo from "../Pages/Analytics & SEO Tools/AnalyticsSeo";
import BackgroundAudio from "../Pages/BackgroundAudio/BackgroundAudio";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../Layout/Main/Main";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import AICaptionGenerator from "../Dashboard/AICaptionGenerator/AICaptionGenerator";
import AIVideoClipGenerator from "../Dashboard/AIVideoClipGenerator/AIVideoClipGenerator";
import AnalyticsSeoTools from "../Dashboard/AnalyticsSeoTools/AnalyticsSeoTools";
import TextToVideoGenerator from "../Dashboard/TextToVideoGenerator/TextToVideoGenerator";
import RealisticVoiceovers from "../Dashboard/RealisticVoiceovers/RealisticVoiceovers";
// import AutoVideoEditing from "../Dashboard/AutoVideoEditing/AutoVideoEditing";
import AutoCaptionHashtags from "../Dashboard/AutoCaptionHashtags/AutoCaptionHashtags";
import AiVideoGenerator from "../Pages/aiVideoGenerator/AiVideoGenerator";
import Signup from "../Dashboard/Auth/Signup";
import ScriptToVideoDashboard from "../Dashboard/ScriptToVideo/ScriptToVideoDashboard";
import TextToVideoDashboard from "../Dashboard/TextToVideo/TextToVideoDashboard";
import ImageToVideoDashboard from "../Dashboard/ImageToVideo/ImageToVideoDashboard";
import AIImageGeneratorDashboard from "../Dashboard/AIImageGenerator/AIImageGeneratorDashboard";
import ShortsVideoEditorDashboard from "../Dashboard/ShortsVideoEditor/ShortsVideoEditorDashboard";
import PlatformResizingHero from "../components/platformResizing/PlatformResizingHero";
import PlatformResizingDashboard from "../Dashboard/PlatformResizing/PlatformResizingDashboard";
import BackgroundAudioDashboard from "../Dashboard/BackgroundAudio/BackgroundAudioDashboard";
import AutoVideoEditingDashboard from "../Dashboard/AutoVideoEditing/AutoVideoEditingDashboard";
import AutoVideoEditing from "../Pages/autoVideoEditing/AutoVideoEditing";

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
      {
        path: "/auto-video-editing",
        element: <AutoVideoEditing />,
      },
      {
        path: "/shorts-video-editing",
        element: <ShortsVideoEditing />,
      },
      {
        path: "/platform-resizing",
        element: <PlatformResizing />,
      },
      {
        path: "/analytics-and-seo-tools",
        element: <AnalyticsSeo />,
      },
      {
        path: "/background-audio",
        element: <BackgroundAudio/>,
      },
    ],
  },
  // Authentication routes for users not signed in
  {
    path: "/dashboard",
    element: <PrivateRoute />, // PrivateRoute for auth-based access
    children: [
      {
        path: "sign-up", // Signup route, relative to /dashboard
        element: <Signup />,
      },
      // Uncomment and add other authentication-related routes when needed
      // {
      //   path: "forgate-password",
      //   element: <ForgatePassword />,
      // },
      // {
      //   path: "verify-code",
      //   element: <VerifyCode />,
      // },
      // {
      //   path: "new-password",
      //   element: <NewPass />,
      // },
      {
        path: "", // Main layout for authenticated users, dashboard as default
        element: <MainLayout />,
        children: [
          {
            path: "", // Default dashboard page
            element: <Dashboard />,
          },
          {
            path: "script-to-video", // Relative path to /dashboard/script-to-video
            element: <ScriptToVideoDashboard />,
          },
          {
            path: "text-to-video", // Relative path to /dashboard/text-to-video
            element: <TextToVideoDashboard />,
          },
          {
            path: "image-to-video", // Relative path to /dashboard/image-to-video
            element: <ImageToVideoDashboard />,
          },
          {
            path: "ai-caption-generator", // Relative path to /dashboard/ai-caption-generator
            element: <AICaptionGenerator />,
          },
          {
            path: "ai-video-generator", // Relative path to /dashboard/ai-video-generator
            element: <AIVideoClipGenerator />,
          },
          {
            path: "analytics-seo-tools", // Relative path to /dashboard/analytics-seo-tools
            element: <AnalyticsSeoTools />,
          },
          {
            path: "ai-image-generator", // Relative path to /dashboard/ai-image-generator
            element: <AIImageGeneratorDashboard />,
          },
          {
            path: "text-to-video-generator", // Relative path to /dashboard/ai-image-generator
            element: <TextToVideoGenerator />,
          },
          {
            path: "shorts-video-editor", // Relative path to /dashboard/ai-image-generator
            element: <ShortsVideoEditorDashboard />,
          },
                    {
            path: "platform-resizing", // Relative path to /dashboard/ai-image-generator
            element: <PlatformResizingDashboard/>,
          },

          {
            path: "auto-caption-hashtags", // Relative path to /dashboard/auto-caption-hashtags
            element: <AutoCaptionHashtags />,
          },
          {
            path: "realistic-voiceover", // Relative path to /dashboard/realistic-voiceover
            element: <RealisticVoiceovers />,
          },
                    {
            path: "background-audio",
            element: <BackgroundAudioDashboard />,
          },
          {
            path: "auto-video-editing", // Relative path to /dashboard/auto-video-editing
            element: <AutoVideoEditingDashboard />,
          },
        ],
      },
    ],
  },
]);

export default router;
