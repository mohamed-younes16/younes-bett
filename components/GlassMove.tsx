"use client";
import { useMediaQuery } from "usehooks-ts";
import { GoogleGeminiEffect } from "./ui/Gemini";
import { useScroll, useTransform } from "framer-motion";
import { memo, useRef } from "react";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { lazy } from "react";
import { useStore } from "@/utils/store";
import { useMemo } from "react";

const GlassMove = () => {
  const ref = useRef(null);
  const { isReady } = useStore();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  const matches = useMediaQuery("(min-width: 1024px)");
  const Spline = lazy(() => import("@splinetool/react-spline"));

  return useMemo(
    () =>
      isReady ? (
        <div className="fixed flexcenter -z-[1] inset-0">
          {matches ? (
            <>
              <Suspense
                fallback={
                  <div>
                    <Loader2 className=" animate-spin text-neutral-600 opacity-70 w-10 h-10" />
                  </div>
                }
              >
                <Spline
                  suppressHydrationWarning
                  scene="https://prod.spline.design/QGTAg3FPRbtiP4Pz/scene.splinecode"
                />
              </Suspense>
            </>
          ) : (
            <GoogleGeminiEffect
              className=" fixed w-[100dvw]  left-0 h-[50dvh] top-1/2 lg:hidden  -translate-y-1/2 flexcenter"
              pathLengths={[
                pathLengthFirst,
                pathLengthSecond,
                pathLengthThird,
                pathLengthFourth,
                pathLengthFifth,
              ]}
            />
          )}
        </div>
      ) : null,
    [
      Spline,
      isReady,
      matches,
      pathLengthFifth,
      pathLengthFirst,
      pathLengthFourth,
      pathLengthSecond,
      pathLengthThird,
    ]
  );
};
export default memo(GlassMove);
