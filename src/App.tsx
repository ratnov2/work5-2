import React, { createContext, useEffect, useState } from "react";
import {
  Location,
  useLocation,
  useNavigate,
  useNavigation,
  useRoutes,
} from "react-router-dom";
import { TransitionGallery } from "./ui/transition-slide/TransitionGallery";
import { Gallery } from "./screens/gallery/Gallery";
import { Auth } from "./screens/auth/Auth";
import { PhotoResult } from "./screens/photo-result/PhotoResult";
import { Upload } from "./screens/upload/Upload";
import { AnimatePresence } from "framer-motion";
import { TransitionUpload } from "./ui/transition-slide/TransitionUpload";
import { TransitionResult } from "./ui/transition-slide/TransitionResult";
interface ILocalContext {
  locate: {
    prevLocate: string | null;
    currLocate: string | null;
  };
  onLocateChange: (locate: string) => void;
}
export const LocateContext = createContext({} as ILocalContext);
function App() {
  const location = useLocation();
  const navigation = useNavigate();
  const [locate, setLocate] = useState<{
    prevLocate: string | null;
    currLocate: string | null;
  }>({
    prevLocate: null,
    currLocate: location.pathname,
  });

  const onLocateChange = (locate: string) => {
    setLocate((state) => ({
      ...state,
      prevLocate: state.currLocate,
      currLocate: locate,
    }));
  };

  useEffect(() => {
    if (locate.currLocate) {
      navigation(locate.currLocate);
    }
  }, [locate]);

  const router = useRoutes([
    {
      path: "/",
      element: (
        <TransitionGallery locate={locate}>
          <Gallery />
        </TransitionGallery>
      ),
    },
    {
      path: "/upload",
      element: (
        <TransitionUpload locate={locate}>
          <Upload />
        </TransitionUpload>
      ),
    },
    {
      path: "/result",
      element: (
        <TransitionResult locate={locate}>
          <PhotoResult />
        </TransitionResult>
      ),
    },
    {
      path: "/main-auth",
      element: (
        <TransitionGallery locate={locate}>
          <Gallery isAuth />
        </TransitionGallery>
      ),
    },
  ]);

  //console.log(prevLocation);

  if (!router) return null;

  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden", width: 375 }}>
      <LocateContext.Provider value={{ locate, onLocateChange }}>
        <AnimatePresence mode="sync" initial={false}>
          {React.cloneElement(router, { key: location.pathname })}
        </AnimatePresence>
      </LocateContext.Provider>
    </div>
  );
}

export default App;
